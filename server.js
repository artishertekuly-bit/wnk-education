/**
 * WNK Education - Realtime Gamification Backend Server
 * Express + WebSockets + In-Memory State
 */

require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { WebSocketServer, WebSocket } = require('ws');

const {
  generateQuestionsWithFallback,
  getOfflineQuestions,
  MODEL_FALLBACK_CHAIN
} = require('./gemini-service');

const {
  BattleshipBoard,
  CheckersBoard,
  AiBotPlayer
} = require('./game-engine');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// -------------------------------------------------------------
// In-Memory Storage
// -------------------------------------------------------------
const activeRooms = new Map(); // roomId => Room
const clientSockets = new Map(); // ws => { userId, username, roomId }

// -------------------------------------------------------------
// REST Endpoints
// -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    activeRoomsCount: activeRooms.size,
    connectedSockets: clientSockets.size,
    modelsChain: MODEL_FALLBACK_CHAIN
  });
});

app.get('/api/rooms', (req, res) => {
  const roomsList = [];
  for (const [id, r] of activeRooms.entries()) {
    if (r.status === 'waiting' && !r.isPrivate) {
      roomsList.push({
        id: r.id,
        gameType: r.gameType,
        topic: r.topic,
        host: {
          id: r.host.id,
          username: r.host.username,
          avatar: r.host.avatar
        },
        status: r.status,
        createdAt: r.createdAt
      });
    }
  }
  res.json({ rooms: roomsList });
});

app.post('/api/generate-questions', async (req, res) => {
  const { topic, apiKey } = req.body;
  try {
    const questions = await generateQuestionsWithFallback(topic || 'Математика', apiKey);
    res.json({ success: true, count: questions.length, questions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Fallback route for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// -------------------------------------------------------------
// HTTP & WebSocket Server Setup
// -------------------------------------------------------------
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

function send(ws, type, data = {}) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type, ...data }));
  }
}

function broadcastToRoom(room, type, data = {}) {
  const payload = JSON.stringify({ type, ...data });
  if (room.hostWs && room.hostWs.readyState === WebSocket.OPEN) {
    room.hostWs.send(payload);
  }
  if (room.guestWs && room.guestWs.readyState === WebSocket.OPEN) {
    room.guestWs.send(payload);
  }
}

function broadcastLobbyUpdate() {
  const openRooms = [];
  for (const [id, r] of activeRooms.entries()) {
    if (r.status === 'waiting' && !r.isPrivate) {
      openRooms.push({
        id: r.id,
        gameType: r.gameType,
        topic: r.topic,
        host: {
          id: r.host.id,
          username: r.host.username,
          avatar: r.host.avatar
        },
        createdAt: r.createdAt
      });
    }
  }

  const payload = JSON.stringify({
    type: 'lobby_update',
    rooms: openRooms,
    onlineCount: clientSockets.size
  });

  for (const [ws, info] of clientSockets.entries()) {
    if (!info.roomId && ws.readyState === WebSocket.OPEN) {
      ws.send(payload);
    }
  }
}

// -------------------------------------------------------------
// WebSocket Connection Lifecycle
// -------------------------------------------------------------
wss.on('connection', (ws) => {
  clientSockets.set(ws, { userId: null, username: 'Қонақ', roomId: null });

  // Initial welcome
  send(ws, 'connected', {
    message: 'WNK Realtime Arena қосылды',
    onlineCount: clientSockets.size
  });
  broadcastLobbyUpdate();

  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message);
      await handleSocketMessage(ws, data);
    } catch (err) {
      console.error('[WS Message Error]', err);
      send(ws, 'error', { message: 'Сұранысты өңдеуде қате орын алды' });
    }
  });

  ws.on('close', () => {
    const info = clientSockets.get(ws);
    if (info && info.roomId) {
      handlePlayerDisconnect(ws, info.roomId);
    }
    clientSockets.delete(ws);
    broadcastLobbyUpdate();
  });
});

