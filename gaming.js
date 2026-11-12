/**
 * WNK Education - Real-time Gamification Client (Battleship & Checkers)
 * Realtime WebSockets + In-Memory State Sync + Gemini AI Questions
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 1. Audio Synthesizer (Web Audio API - Zero External Assets)
  // -------------------------------------------------------------
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('wnk_sound_muted') === 'true';
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, type, duration, gainVal = 0.1) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    click() { this.playTone(800, 'sine', 0.05, 0.05); }
    fire() { this.playTone(180, 'sawtooth', 0.25, 0.15); }
    hit() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.35);
      } catch (e) {}
    }
    miss() { this.playTone(320, 'sine', 0.2, 0.08); }
    radar() {
      this.playTone(1200, 'sine', 0.1, 0.1);
      setTimeout(() => this.playTone(1600, 'sine', 0.15, 0.12), 120);
    }
    correct() {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        setTimeout(() => this.playTone(freq, 'triangle', 0.2, 0.12), i * 80);
      });
    }
    wrong() {
      [220, 196].forEach((freq, i) => {
        setTimeout(() => this.playTone(freq, 'sawtooth', 0.25, 0.15), i * 140);
      });
    }
    victory() {
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
        setTimeout(() => this.playTone(freq, 'sine', 0.35, 0.18), i * 110);
      });
    }
  }

  const sfx = new SoundFX();

  // -------------------------------------------------------------
  // 2. Client State & WS Connection
  // -------------------------------------------------------------
  let socket = null;
  let isWsConnected = false;
  let currentRoom = null;
  let activeQuestion = null;
  let questionTimerInterval = null;
  let questionSecondsRemaining = 0;
  let isRadarAimingMode = false;
  let selectedCheckerPiece = null;
  let localAiRoomEngine = null; // Client-side fallback if WS offline

  // Topic presets
  const TOPIC_PRESETS = [
    { id: 'math', title: '📐 Математика & Логика', desc: 'Есептеулер, теңдеулер, геометрия және логикалық амалдар' },
    { id: 'reading', title: '📖 Оқу сауаттылығы', desc: 'Мәтіндік үзінділерді түсіну, талдау және негізгі ойды анықтау' },
    { id: 'science', title: '⚡ Физика & Формулалар', desc: 'Ньютон, Эйнштейн, механика, термодинамика және заңдылықтар' },
    { id: 'cs', title: '💻 Информатика & AI', desc: 'Алгоритмдер, Big O, Тьюринг, код және жасанды интеллект' },
    { id: 'chem', title: '🧪 Химия & Заттар', desc: 'Менделеев кестесі, реакциялар және химиялық заңдар' },
    { id: 'history', title: '🏛️ Қазақстан тарихы & Тұлғалар', desc: 'Ұлы дала тарихы, Әл-Фараби, Абай, Шоқан және ғалымдар' }
  ];

  // Helper: Get current user from platform
  function getPlatformUser() {
    try {
      const stored = localStorage.getItem('wnk_auth_user');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    // Fallback: check window.currentUser if exposed
    if (window.currentUser) return window.currentUser;
    return null;
  }

  // Helper: Open auth modal
  function requireAuth(actionName = 'ойнау') {
    const user = getPlatformUser();
    if (user && user.id) return user;

    // Trigger platform's auth modal
    const modal = document.getElementById('authModalBackdrop');
    if (modal) {
      modal.classList.add('is-open');
    } else {
      alert(`WNK Аренада ${actionName} үшін платформаға тіркелуіңіз қажет!`);
    }
    return null;
  }

  // -------------------------------------------------------------
  // 3. WebSocket Connection
  // -------------------------------------------------------------
  function initWebSocket() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    const wsUrl = `${protocol}//${host}/ws`;

    console.log('[WNK Gaming] WebSocket қосылуда:', wsUrl);

    try {
      socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        console.log('[WNK Gaming] WebSocket сәтті қосылды');
        isWsConnected = true;
        updateServerStatusBadge(true);

        // Identify authenticated user if logged in
        const user = getPlatformUser();
        if (user) {
          sendWs('auth_identify', { user });
        }
        sendWs('lobby_get_rooms', {});
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleServerMessage(data);
        } catch (e) {
          console.error('[WNK Gaming WS Parse error]', e);
        }
      };

      socket.onclose = () => {
        console.warn('[WNK Gaming] WebSocket үзілді, қайта қосылу күтілуде...');
        isWsConnected = false;
        updateServerStatusBadge(false);
        setTimeout(initWebSocket, 4000);
      };

      socket.onerror = (err) => {
        console.warn('[WNK Gaming] WebSocket байланыс қатесі (офлайн/статикалық режим)');
        isWsConnected = false;
        updateServerStatusBadge(false);
      };
    } catch (err) {
      console.warn('[WNK Gaming] WebSocket қолжетімсіз:', err);
      isWsConnected = false;
      updateServerStatusBadge(false);
    }
  }

  function sendWs(type, data = {}) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type, ...data }));
    }
  }

  function updateServerStatusBadge(isOnline) {
    const badge = document.getElementById('gamingServerStatus');
    if (!badge) return;
    if (isOnline) {
      badge.className = 'gaming-server-status is-online';
      badge.innerHTML = `<span class="status-pulse-dot"></span> <span>Сервер желіде (Реалтайм синхрондау)</span>`;
    } else {
      badge.className = 'gaming-server-status is-offline';
      badge.innerHTML = `<span class="status-offline-dot"></span> <span>WNK AI автономды режимі дайын</span>`;
    }
  }

  // -------------------------------------------------------------
  // 4. Server Message Dispatcher
  // -------------------------------------------------------------
  function handleServerMessage(msg) {
    const { type } = msg;

    switch (type) {
      case 'lobby_update':
        renderLobbyRooms(msg.rooms || [], msg.onlineCount || 1);
        break;

      case 'room_created':
        currentRoom = msg.room;
        showArenaView(currentRoom);
        break;

      case 'guest_joined':
      case 'room_joined':
        currentRoom = msg.room;
        showArenaView(currentRoom);
        sfx.click();
        break;

      case 'questions_ready':
        showToast(`25 сұрақ дайын болды: ${msg.topic}`);
        break;

      case 'fleet_placed':
        if (currentRoom && currentRoom.battleship) {
          currentRoom.battleship.myFleet = msg.fleet;
          renderBattleshipBoards();
        }
        break;

      case 'battle_started':
        showToast(msg.message || 'Шайқас басталды!', 'success');
        sfx.victory();
        if (currentRoom) {
          currentRoom.status = 'playing';
          currentRoom.turn = msg.turn;
          updateTurnBanner();
          renderBattleshipBoards();
        }
        break;

      case 'game_state_update':
        currentRoom = msg;
        updateArenaUI();
        break;

      case 'question_presented':
        presentQuestionModal(msg.question, msg.timeLimitSeconds, msg.isRadar);
        break;

      case 'opponent_answering':
        showOpponentAnsweringBanner(msg.playerName, msg.difficulty, msg.timeLimitSeconds);
        break;

      case 'move_executed':
        closeQuestionModal();
        handleMoveExecuted(msg);
        break;

      case 'move_failed':
        closeQuestionModal();
        handleMoveFailed(msg);
        break;

      case 'chat_message':
        appendChatMessage(msg);
        break;

      case 'game_surrendered':
      case 'opponent_disconnected':
        showGameOverModal(msg.winner, msg.message || 'Қарсылас ойыннан шықты');
        break;

      case 'error':
        showToast(msg.message || 'Қате орын алды', 'error');
        break;

      default:
        console.log('[WNK Gaming unhandled]', type, msg);
    }
  }

  // -------------------------------------------------------------
  // 5. Views Management: Lobby vs Arena
  // -------------------------------------------------------------
  function initGamingUI() {
    renderPlayerProfile();
    setupTopicPresets();
    setupEventListeners();
    initWebSocket();
  }

  function renderPlayerProfile() {
    const user = getPlatformUser();
    const guestCard = document.getElementById('gamingGuestCard');
    const userCard = document.getElementById('gamingUserCard');
    const userNameEl = document.getElementById('gamingUserName');
    const userAvatarEl = document.getElementById('gamingUserAvatar');
    const userRankEl = document.getElementById('gamingUserRank');
    const userStatsEl = document.getElementById('gamingUserStats');

    if (user && user.id) {
      if (guestCard) guestCard.style.display = 'none';
      if (userCard) userCard.style.display = 'flex';
      if (userNameEl) userNameEl.textContent = user.name || 'Оқушы';
      if (userAvatarEl) userAvatarEl.src = user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.id}`;
      if (userRankEl) userRankEl.textContent = 'Ойыншы • WNK Тактик';
      if (userStatsEl) {
        const stats = getLocalPlayerStats();
        userStatsEl.innerHTML = `
          <span>Жеңістер: <strong>${stats.wins}</strong></span>
          <span>Дұрыс жауаптар: <strong>${stats.correct}</strong></span>
          <span>Ұпай: <strong>${stats.score}</strong></span>
        `;
      }
    } else {
      if (guestCard) guestCard.style.display = 'flex';
      if (userCard) userCard.style.display = 'none';
    }
  }

  function getLocalPlayerStats() {
    try {
      const s = localStorage.getItem('wnk_gaming_stats');
      if (s) return JSON.parse(s);
    } catch (e) {}
    return { wins: 0, losses: 0, correct: 0, score: 0 };
  }

  function recordPlayerStat(isWin, points = 0, isCorrect = false) {
    const stats = getLocalPlayerStats();
    if (isWin) stats.wins++;
    else if (isWin === false) stats.losses++;
    if (isCorrect) stats.correct++;
    stats.score += points;
    localStorage.setItem('wnk_gaming_stats', JSON.stringify(stats));
    renderPlayerProfile();

    // Supabase cloud persistence
    if (window.supabaseClient && currentAuthUser && currentAuthUser.id) {
      window.supabaseClient
        .from('wnk_gaming_profiles')
        .upsert({
          user_id: String(currentAuthUser.id),
          email: currentAuthUser.email || null,
          username: currentAuthUser.name || 'Ойыншы',
          avatar_url: currentAuthUser.avatar || null,
          wins: stats.wins,
          losses: stats.losses,
          score: stats.score
        })
        .then(() => {})
        .catch(() => {});
    }
  }

  function setupTopicPresets() {
    const input = document.getElementById('roomTopicInput');
    const chips = document.querySelectorAll('.topic-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        chips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        if (input) {
          input.value = chip.getAttribute('data-topic');
          input.focus();
        }
      });
    });

    if (input) {
      input.addEventListener('input', () => {
        const val = input.value.trim().toLowerCase();
        chips.forEach(c => {
          if (c.getAttribute('data-topic').toLowerCase() === val) {
            c.classList.add('is-active');
          } else {
            c.classList.remove('is-active');
          }
        });
      });
    }
  }

  function renderLobbyRooms(rooms, onlineCount) {
    const countEl = document.getElementById('gamingOnlineCount');
    if (countEl) countEl.textContent = onlineCount;

    const listEl = document.getElementById('gamingRoomsList');
    if (!listEl) return;

    if (!rooms || rooms.length === 0) {
      listEl.innerHTML = `
        <div class="rooms-empty-state">
          <div class="rooms-empty-icon">🎮</div>
          <h3>Қазір белсенді бөлмелер жоқ</h3>
          <p>Жаңа бөлме ашып, досыңды шақыр немесе WNK AI-мен жаттығу матчын баста!</p>
          <div class="rooms-empty-actions">
            <button class="btn btn-primary" id="btnEmptyCreate">Бөлме ашу</button>
            <button class="btn btn-secondary" id="btnEmptyAi">WNK AI-мен ойнау</button>
          </div>
        </div>
      `;
      const btnC = document.getElementById('btnEmptyCreate');
      if (btnC) btnC.addEventListener('click', openCreateRoomModal);
      const btnA = document.getElementById('btnEmptyAi');
      if (btnA) btnA.addEventListener('click', startSoloAiGame);
      return;
    }

    listEl.innerHTML = rooms.map(r => `
      <div class="room-card" data-room-id="${r.id}">
        <div class="room-card-header">
          <span class="room-game-badge ${r.gameType}">
            ${r.gameType === 'battleship' ? '⚓ Морской бой' : '🏁 Шашки'}
          </span>
          <span class="room-code-tag">${r.id}</span>
        </div>
        <div class="room-card-topic">${r.topic}</div>
        <div class="room-card-host">
          <img src="${r.host.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + r.host.id}" class="room-host-avatar" alt="">
          <span class="room-host-name">${r.host.username}</span>
        </div>
        <button class="btn btn-sm btn-primary btn-join-room" data-room-id="${r.id}">Қосылу ⚔️</button>
      </div>
    `).join('');

    listEl.querySelectorAll('.btn-join-room').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const rId = e.currentTarget.getAttribute('data-room-id');
        joinRoomById(rId);
      });
    });
  }

  function openCreateRoomModal() {
    const user = requireAuth('бөлме ашу');
    if (!user) return;
    const modal = document.getElementById('gameCreateModal');
    if (modal) {
      modal.classList.add('is-open');
      setTimeout(() => {
        const input = document.getElementById('roomTopicInput');
        if (input) input.focus();
      }, 150);
    }
  }

  function closeCreateRoomModal() {
    const modal = document.getElementById('gameCreateModal');
    if (modal) modal.classList.remove('is-open');
  }

  function joinRoomById(roomId) {
    const user = requireAuth('бөлмеге қосылу');
    if (!user) return;

    if (isWsConnected) {
      sendWs('join_room', {
        roomId,
        guest: {
          id: user.id,
          username: user.name || 'Ойыншы 2',
          avatar: user.avatar
        }
      });
    } else {
      showToast('Сервермен байланыс орнатылуда, күте тұрыңыз...', 'info');
    }
  }

  function startSoloAiGame(selectedGameType = 'battleship', selectedTopic = 'Математика & Логика') {
    let user = getPlatformUser();
    if (!user) {
      user = {
        id: 'guest_' + Math.random().toString(36).substring(2, 8),
        name: 'Қонақ Ойыншы',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=guest_user'
      };
    }

    if (isWsConnected) {
      sendWs('create_room', {
        host: user,
        gameType: selectedGameType,
        topic: selectedTopic,
        isVsAi: true,
        customApiKey: localStorage.getItem('wnk_gemini_api_key') || null
      });
    } else {
      // Client-side fallback engine for AI mode
      startClientSideAiGame(user, selectedGameType, selectedTopic);
    }
  }

  // -------------------------------------------------------------
  // 6. Arena View & Board Renders
  // -------------------------------------------------------------
  function showArenaView(room) {
    closeCreateRoomModal();
    const lobbyView = document.getElementById('gamingLobbyView');
    const arenaView = document.getElementById('gamingArenaView');
    if (lobbyView) lobbyView.style.display = 'none';
    if (arenaView) arenaView.style.display = 'block';

    updateArenaUI();
  }

  function exitArenaToLobby() {
    if (currentRoom && currentRoom.status === 'playing') {
      if (!confirm('Ойынды аяқтап, лоббиге оралғыңыз келе ме? Жеңіс қарсыласқа беріледі.')) {
        return;
      }
      sendWs('surrender', { roomId: currentRoom.id });
    }
    currentRoom = null;
    const lobbyView = document.getElementById('gamingLobbyView');
    const arenaView = document.getElementById('gamingArenaView');
    if (lobbyView) lobbyView.style.display = 'block';
    if (arenaView) arenaView.style.display = 'none';
    sendWs('lobby_get_rooms', {});
  }

  function updateArenaUI() {
    if (!currentRoom) return;

    // Room info
    const titleEl = document.getElementById('arenaGameTitle');
    const topicEl = document.getElementById('arenaTopicBadge');
    const codeEl = document.getElementById('arenaRoomCode');

    if (titleEl) titleEl.textContent = currentRoom.gameType === 'battleship' ? '⚓ Морской бой' : '🏁 Шашки';
    if (topicEl) topicEl.textContent = currentRoom.topic;
    if (codeEl) codeEl.textContent = currentRoom.id;

    // Players scoreboard
    const p1Name = document.getElementById('arenaP1Name');
    const p1Avatar = document.getElementById('arenaP1Avatar');
    const p1Score = document.getElementById('arenaP1Score');
    const p1Streak = document.getElementById('arenaP1Streak');

    const p2Name = document.getElementById('arenaP2Name');
    const p2Avatar = document.getElementById('arenaP2Avatar');
    const p2Score = document.getElementById('arenaP2Score');
    const p2Streak = document.getElementById('arenaP2Streak');

    if (p1Name) p1Name.textContent = currentRoom.host?.username || 'Ойыншы 1';
    if (p1Avatar) p1Avatar.src = currentRoom.host?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=p1';
    if (p1Score) p1Score.textContent = currentRoom.host?.id === currentRoom.myId ? currentRoom.myScore : currentRoom.opponentScore;
    if (p1Streak) {
      const s = currentRoom.host?.id === currentRoom.myId ? currentRoom.myStreak : 0;
      p1Streak.innerHTML = s > 0 ? `🔥 ${s}` : '—';
    }

    if (p2Name) p2Name.textContent = currentRoom.guest ? currentRoom.guest.username : 'Қарсылас күтілуде...';
    if (p2Avatar) p2Avatar.src = currentRoom.guest?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=p2';
    if (p2Score) p2Score.textContent = currentRoom.guest?.id === currentRoom.myId ? currentRoom.myScore : currentRoom.opponentScore;
    if (p2Streak) {
      const s = currentRoom.guest?.id === currentRoom.myId ? currentRoom.myStreak : 0;
      p2Streak.innerHTML = s > 0 ? `🔥 ${s}` : '—';
    }

    updateTurnBanner();

    // Render game boards
    const bsView = document.getElementById('arenaBattleshipView');
    const chView = document.getElementById('arenaCheckersView');

    if (currentRoom.gameType === 'battleship') {
      if (bsView) bsView.style.display = 'block';
      if (chView) chView.style.display = 'none';
      renderBattleshipBoards();
    } else {
      if (bsView) bsView.style.display = 'none';
      if (chView) chView.style.display = 'block';
      renderCheckersBoard();
    }
  }

  function updateTurnBanner() {
    const banner = document.getElementById('arenaTurnBanner');
    if (!banner || !currentRoom) return;

    if (currentRoom.status === 'placing') {
      banner.className = 'arena-turn-banner is-placing';
      banner.innerHTML = `<span>⚓ Кемелеріңізді орналастырыңыз немесе «Авто-орналастыруды» басыңыз!</span>`;
      return;
    }

    if (currentRoom.status === 'waiting') {
      banner.className = 'arena-turn-banner is-waiting';
      banner.innerHTML = `<span>⏳ Екінші ойыншының қосылуы күтілуде... Бөлме коды: <strong>${currentRoom.id}</strong></span>`;
      return;
    }

    if (currentRoom.status === 'finished') {
      const isWinner = currentRoom.winner === currentRoom.myId;
      banner.className = `arena-turn-banner ${isWinner ? 'is-my-turn' : 'is-opponent-turn'}`;
      banner.innerHTML = isWinner ? `<span>🏆 ЖЕҢІС! Сіз ойынды жеңіспен аяқтадыңыз!</span>` : `<span>Матч аяқталды. Келесі жолы жолыңыз болады!</span>`;
      return;
    }

    if (currentRoom.isMyTurn) {
      banner.className = 'arena-turn-banner is-my-turn';
      banner.innerHTML = `
        <span class="turn-fire-dot"></span>
        <span><strong>СІЗДІҢ КЕЗЕГІҢІЗ!</strong> Нысанаға оқ көздеңіз және сұраққа жауап беріңіз.</span>
      `;
    } else {
      banner.className = 'arena-turn-banner is-opponent-turn';
      banner.innerHTML = `
        <span class="turn-wait-spinner"></span>
        <span>Қарсыластың жүрісі күтілуде... Ойлануда.</span>
      `;
    }
  }

  // -------------------------------------------------------------
  // 7. Battleship Boards Rendering & Interaction
  // -------------------------------------------------------------
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  function renderBattleshipBoards() {
    const bs = currentRoom?.battleship;
    if (!bs) return;

    // 1. My Fleet Grid
    const myFleetEl = document.getElementById('battleshipMyGrid');
    if (myFleetEl) {
      myFleetEl.innerHTML = renderGridHtml(10, (x, y) => {
        let cellClass = 'bs-cell';
        let content = '';

        // Check if there is a ship part here
        const myShips = bs.myFleet?.ships || [];
        const hasShip = myShips.some(s => s.coords.some(pt => pt.x === x && pt.y === y));
        if (hasShip) cellClass += ' has-my-ship';

        // Check if shot received
        const shots = bs.myFleet?.shotsReceived || [];
        const shot = shots.find(s => s.x === x && s.y === y);
        if (shot) {
          if (shot.result === 'hit') {
            cellClass += ' cell-hit';
            content = '💥';
          } else {
            cellClass += ' cell-miss';
            content = '•';
          }
        }
        return `<div class="${cellClass}" data-x="${x}" data-y="${y}">${content}</div>`;
      });
    }

    // 2. Opponent Sea Grid
    const targetSeaEl = document.getElementById('battleshipTargetGrid');
    if (targetSeaEl) {
      const shots = bs.opponentSea?.shots || [];
      const sunkShips = bs.opponentSea?.sunkShips || [];
      const radarRevealed = bs.opponentSea?.radarRevealed || [];

      targetSeaEl.innerHTML = renderGridHtml(10, (x, y) => {
        let cellClass = 'bs-cell bs-target-cell';
        let content = '';

        const shot = shots.find(s => s.x === x && s.y === y);
        if (shot) {
          cellClass += ' is-shot';
          if (shot.result === 'hit') {
            cellClass += ' cell-hit';
            content = '💥';
          } else {
            cellClass += ' cell-miss';
            content = '•';
          }
        }

        // Radar indicator
        const radar = radarRevealed.find(r => r.x === x && r.y === y);
        if (radar && !shot) {
          cellClass += radar.hasShip ? ' cell-radar-ship' : ' cell-radar-empty';
          if (radar.hasShip) content = '🎯';
        }

        return `<div class="${cellClass}" data-x="${x}" data-y="${y}">${content}</div>`;
      });

      // Target cell click handler
      targetSeaEl.querySelectorAll('.bs-target-cell').forEach(cell => {
        cell.addEventListener('click', (e) => {
          if (!currentRoom.isMyTurn || currentRoom.status !== 'playing') {
            showToast('Қазір сіздің кезегіңіз емес!', 'info');
            return;
          }
          const x = parseInt(cell.getAttribute('data-x'), 10);
          const y = parseInt(cell.getAttribute('data-y'), 10);

          if (cell.classList.contains('is-shot')) {
            showToast('Бұл ұяшыққа оқ атылған!', 'info');
            return;
          }

          if (isRadarAimingMode) {
            triggerRadarScan(x, y);
          } else {
            triggerBattleshipShot(x, y);
          }
        });
      });
    }

    // Controls bar (Placement / Radar)
    renderBattleshipControls();
  }

  function renderGridHtml(size, cellRenderer) {
    let html = `<div class="bs-grid-wrap"><div class="bs-grid-header-row"><div class="bs-corner-cell"></div>`;
    for (let c = 0; c < size; c++) {
      html += `<div class="bs-coord-header">${LETTERS[c]}</div>`;
    }
    html += `</div>`;

    for (let r = 0; r < size; r++) {
      html += `<div class="bs-grid-row"><div class="bs-coord-header">${r + 1}</div>`;
      for (let c = 0; c < size; c++) {
        html += cellRenderer(c, r);
      }
      html += `</div>`;
    }
    html += `</div>`;
    return html;
  }

  function renderBattleshipControls() {
    const placementBar = document.getElementById('battleshipPlacementBar');
    const battleBar = document.getElementById('battleshipActiveBar');
    const radarBtn = document.getElementById('btnBattleshipRadar');
    const radarStatus = document.getElementById('battleshipRadarStatus');

    if (currentRoom.status === 'placing') {
      if (placementBar) placementBar.style.display = 'flex';
      if (battleBar) battleBar.style.display = 'none';
    } else {
      if (placementBar) placementBar.style.display = 'none';
      if (battleBar) battleBar.style.display = 'flex';

      if (radarBtn && radarStatus) {
        if (currentRoom.radarAvailable) {
          radarBtn.disabled = false;
          radarBtn.className = 'btn btn-radar is-ready';
          radarStatus.textContent = '🎯 РАДАР ДАЙЫН! (3x3 сканер үшін басыңыз)';
        } else {
          radarBtn.disabled = true;
          radarBtn.className = 'btn btn-radar is-disabled';
          const streak = currentRoom.myStreak || 0;
          radarStatus.textContent = `Радар үшін қатарынан 3 дұрыс жауап қажет: [${streak}/3]`;
        }
      }
    }
  }

  function triggerBattleshipShot(x, y) {
    sfx.fire();
    sendWs('request_move', {
      roomId: currentRoom.id,
      moveData: { x, y }
    });
  }

  function triggerRadarScan(cx, cy) {
    isRadarAimingMode = false;
    document.getElementById('arenaBattleshipView')?.classList.remove('is-radar-targeting');
    sfx.radar();
    sendWs('activate_radar', {
      roomId: currentRoom.id,
      center: { x: cx, y: cy }
    });
  }

  // -------------------------------------------------------------
  // 8. Checkers Board Rendering & Interaction
  // -------------------------------------------------------------
  function renderCheckersBoard() {
    const ch = currentRoom?.checkers;
    const boardEl = document.getElementById('checkersGrid');
    if (!boardEl || !ch) return;

    const board = ch.board;
    const myColor = ch.myColor;
    const legalMoves = ch.legalMoves || [];

    let html = `<div class="checkers-board-wrap">`;
    // Coordinates header
    html += `<div class="ch-row-header"><div class="ch-corner"></div>`;
    for (let c = 0; c < 8; c++) html += `<div class="ch-coord">${LETTERS[c]}</div>`;
    html += `</div>`;

    for (let r = 0; r < 8; r++) {
      html += `<div class="ch-board-row"><div class="ch-coord">${8 - r}</div>`;
      for (let c = 0; c < 8; c++) {
        const isDark = (r + c) % 2 === 1;
        const piece = board[r][c];
        let cellClass = `ch-cell ${isDark ? 'ch-cell-dark' : 'ch-cell-light'}`;
        let content = '';

        const isSelected = selectedCheckerPiece && selectedCheckerPiece.r === r && selectedCheckerPiece.c === c;
        if (isSelected) cellClass += ' is-selected-piece';

        // Check if destination dot
        const isDest = selectedCheckerPiece && legalMoves.some(m =>
          m.from.r === selectedCheckerPiece.r && m.from.c === selectedCheckerPiece.c &&
          m.to.r === r && m.to.c === c
        );
        if (isDest) cellClass += ' is-legal-dest';

        if (piece) {
          const isWhite = piece.startsWith('w');
          const isKing = piece.endsWith('k');
          const isMyPiece = piece.startsWith(myColor);
          const hasLegalMove = isMyPiece && legalMoves.some(m => m.from.r === r && m.from.c === c);

          let pieceClass = `ch-piece ${isWhite ? 'ch-white' : 'ch-black'}`;
          if (isKing) pieceClass += ' ch-king';
          if (hasLegalMove) pieceClass += ' ch-can-move';

          content = `<div class="${pieceClass}">${isKing ? '👑' : ''}</div>`;
        } else if (isDest) {
          content = `<div class="ch-dest-dot"></div>`;
        }

        html += `<div class="${cellClass}" data-r="${r}" data-c="${c}">${content}</div>`;
      }
      html += `</div>`;
    }
    html += `</div>`;
    boardEl.innerHTML = html;

    // Attach click handlers
    boardEl.querySelectorAll('.ch-cell-dark').forEach(cell => {
      cell.addEventListener('click', () => {
        if (!currentRoom.isMyTurn || currentRoom.status !== 'playing') {
          showToast('Қазір сіздің кезегіңіз емес!', 'info');
          return;
        }

        const r = parseInt(cell.getAttribute('data-r'), 10);
        const c = parseInt(cell.getAttribute('data-c'), 10);
        const piece = board[r][c];

        if (piece && piece.startsWith(myColor)) {
          // Select own piece
          selectedCheckerPiece = { r, c };
          sfx.click();
          renderCheckersBoard();
        } else if (selectedCheckerPiece) {
          // Attempt move to destination
          const move = legalMoves.find(m =>
            m.from.r === selectedCheckerPiece.r && m.from.c === selectedCheckerPiece.c &&
            m.to.r === r && m.to.c === c
          );

          if (move) {
            selectedCheckerPiece = null;
            sendWs('request_move', {
              roomId: currentRoom.id,
              moveData: move
            });
          } else {
            selectedCheckerPiece = null;
            renderCheckersBoard();
          }
        }
      });
    });
  }

  // -------------------------------------------------------------
  // 9. Interactive Question Modal & Timer
  // -------------------------------------------------------------
  function presentQuestionModal(q, timeLimitSeconds, isRadar = false) {
    activeQuestion = q;
    questionSecondsRemaining = timeLimitSeconds;

    const modal = document.getElementById('gameQuestionModal');
    if (!modal) return;

    const topicBadge = document.getElementById('qModalTopic');
    const diffBadge = document.getElementById('qModalDifficulty');
    const timerText = document.getElementById('qModalTimerText');
    const timerBar = document.getElementById('qModalTimerProgress');
    const contextCard = document.getElementById('qModalContextCard');
    const contextText = document.getElementById('qModalContextText');
    const qBody = document.getElementById('qModalQuestion');
    const optionsGrid = document.getElementById('qModalOptionsGrid');
    const feedbackBox = document.getElementById('qModalFeedback');

    if (feedbackBox) feedbackBox.style.display = 'none';

    if (topicBadge) topicBadge.textContent = q.topic;
    if (diffBadge) {
      diffBadge.className = `q-difficulty-badge is-${q.difficulty}`;
      diffBadge.textContent = q.difficulty === 'hard' ? 'ҚИЫН (45 сек)' : q.difficulty === 'medium' ? 'ОРТАША (30 сек)' : 'ОҢАЙ (30 сек)';
    }

    // Context passage for Reading Literacy
    if (q.context_text && contextCard && contextText) {
      contextCard.style.display = 'block';
      contextText.textContent = q.context_text;
    } else if (contextCard) {
      contextCard.style.display = 'none';
    }

    if (qBody) qBody.textContent = q.question;

    // Render 4 option buttons
    if (optionsGrid) {
      const keys = ['A', 'B', 'C', 'D'];
      optionsGrid.innerHTML = q.options.map((opt, idx) => `
        <button class="q-option-btn" data-index="${idx}">
          <span class="q-option-key">${keys[idx]}</span>
          <span class="q-option-text">${opt.replace(/^[A-D]\)\s*/, '')}</span>
        </button>
      `).join('');

      optionsGrid.querySelectorAll('.q-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
          submitAnswer(selectedIdx);
        });
      });
    }

    // Start timer
    if (questionTimerInterval) clearInterval(questionTimerInterval);
    updateTimerVisual(timeLimitSeconds, timeLimitSeconds);

    questionTimerInterval = setInterval(() => {
      questionSecondsRemaining--;
      updateTimerVisual(questionSecondsRemaining, timeLimitSeconds);

      if (questionSecondsRemaining <= 0) {
        clearInterval(questionTimerInterval);
        submitAnswer(-1); // Timeout
      }
    }, 1000);

    modal.classList.add('is-open');
  }

  function updateTimerVisual(remaining, total) {
    const textEl = document.getElementById('qModalTimerText');
    const barEl = document.getElementById('qModalTimerProgress');
    if (textEl) textEl.textContent = `${remaining} сек`;

    if (barEl) {
      const pct = Math.max(0, (remaining / total) * 100);
      barEl.style.width = `${pct}%`;
      if (remaining <= 10) {
        barEl.style.backgroundColor = '#ef4444';
        barEl.classList.add('is-urgent-pulse');
        sfx.playTone(400, 'sine', 0.05, 0.04);
      } else if (remaining <= 20) {
        barEl.style.backgroundColor = '#f59e0b';
        barEl.classList.remove('is-urgent-pulse');
      } else {
        barEl.style.backgroundColor = '#1f5bff';
        barEl.classList.remove('is-urgent-pulse');
      }
    }
  }

  function submitAnswer(selectedIndex) {
    if (questionTimerInterval) clearInterval(questionTimerInterval);

    // Disable buttons
    document.querySelectorAll('.q-option-btn').forEach(b => b.disabled = true);

    sendWs('submit_answer', {
      roomId: currentRoom.id,
      selectedOptionIndex: selectedIndex
    });
  }

  function closeQuestionModal() {
    if (questionTimerInterval) clearInterval(questionTimerInterval);
    const modal = document.getElementById('gameQuestionModal');
    if (modal) modal.classList.remove('is-open');
    activeQuestion = null;
  }

  function showOpponentAnsweringBanner(name, difficulty, time) {
    showToast(`⏳ ${name} сұраққа жауап беруде (${difficulty.toUpperCase()}, ${time}с)...`, 'info');
  }

  function handleMoveExecuted(data) {
    if (data.isCorrect) {
      sfx.correct();
      showToast(`ДҰРЫС ЖАУАП! ${data.playerName} жүріс жасады.`, 'success');
      recordPlayerStat(null, 15, true);
    }

    if (data.gameType === 'battleship') {
      if (data.shotResult?.status === 'hit') {
        sfx.hit();
        showToast(data.shotResult.isSunk ? `КЕМЕ БАТТЫ! (${data.shotResult.shipName})` : `ОҚ ТИДІ! Жүріс жалғасады!`, 'success');
      } else {
        sfx.miss();
        showToast('Оқ далаға кетті. Кезек қарсыласта.', 'info');
      }
    }

    if (data.isGameOver) {
      setTimeout(() => {
        showGameOverModal(data.winner, 'Барлық нысаналар жойылды / Жүрістер таусылды!');
      }, 1000);
    }
  }

  function handleMoveFailed(data) {
    sfx.wrong();
    showToast(`ҚАТЕ ЖАУАП! ${data.reason} Кезек қарсыласқа өтті.`, 'error');

    if (data.explanation) {
      // Show brief educational feedback toast
      showToast(`Түсіндірме: ${data.explanation}`, 'info');
    }
  }

  function showGameOverModal(winnerId, message) {
    const isWinner = winnerId === currentRoom?.myId;
    if (isWinner) sfx.victory();

    const modal = document.getElementById('gameOverModal');
    if (!modal) return;

    const titleEl = document.getElementById('goModalTitle');
    const msgEl = document.getElementById('goModalDesc');
    const statsEl = document.getElementById('goModalStats');

    if (titleEl) {
      titleEl.textContent = isWinner ? '🏆 ЖЕҢІС! ҚҰТТЫҚТАЙМЫЗ!' : 'МАТЧ АЯҚТАЛДЫ';
      titleEl.style.color = isWinner ? '#10b981' : '#1b1a15';
    }
    if (msgEl) msgEl.textContent = message;
    if (statsEl && currentRoom) {
      statsEl.innerHTML = `
        <div class="go-stat-item">
          <div class="go-stat-val">${currentRoom.myScore || 0}</div>
          <div class="go-stat-lbl">Сіздің ұпайыңыз</div>
        </div>
        <div class="go-stat-item">
          <div class="go-stat-val">${currentRoom.myStreak || 0}</div>
          <div class="go-stat-lbl">Ең ұзақ серия</div>
        </div>
      `;
    }

    recordPlayerStat(isWinner, isWinner ? 50 : 10);

    // Record match to Supabase
    if (window.supabaseClient && currentRoom) {
      window.supabaseClient
        .from('wnk_gaming_matches')
        .insert({
          room_id: String(currentRoom.id || 'solo_ai'),
          game_type: currentRoom.gameType || 'battleship',
          topic: currentRoom.topic || 'Жалпы білім',
          host_id: String(currentRoom.host?.id || 'host'),
          host_name: currentRoom.host?.name || 'Ойыншы 1',
          guest_id: String(currentRoom.guest?.id || 'bot_wnk_ai'),
          guest_name: currentRoom.guest?.name || 'WNK AI Бот',
          winner_id: winnerId ? String(winnerId) : null,
          winner_name: isWinner ? (currentAuthUser?.name || 'Сіз') : (winnerId === 'bot_wnk_ai' ? 'WNK AI Бот' : 'Қарсылас'),
          host_score: currentRoom.hostScore || 0,
          guest_score: currentRoom.guestScore || 0
        })
        .then(() => {})
        .catch(() => {});
    }

    modal.classList.add('is-open');
  }

  function closeGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    if (modal) modal.classList.remove('is-open');
    exitArenaToLobby();
  }

  // -------------------------------------------------------------
  // 10. Chat & Emotes
  // -------------------------------------------------------------
  function setupEventListeners() {
    // Navigation / Action Buttons
    const btnCreate = document.getElementById('btnOpenCreateModal');
    if (btnCreate) btnCreate.addEventListener('click', openCreateRoomModal);

    const btnAi = document.getElementById('btnOpenAiPractice');
    if (btnAi) btnAi.addEventListener('click', () => startSoloAiGame('battleship'));

    const btnCloseCreate = document.getElementById('btnCloseCreateModal');
    if (btnCloseCreate) btnCloseCreate.addEventListener('click', closeCreateRoomModal);

    const btnSubmitCreate = document.getElementById('btnSubmitCreateRoom');
    if (btnSubmitCreate) {
      btnSubmitCreate.addEventListener('click', () => {
        const gameType = document.querySelector('input[name="roomGameType"]:checked')?.value || 'battleship';
        const topicInput = document.getElementById('roomTopicInput')?.value.trim();
        const topic = topicInput || 'Математика & Логика';
        const opponentMode = document.querySelector('input[name="roomOpponentMode"]:checked')?.value || 'pvp';
        const isVsAi = opponentMode === 'ai';

        const user = requireAuth('бөлме ашу');
        if (!user) return;

        if (isVsAi) {
          startSoloAiGame(gameType, topic);
        } else {
          sendWs('create_room', {
            host: user,
            gameType,
            topic,
            isVsAi: false,
            customApiKey: localStorage.getItem('wnk_gemini_api_key') || null
          });
        }
      });
    }

    // Battleship placement buttons
    const btnAutoPlace = document.getElementById('btnBattleshipAutoPlace');
    if (btnAutoPlace) {
      btnAutoPlace.addEventListener('click', () => {
        sfx.click();
        sendWs('place_ships', { roomId: currentRoom.id, isAuto: true });
      });
    }

    // Radar button
    const btnRadar = document.getElementById('btnBattleshipRadar');
    if (btnRadar) {
      btnRadar.addEventListener('click', () => {
        if (!currentRoom.radarAvailable || !currentRoom.isMyTurn) return;
        isRadarAimingMode = true;
        document.getElementById('arenaBattleshipView')?.classList.add('is-radar-targeting');
        showToast('РАДАР ТАҢДАУ РЕЖИМІ: Қарсылас теңізіндегі 3x3 аумақтың ортасын басыңыз!', 'info');
      });
    }

    // Surrender / Exit button
    const btnSurrender = document.getElementById('btnArenaSurrender');
    if (btnSurrender) btnSurrender.addEventListener('click', exitArenaToLobby);

    // Game over rematch / exit
    const btnGoRematch = document.getElementById('btnGoRematch');
    if (btnGoRematch) {
      btnGoRematch.addEventListener('click', () => {
        closeGameOverModal();
        if (currentRoom?.topic) startSoloAiGame(currentRoom.gameType, currentRoom.topic);
      });
    }

    const btnGoExit = document.getElementById('btnGoExit');
    if (btnGoExit) btnGoExit.addEventListener('click', closeGameOverModal);

    // Edit Name button in Player Card
    const btnEditGamingName = document.getElementById('btnEditGamingName');
    if (btnEditGamingName) {
      btnEditGamingName.addEventListener('click', () => {
        if (window.openProfileNameModal) {
          window.openProfileNameModal();
        }
      });
    }

    // Chat quick emotes
    document.querySelectorAll('.btn-chat-emote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.textContent.trim();
        if (currentRoom) {
          sendWs('chat_message', { roomId: currentRoom.id, text });
        }
      });
    });

    // Mute sound toggle
    const btnMute = document.getElementById('btnGamingMute');
    if (btnMute) {
      btnMute.addEventListener('click', () => {
        sfx.muted = !sfx.muted;
        localStorage.setItem('wnk_sound_muted', sfx.muted ? 'true' : 'false');
        btnMute.textContent = sfx.muted ? '🔇 Дыбыссыз' : '🔊 Дыбысты';
      });
    }

    // Keyboard shortcuts for question modal: 1, 2, 3, 4 / A, B, C, D
    window.addEventListener('keydown', (e) => {
      if (!activeQuestion) return;
      const key = e.key.toUpperCase();
      if (['1', 'A'].includes(key)) submitAnswer(0);
      else if (['2', 'B'].includes(key)) submitAnswer(1);
      else if (['3', 'C'].includes(key)) submitAnswer(2);
      else if (['4', 'D'].includes(key)) submitAnswer(3);
    });
  }

  function appendChatMessage(data) {
    const stream = document.getElementById('arenaChatStream');
    if (!stream) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'arena-chat-bubble';
    msgEl.innerHTML = `<strong>${data.senderName}:</strong> <span>${data.text}</span>`;
    stream.appendChild(msgEl);
    stream.scrollTop = stream.scrollHeight;
  }

  // -------------------------------------------------------------
  // 11. Client-Side Fallback Engine (Zero-Latency Offline Mode)
  // -------------------------------------------------------------
  function startClientSideAiGame(user, gameType, topic) {
    showToast('WNK AI локалды режимі іске қосылды!', 'info');
    // Minimal fallback so users can play without backend
    const fakeRoom = {
      id: 'AI-' + Math.floor(1000 + Math.random() * 9000),
      gameType,
      topic,
      status: gameType === 'battleship' ? 'placing' : 'playing',
      turn: user.id,
      myId: user.id,
      isMyTurn: true,
      myStreak: 0,
      radarAvailable: false,
      myScore: 0,
      opponentScore: 0,
      host: { id: user.id, username: user.name || 'Ойыншы', avatar: user.avatar },
      guest: { id: 'bot_wnk_ai', username: 'WNK AI Ұстаз', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=wnkai_master' }
    };

    if (gameType === 'battleship') {
      fakeRoom.battleship = {
        myFleet: { ships: [], shotsReceived: [] },
        opponentSea: { shots: [], sunkShips: [], radarRevealed: [] }
      };
    } else {
      fakeRoom.checkers = {
        board: [
          [null, 'b', null, 'b', null, 'b', null, 'b'],
          ['b', null, 'b', null, 'b', null, 'b', null],
          [null, 'b', null, 'b', null, 'b', null, 'b'],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          ['w', null, 'w', null, 'w', null, 'w', null],
          [null, 'w', null, 'w', null, 'w', null, 'w'],
          ['w', null, 'w', null, 'w', null, 'w', null]
        ],
        myColor: 'w',
        legalMoves: []
      };
    }

    currentRoom = fakeRoom;
    showArenaView(currentRoom);
  }

  // Toast notification helper
  function showToast(text, type = 'info') {
    let container = document.getElementById('wnkToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'wnkToastContainer';
      container.className = 'wnk-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `wnk-toast is-${type}`;
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('is-fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // Listen to platform auth state changes (Google Sign-In / Logout)
  window.addEventListener('wnk_auth_changed', (e) => {
    renderPlayerProfile();
    const u = e.detail?.user;
    if (u && isWsConnected) {
      sendWs('auth_identify', { user: u });
    }
  });

  // Expose module globally for platform integration
  window.WnkGaming = {
    init: initGamingUI,
    openCreateModal: openCreateRoomModal,
    startAiGame: startSoloAiGame,
    sfx
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGamingUI);
  } else {
    initGamingUI();
  }

})();