// -------------------------------------------------------------
// WebSocket Message Dispatcher
// -------------------------------------------------------------
async function handleSocketMessage(ws, data) {
  const { type } = data;

  switch (type) {
    case 'auth_identify': {
      const { user } = data;
      if (user && user.id) {
        clientSockets.set(ws, {
          userId: user.id,
          username: user.name || 'Оқушы',
          avatar: user.avatar,
          roomId: null
        });
        send(ws, 'identified', { user });
        broadcastLobbyUpdate();
      }
      break;
    }

    case 'lobby_get_rooms': {
      broadcastLobbyUpdate();
      break;
    }

    case 'create_room': {
      await handleCreateRoom(ws, data);
      break;
    }

    case 'join_room': {
      handleJoinRoom(ws, data);
      break;
    }

    case 'place_ships': {
      handlePlaceShips(ws, data);
      break;
    }

    case 'request_move': {
      handleRequestMove(ws, data);
      break;
    }

    case 'submit_answer': {
      handleSubmitAnswer(ws, data);
      break;
    }

    case 'activate_radar': {
      handleActivateRadar(ws, data);
      break;
    }

    case 'chat_message': {
      handleChatMessage(ws, data);
      break;
    }

    case 'surrender': {
      handleSurrender(ws, data);
      break;
    }

    default:
      console.log('[WS Unknown message type]', type);
  }
}

// -------------------------------------------------------------
// Game Room Handlers
// -------------------------------------------------------------

function generateRoomId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `WNK-${code}`;
}

async function handleCreateRoom(ws, data) {
  const { host, gameType, topic, isVsAi, customApiKey, isPrivate } = data;
  if (!host || !host.id) {
    return send(ws, 'error', { message: 'Ойынды бастау үшін жүйеге кіру қажет' });
  }

  const roomId = generateRoomId();
  const room = {
    id: roomId,
    gameType: gameType === 'checkers' ? 'checkers' : 'battleship',
    topic: topic || 'Математика & Логика',
    isVsAi: !!isVsAi,
    isPrivate: !!isPrivate,
    createdAt: Date.now(),
    status: isVsAi ? (gameType === 'checkers' ? 'playing' : 'placing') : 'waiting',
    host: {
      id: host.id,
      username: host.name || host.username || 'Ойыншы 1',
      avatar: host.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + host.id
    },
    guest: isVsAi ? {
      id: 'bot_wnk_ai',
      username: 'WNK AI Ұстаз',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=wnkai_master',
      isBot: true
    } : null,
    hostWs: ws,
    guestWs: null,
    turn: host.id, // Host starts
    questions: [],
    questionIndex: 0,
    streaks: { [host.id]: 0, ...(isVsAi ? { 'bot_wnk_ai': 0 } : {}) },
    radarAvailable: { [host.id]: false, ...(isVsAi ? { 'bot_wnk_ai': false } : {}) },
    pendingMove: null,
    scores: { [host.id]: 0, ...(isVsAi ? { 'bot_wnk_ai': 0 } : {}) },
    aiBot: isVsAi ? new AiBotPlayer('balanced') : null
  };

  // Setup game-specific boards
  if (room.gameType === 'battleship') {
    room.battleship = {
      [host.id]: new BattleshipBoard(),
      ...(isVsAi ? { 'bot_wnk_ai': BattleshipBoard.generateRandomFleet() } : {})
    };
  } else {
    room.checkers = new CheckersBoard();
    room.checkersColors = {
      [host.id]: 'w', // Host is White
      ...(isVsAi ? { 'bot_wnk_ai': 'b' } : {}) // AI is Black
    };
  }

  activeRooms.set(roomId, room);
  const info = clientSockets.get(ws) || {};
  clientSockets.set(ws, { ...info, roomId });

  send(ws, 'room_created', {
    roomId,
    room: sanitizeRoomForPlayer(room, host.id)
  });

  broadcastLobbyUpdate();

  // Async load questions via Gemini Fallback
  generateQuestionsWithFallback(room.topic, customApiKey)
    .then(questions => {
      room.questions = questions;
      console.log(`[Room ${roomId}] 25 сұрақ дайын болды (${room.topic})`);
      broadcastToRoom(room, 'questions_ready', { count: questions.length, topic: room.topic });

      // If AI mode and battleship, AI is ready immediately
      if (room.isVsAi && room.gameType === 'battleship') {
        send(ws, 'ai_fleet_ready', { message: 'WNK AI өз флотын орналастырды' });
      }
    })
    .catch(err => {
      console.error('[Room Questions Error]', err);
      room.questions = getOfflineQuestions(room.topic);
    });
}

function handleJoinRoom(ws, data) {
  const { roomId, guest } = data;
  const room = activeRooms.get(roomId);

  if (!room) {
    return send(ws, 'error', { message: 'Бөлме табылмады' });
  }

  if (room.status !== 'waiting' || room.guest) {
    return send(ws, 'error', { message: 'Бұл бөлме бос емес немесе ойын басталып кеткен' });
  }

  if (!guest || !guest.id) {
    return send(ws, 'error', { message: 'Ойынға қосылу үшін жүйеге кіру қажет' });
  }

  room.guest = {
    id: guest.id,
    username: guest.name || guest.username || 'Ойыншы 2',
    avatar: guest.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + guest.id
  };
  room.guestWs = ws;
  room.streaks[guest.id] = 0;
  room.radarAvailable[guest.id] = false;
  room.scores[guest.id] = 0;

  if (room.gameType === 'battleship') {
    room.battleship[guest.id] = new BattleshipBoard();
    room.status = 'placing';
  } else {
    room.checkersColors[guest.id] = 'b'; // Guest is Black
    room.status = 'playing';
  }

  const info = clientSockets.get(ws) || {};
  clientSockets.set(ws, { ...info, roomId });

  // Notify both players
  send(room.hostWs, 'guest_joined', {
    guest: room.guest,
    room: sanitizeRoomForPlayer(room, room.host.id)
  });

  send(room.guestWs, 'room_joined', {
    roomId,
    room: sanitizeRoomForPlayer(room, room.guest.id)
  });

  broadcastLobbyUpdate();
}

function handlePlaceShips(ws, data) {
  const { roomId, ships, isAuto } = data;
  const room = activeRooms.get(roomId);
  if (!room || room.gameType !== 'battleship') return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId) return;

  if (isAuto) {
    room.battleship[playerId] = BattleshipBoard.generateRandomFleet();
  } else if (Array.isArray(ships)) {
    const board = new BattleshipBoard();
    if (board.validateFleet(ships)) {
      board.ships = ships.map(s => ({
        id: s.id,
        name: s.name,
        size: s.size,
        coords: s.coords,
        hits: new Set()
      }));
      room.battleship[playerId] = board;
    } else {
      return send(ws, 'error', { message: 'Кемелер ережеге сай орналаспаған (арақашықтық сақталмаған)' });
    }
  }

  send(ws, 'fleet_placed', {
    fleet: room.battleship[playerId].getFullView()
  });

  // Check if both ready
  const hostReady = room.battleship[room.host.id]?.ships?.length === 10;
  const guestReady = room.battleship[room.guest.id]?.ships?.length === 10;

  if (hostReady && guestReady) {
    room.status = 'playing';
    broadcastToRoom(room, 'battle_started', {
      turn: room.turn,
      message: 'Теңіз шайқасы басталды! Оқты нысанаға көздеңіз.'
    });
    // Send initial sanitized states
    send(room.hostWs, 'game_state_update', sanitizeRoomForPlayer(room, room.host.id));
    if (room.guestWs) {
      send(room.guestWs, 'game_state_update', sanitizeRoomForPlayer(room, room.guest.id));
    }
  } else {
    broadcastToRoom(room, 'waiting_for_opponent_fleet', {
      readyPlayerId: playerId
    });
  }
}

function handleRequestMove(ws, data) {
  const { roomId, moveData } = data;
  const room = activeRooms.get(roomId);
  if (!room || room.status !== 'playing') return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId || room.turn !== playerId) {
    return send(ws, 'error', { message: 'Қазір сіздің кезегіңіз емес!' });
  }

  if (room.pendingMove) {
    return send(ws, 'error', { message: 'Сұраққа жауап берілуде...' });
  }

  // Determine difficulty
  let difficulty = 'easy';
  if (room.gameType === 'battleship') {
    // Alternate or based on streak
    difficulty = (room.streaks[playerId] >= 2) ? 'medium' : (Math.random() < 0.5 ? 'easy' : 'medium');
  } else if (room.gameType === 'checkers') {
    const legalMoves = room.checkers.getLegalMoves(room.checkersColors[playerId]);
    const requested = legalMoves.find(m =>
      m.from.r === moveData.from.r && m.from.c === moveData.from.c &&
      m.to.r === moveData.to.r && m.to.c === moveData.to.c
    );

    if (!requested) {
      return send(ws, 'error', { message: 'Рұқсат етілмеген жүріс!' });
    }
    difficulty = requested.difficulty;
    moveData.isCapture = requested.isCapture;
    moveData.captured = requested.captured;
    moveData.isPromotion = requested.isPromotion;
  }

  // Pick question matching difficulty
  const question = pickQuestion(room, difficulty);
  const timeLimitSeconds = (question.difficulty === 'hard' || question.context_text) ? 45 : 30;

  room.pendingMove = {
    playerId,
    moveData,
    question,
    expiresAt: Date.now() + (timeLimitSeconds * 1000) + 1500, // +1.5s network buffer
    timeLimitSeconds
  };

  // Anti-cheat: Strip correct answer and explanation before sending to client
  const clientQuestion = {
    id: question.id,
    difficulty: question.difficulty,
    topic: question.topic,
    context_text: question.context_text,
    question: question.question,
    options: question.options,
    timeLimitSeconds
  };

  // Send question to player
  send(ws, 'question_presented', {
    question: clientQuestion,
    timeLimitSeconds
  });

  // Notify opponent that player is answering a question
  const opponentWs = playerId === room.host.id ? room.guestWs : room.hostWs;
  if (opponentWs) {
    send(opponentWs, 'opponent_answering', {
      playerName: playerId === room.host.id ? room.host.username : room.guest.username,
      difficulty: question.difficulty,
      timeLimitSeconds
    });
  }
}

function pickQuestion(room, requestedDifficulty) {
  if (!room.questions || room.questions.length === 0) {
    room.questions = getOfflineQuestions(room.topic);
  }

  const candidates = room.questions.filter(q => q.difficulty === requestedDifficulty);
  if (candidates.length > 0) {
    const q = candidates[Math.floor(Math.random() * candidates.length)];
    return q;
  }
  // Fallback to sequential
  const q = room.questions[room.questionIndex % room.questions.length];
  room.questionIndex++;
  return q;
}

function handleSubmitAnswer(ws, data) {
  const { roomId, selectedOptionIndex } = data;
  const room = activeRooms.get(roomId);
  if (!room || !room.pendingMove) return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId || room.pendingMove.playerId !== playerId) return;

  const { moveData, question, expiresAt } = room.pendingMove;
  const isTimeout = Date.now() > expiresAt;
  const isCorrect = !isTimeout && selectedOptionIndex === question.correct_answer;

  room.pendingMove = null;

  if (isCorrect) {
    // Successful answer
    room.streaks[playerId] = (room.streaks[playerId] || 0) + 1;
    room.scores[playerId] = (room.scores[playerId] || 0) + (question.difficulty === 'hard' ? 30 : question.difficulty === 'medium' ? 20 : 10);

    // If streak is 3, unlock Radar
    if (room.streaks[playerId] === 3 && room.gameType === 'battleship') {
      room.radarAvailable[playerId] = true;
    }

    // Execute Move
    if (room.gameType === 'battleship') {
      executeBattleshipMove(room, playerId, moveData, question, true);
    } else {
      executeCheckersMove(room, playerId, moveData, question, true);
    }
  } else {
    // Failed answer / timeout
    room.streaks[playerId] = 0; // Streak reset

    const failReason = isTimeout ? 'Уақыт аяқталды!' : 'Қате жауап!';
    broadcastToRoom(room, 'move_failed', {
      playerId,
      playerName: playerId === room.host.id ? room.host.username : room.guest.username,
      reason: failReason,
      correctAnswerIndex: question.correct_answer,
      explanation: question.explanation,
      nextTurn: getOpponentId(room, playerId)
    });

    // Pass turn to opponent
    room.turn = getOpponentId(room, playerId);
    broadcastGameState(room);

    // Trigger AI move if it's AI's turn
    triggerAiTurnIfNeeded(room);
  }
}

function executeBattleshipMove(room, playerId, moveData, question, isCorrect) {
  const opponentId = getOpponentId(room, playerId);
  const targetBoard = room.battleship[opponentId];
  const shotResult = targetBoard.receiveShot(moveData.x, moveData.y);

  const isGameOver = targetBoard.isFleetDestroyed();
  if (isGameOver) {
    room.status = 'finished';
    room.winner = playerId;
  }

  // In classic rules: if HIT, player gets another shot! If MISS, switch turn.
  if (shotResult.status === 'hit' && !isGameOver) {
    room.turn = playerId; // Remains same player
  } else if (!isGameOver) {
    room.turn = opponentId; // Switch turn
  }

  broadcastToRoom(room, 'move_executed', {
    gameType: 'battleship',
    playerId,
    playerName: playerId === room.host.id ? room.host.username : room.guest.username,
    shot: { x: moveData.x, y: moveData.y, result: shotResult.status },
    shotResult,
    isCorrect,
    streak: room.streaks[playerId],
    radarAvailable: room.radarAvailable[playerId],
    nextTurn: room.turn,
    isGameOver,
    winner: room.winner,
    questionExplanation: question.explanation
  });

  broadcastGameState(room);
  triggerAiTurnIfNeeded(room);
}

function executeCheckersMove(room, playerId, moveData, question, isCorrect) {
  const color = room.checkersColors[playerId];
  const result = room.checkers.executeMove(moveData, color);

  if (result.isGameOver) {
    room.status = 'finished';
    room.winner = playerId;
  } else {
    room.turn = getOpponentId(room, playerId);
  }

  broadcastToRoom(room, 'move_executed', {
    gameType: 'checkers',
    playerId,
    playerName: playerId === room.host.id ? room.host.username : room.guest.username,
    move: moveData,
    board: result.board,
    scores: room.checkers.getScores(),
    streak: room.streaks[playerId],
    nextTurn: room.turn,
    isGameOver: result.isGameOver,
    winner: room.winner,
    questionExplanation: question.explanation
  });

  broadcastGameState(room);
  triggerAiTurnIfNeeded(room);
}

function handleActivateRadar(ws, data) {
  const { roomId, center } = data; // center: { x, y }
  const room = activeRooms.get(roomId);
  if (!room || room.gameType !== 'battleship' || room.status !== 'playing') return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId || room.turn !== playerId) {
    return send(ws, 'error', { message: 'Қазір сіздің кезегіңіз емес!' });
  }

  if (!room.radarAvailable[playerId]) {
    return send(ws, 'error', { message: 'Радар бонусы қолжетімсіз (қатарынан 3 дұрыс жауап қажет)!' });
  }

  // To activate radar, must answer a HARD question!
  const question = pickQuestion(room, 'hard');
  const timeLimitSeconds = 45;

  room.pendingMove = {
    playerId,
    isRadar: true,
    center,
    question,
    expiresAt: Date.now() + (timeLimitSeconds * 1000) + 1500,
    timeLimitSeconds
  };

  send(ws, 'question_presented', {
    question: {
      id: question.id,
      difficulty: 'hard',
      topic: question.topic,
      context_text: question.context_text,
      question: `[РАДАРДЫ ІСКЕ ҚОСУ СЫНАҒЫ]: ${question.question}`,
      options: question.options,
      timeLimitSeconds
    },
    isRadar: true,
    timeLimitSeconds
  });
}

function triggerAiTurnIfNeeded(room) {
  if (!room.isVsAi || room.status !== 'playing' || room.turn !== 'bot_wnk_ai') return;

  // Natural delay for AI move (1.5 seconds)
  setTimeout(() => {
    if (room.status !== 'playing' || room.turn !== 'bot_wnk_ai') return;

    if (room.gameType === 'battleship') {
      const humanId = room.host.id;
      const humanBoard = room.battleship[humanId];
      const botShot = room.aiBot.decideBattleshipShot(
        Array.from(humanBoard.shotsReceived.entries()).map(([k, result]) => {
          const [x, y] = k.split(',').map(Number);
          return { x, y, result };
        })
      );

      // AI "answers" question with 80% accuracy
      const willHit = Math.random() < 0.82;
      if (willHit) {
        const shotResult = humanBoard.receiveShot(botShot.x, botShot.y);
        const isGameOver = humanBoard.isFleetDestroyed();
        if (isGameOver) {
          room.status = 'finished';
          room.winner = 'bot_wnk_ai';
        } else {
          room.turn = shotResult.status === 'hit' ? 'bot_wnk_ai' : humanId;
        }

        broadcastToRoom(room, 'move_executed', {
          gameType: 'battleship',
          playerId: 'bot_wnk_ai',
          playerName: 'WNK AI Ұстаз',
          shot: { x: botShot.x, y: botShot.y, result: shotResult.status },
          shotResult,
          isCorrect: true,
          nextTurn: room.turn,
          isGameOver,
          winner: room.winner,
          questionExplanation: 'WNK AI сұраққа сәтті жауап беріп, оқ атты.'
        });

        broadcastGameState(room);
        if (room.turn === 'bot_wnk_ai') {
          triggerAiTurnIfNeeded(room);
        }
      } else {
        // AI missed the question
        room.turn = humanId;
        broadcastToRoom(room, 'move_failed', {
          playerId: 'bot_wnk_ai',
          playerName: 'WNK AI Ұстаз',
          reason: 'WNK AI сұрақтан сүрінді!',
          nextTurn: humanId
        });
        broadcastGameState(room);
      }
    } else if (room.gameType === 'checkers') {
      const legalMoves = room.checkers.getLegalMoves('b');
      const botMove = room.aiBot.decideCheckersMove(legalMoves);

      if (!botMove) {
        // AI has no moves, Human wins
        room.status = 'finished';
        room.winner = room.host.id;
        broadcastGameState(room);
        return;
      }

      const result = room.checkers.executeMove(botMove, 'b');
      if (result.isGameOver) {
        room.status = 'finished';
        room.winner = 'bot_wnk_ai';
      } else {
        room.turn = room.host.id;
      }

      broadcastToRoom(room, 'move_executed', {
        gameType: 'checkers',
        playerId: 'bot_wnk_ai',
        playerName: 'WNK AI Ұстаз',
        move: botMove,
        board: result.board,
        scores: room.checkers.getScores(),
        nextTurn: room.turn,
        isGameOver: result.isGameOver,
        winner: room.winner,
        questionExplanation: 'WNK AI тактикалық жүрісті сәтті жүзеге асырды.'
      });

      broadcastGameState(room);
    }
  }, 1600);
}

function handleChatMessage(ws, data) {
  const { roomId, text } = data;
  const room = activeRooms.get(roomId);
  if (!room) return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId) return;

  const senderName = playerId === room.host.id ? room.host.username : room.guest.username;
  broadcastToRoom(room, 'chat_message', {
    senderId: playerId,
    senderName,
    text: String(text).slice(0, 150),
    timestamp: Date.now()
  });
}

function handleSurrender(ws, data) {
  const { roomId } = data;
  const room = activeRooms.get(roomId);
  if (!room || room.status !== 'playing') return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId) return;

  const opponentId = getOpponentId(room, playerId);
  room.status = 'finished';
  room.winner = opponentId;

  broadcastToRoom(room, 'game_surrendered', {
    surrenderedPlayerId: playerId,
    winner: opponentId,
    message: `${playerId === room.host.id ? room.host.username : room.guest.username} ойынды аяқтады`
  });

  broadcastGameState(room);
}

function handlePlayerDisconnect(ws, roomId) {
  const room = activeRooms.get(roomId);
  if (!room) return;

  const playerId = getPlayerIdFromWs(ws, room);
  if (!playerId) return;

  if (room.status === 'playing') {
    const opponentId = getOpponentId(room, playerId);
    room.status = 'finished';
    room.winner = opponentId;
    broadcastToRoom(room, 'opponent_disconnected', {
      disconnectedPlayerId: playerId,
      winner: opponentId
    });
  } else if (room.status === 'waiting') {
    activeRooms.delete(roomId);
    broadcastLobbyUpdate();
  }
}

// -------------------------------------------------------------
// State Sanitization & Helpers
// -------------------------------------------------------------
function getPlayerIdFromWs(ws, room) {
  if (room.hostWs === ws) return room.host.id;
  if (room.guestWs === ws) return room.guest.id;
  return null;
}

function getOpponentId(room, playerId) {
  return playerId === room.host.id ? (room.guest ? room.guest.id : null) : room.host.id;
}

function broadcastGameState(room) {
  if (room.hostWs && room.hostWs.readyState === WebSocket.OPEN) {
    send(room.hostWs, 'game_state_update', sanitizeRoomForPlayer(room, room.host.id));
  }
  if (room.guestWs && room.guestWs.readyState === WebSocket.OPEN) {
    send(room.guestWs, 'game_state_update', sanitizeRoomForPlayer(room, room.guest.id));
  }
}

function sanitizeRoomForPlayer(room, playerId) {
  const opponentId = getOpponentId(room, playerId);
  const isHost = playerId === room.host.id;

  const base = {
    id: room.id,
    gameType: room.gameType,
    topic: room.topic,
    status: room.status,
    turn: room.turn,
    host: room.host,
    guest: room.guest,
    myId: playerId,
    isMyTurn: room.turn === playerId,
    myStreak: room.streaks[playerId] || 0,
    radarAvailable: !!room.radarAvailable[playerId],
    myScore: room.scores[playerId] || 0,
    opponentScore: opponentId ? (room.scores[opponentId] || 0) : 0,
    winner: room.winner
  };

  if (room.gameType === 'battleship') {
    const myBoard = room.battleship[playerId];
    const opponentBoard = opponentId ? room.battleship[opponentId] : null;

    base.battleship = {
      myFleet: myBoard ? myBoard.getFullView() : null,
      opponentSea: opponentBoard ? opponentBoard.getSanitizedViewForOpponent() : null
    };
  } else if (room.gameType === 'checkers') {
    base.checkers = {
      board: room.checkers.grid,
      myColor: room.checkersColors[playerId],
      scores: room.checkers.getScores(),
      legalMoves: room.turn === playerId ? room.checkers.getLegalMoves(room.checkersColors[playerId]) : []
    };
  }

  return base;
}

// -------------------------------------------------------------
// Start Server
// -------------------------------------------------------------
server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  WNK Education Server is running on port: ${PORT}`);
  console.log(`  HTTP: http://localhost:${PORT}`);
  console.log(`  WebSocket: ws://localhost:${PORT}/ws`);
  console.log(`  Gemini Models Chain: ${MODEL_FALLBACK_CHAIN.join(' -> ')}`);
  console.log(`====================================================`);
});
