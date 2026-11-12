/**
 * WNK Education - Game Mechanics Engine (Battleship & Checkers)
 * In-Memory State & Anti-Cheat Validation
 */

// -------------------------------------------------------------
// 1. BATTLESHIP MECHANICS (10x10)
// -------------------------------------------------------------
const BATTLESHIP_SIZE = 10;
const SHIP_TYPES = [
  { name: 'Линкор', size: 4, count: 1 },
  { name: 'Крейсер', size: 3, count: 2 },
  { name: 'Эсминец', size: 2, count: 3 },
  { name: 'Катер', size: 1, count: 4 }
];

class BattleshipBoard {
  constructor() {
    this.ships = []; // [{ id, name, size, coords: [{x, y}], hits: Set }]
    this.shotsReceived = new Map(); // "x,y" => 'hit' | 'miss'
    this.revealedByRadar = new Set(); // "x,y"
  }

  // Generates a valid random 10-ship fleet
  static generateRandomFleet() {
    const board = new BattleshipBoard();
    const occupied = Array.from({ length: BATTLESHIP_SIZE }, () => Array(BATTLESHIP_SIZE).fill(false));
    const buffer = Array.from({ length: BATTLESHIP_SIZE }, () => Array(BATTLESHIP_SIZE).fill(false));

    let shipId = 1;
    for (const type of SHIP_TYPES) {
      for (let c = 0; c < type.count; c++) {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 500) {
          attempts++;
          const horizontal = Math.random() < 0.5;
          const xMax = horizontal ? BATTLESHIP_SIZE - type.size : BATTLESHIP_SIZE - 1;
          const yMax = horizontal ? BATTLESHIP_SIZE - 1 : BATTLESHIP_SIZE - type.size;
          const startX = Math.floor(Math.random() * (xMax + 1));
          const startY = Math.floor(Math.random() * (yMax + 1));

          // Check if coordinates and 1-cell margins are free
          let fits = true;
          const coords = [];
          for (let i = 0; i < type.size; i++) {
            const x = horizontal ? startX + i : startX;
            const y = horizontal ? startY : startY + i;
            if (buffer[y][x]) {
              fits = false;
              break;
            }
            coords.push({ x, y });
          }

          if (fits) {
            // Place ship and fill buffer around it
            for (const pt of coords) {
              occupied[pt.y][pt.x] = true;
              for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                  const ny = pt.y + dy;
                  const nx = pt.x + dx;
                  if (nx >= 0 && nx < BATTLESHIP_SIZE && ny >= 0 && ny < BATTLESHIP_SIZE) {
                    buffer[ny][nx] = true;
                  }
                }
              }
            }
            board.ships.push({
              id: shipId++,
              name: type.name,
              size: type.size,
              coords,
              hits: new Set()
            });
            placed = true;
          }
        }
      }
    }
    return board;
  }

  // Validates a user-supplied ship layout
  validateFleet(ships) {
    if (!Array.isArray(ships) || ships.length !== 10) return false;
    const occupied = new Set();
    const buffer = new Set();

    for (const ship of ships) {
      if (!ship.coords || ship.coords.length !== ship.size) return false;
      for (const pt of ship.coords) {
        if (pt.x < 0 || pt.x >= 10 || pt.y < 0 || pt.y >= 10) return false;
        const key = `${pt.x},${pt.y}`;
        if (buffer.has(key)) return false; // Touches another ship
      }
      for (const pt of ship.coords) {
        occupied.add(`${pt.x},${pt.y}`);
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = pt.x + dx;
            const ny = pt.y + dy;
            if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
              buffer.add(`${nx},${ny}`);
            }
          }
        }
      }
    }
    return true;
  }

  // Receives an incoming shot
  receiveShot(x, y) {
    const key = `${x},${y}`;
    if (this.shotsReceived.has(key)) {
      return { status: 'already_shot' };
    }

    for (const ship of this.ships) {
      const match = ship.coords.find(pt => pt.x === x && pt.y === y);
      if (match) {
        ship.hits.add(key);
        this.shotsReceived.set(key, 'hit');
        const isSunk = ship.hits.size === ship.size;

        let sunkSurroundings = [];
        if (isSunk) {
          // Auto-mark perimeter around sunk ship
          for (const pt of ship.coords) {
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                const nx = pt.x + dx;
                const ny = pt.y + dy;
                if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
                  const sKey = `${nx},${ny}`;
                  if (!this.shotsReceived.has(sKey)) {
                    this.shotsReceived.set(sKey, 'miss');
                    sunkSurroundings.push({ x: nx, y: ny });
                  }
                }
              }
            }
          }
        }

        return {
          status: 'hit',
          isSunk,
          shipName: ship.name,
          shipCoords: isSunk ? ship.coords : null,
          sunkSurroundings
        };
      }
    }

    this.shotsReceived.set(key, 'miss');
    return { status: 'miss' };
  }

  // Scan 3x3 radar area
  scanRadar(cx, cy) {
    const revealed = [];
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        if (x >= 0 && x < 10 && y >= 0 && y < 10) {
          const key = `${x},${y}`;
          this.revealedByRadar.add(key);
          const hasShip = this.ships.some(s => s.coords.some(pt => pt.x === x && pt.y === y));
          revealed.push({ x, y, hasShip });
          if (hasShip) count++;
        }
      }
    }
    return { revealed, shipPartsCount: count };
  }

  // Check if all ships are destroyed
  isFleetDestroyed() {
    return this.ships.length > 0 && this.ships.every(s => s.hits.size === s.size);
  }

  // Anti-Cheat: Exports sanitized state for the opponent
  getSanitizedViewForOpponent() {
    const shots = [];
    for (const [key, result] of this.shotsReceived.entries()) {
      const [x, y] = key.split(',').map(Number);
      shots.push({ x, y, result });
    }

    const sunkShips = this.ships
      .filter(s => s.hits.size === s.size)
      .map(s => ({ name: s.name, coords: s.coords }));

    const radar = Array.from(this.revealedByRadar).map(k => {
      const [x, y] = k.split(',').map(Number);
      const hasShip = this.ships.some(s => s.coords.some(pt => pt.x === x && pt.y === y));
      return { x, y, hasShip };
    });

    return {
      shots,
      sunkShips,
      radarRevealed: radar
    };
  }

  // Export full view for owner
  getFullView() {
    return {
      ships: this.ships.map(s => ({
        id: s.id,
        name: s.name,
        size: s.size,
        coords: s.coords,
        isSunk: s.hits.size === s.size
      })),
      shotsReceived: Array.from(this.shotsReceived.entries()).map(([k, result]) => {
        const [x, y] = k.split(',').map(Number);
        return { x, y, result };
      })
    };
  }
}


// -------------------------------------------------------------
// 2. CHECKERS MECHANICS (8x8)
// -------------------------------------------------------------
// Pieces: 'w' (white), 'b' (black), 'wk' (white king), 'bk' (black king)
class CheckersBoard {
  constructor() {
    this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));
    this.initClassicBoard();
  }

  initClassicBoard() {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if ((r + c) % 2 === 1) {
          if (r < 3) this.grid[r][c] = 'b'; // Black
          else if (r > 4) this.grid[r][c] = 'w'; // White
          else this.grid[r][c] = null;
        } else {
          this.grid[r][c] = null;
        }
      }
    }
  }

  // Returns all legal moves for a player ('w' or 'b')
  getLegalMoves(playerColor) {
    const moves = [];
    const captures = [];

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = this.grid[r][c];
        if (!piece || !piece.startsWith(playerColor)) continue;

        const isKing = piece.endsWith('k');
        const directions = isKing
          ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
          : (playerColor === 'w' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]]);

        // Check regular moves
        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && !this.grid[nr][nc]) {
            const isPromotion = (playerColor === 'w' && nr === 0) || (playerColor === 'b' && nr === 7);
            moves.push({
              from: { r, c },
              to: { r: nr, c: nc },
              isCapture: false,
              isKing,
              isPromotion,
              difficulty: isKing || isPromotion ? 'hard' : 'easy'
            });
          }
        }

        // Check captures (all 4 diagonal directions for all pieces in Russian/international checkers)
        const captureDirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (const [dr, dc] of captureDirs) {
          const midR = r + dr;
          const midC = c + dc;
          const destR = r + dr * 2;
          const destC = c + dc * 2;

          if (destR >= 0 && destR < 8 && destC >= 0 && destC < 8) {
            const midPiece = this.grid[midR][midC];
            const destPiece = this.grid[destR][destC];
            const enemyColor = playerColor === 'w' ? 'b' : 'w';

            if (midPiece && midPiece.startsWith(enemyColor) && !destPiece) {
              const isPromotion = (playerColor === 'w' && destR === 0) || (playerColor === 'b' && destR === 7);
              captures.push({
                from: { r, c },
                to: { r: destR, c: destC },
                captured: { r: midR, c: midC },
                isCapture: true,
                isKing,
                isPromotion,
                difficulty: isPromotion ? 'hard' : 'medium'
              });
            }
          }
        }
      }
    }

    // Mandatory capture rule: if captures exist, only captures are legal
    return captures.length > 0 ? captures : moves;
  }

  // Executes a validated move
  executeMove(move, playerColor) {
    const { from, to, isCapture, captured } = move;
    let piece = this.grid[from.r][from.c];
    this.grid[from.r][from.c] = null;

    if (isCapture && captured) {
      this.grid[captured.r][captured.c] = null;
    }

    // King promotion check
    if ((playerColor === 'w' && to.r === 0) || (playerColor === 'b' && to.r === 7)) {
      piece = playerColor + 'k';
    }

    this.grid[to.r][to.c] = piece;

    // Check game over
    const nextPlayer = playerColor === 'w' ? 'b' : 'w';
    const nextMoves = this.getLegalMoves(nextPlayer);
    const isGameOver = nextMoves.length === 0;

    return {
      success: true,
      board: this.grid,
      isGameOver,
      winner: isGameOver ? playerColor : null
    };
  }

  // Piece counts
  getScores() {
    let w = 0, b = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (this.grid[r][c]?.startsWith('w')) w++;
        if (this.grid[r][c]?.startsWith('b')) b++;
      }
    }
    return { w, b };
  }
}

// -------------------------------------------------------------
// 3. WNK AI BOT ENGINE
// -------------------------------------------------------------
class AiBotPlayer {
  constructor(difficulty = 'balanced') {
    this.difficulty = difficulty;
    this.lastHit = null;
  }

  // Battleship bot shot selection
  decideBattleshipShot(shotsReceived) {
    const shotSet = new Set(shotsReceived.map(s => `${s.x},${s.y}`));

    // If there is an unsunk hit, target adjacent cells
    const hits = shotsReceived.filter(s => s.result === 'hit');
    for (const h of hits) {
      const neighbors = [
        { x: h.x + 1, y: h.y },
        { x: h.x - 1, y: h.y },
        { x: h.x, y: h.y + 1 },
        { x: h.x, y: h.y - 1 }
      ];
      for (const n of neighbors) {
        if (n.x >= 0 && n.x < 10 && n.y >= 0 && n.y < 10 && !shotSet.has(`${n.x},${n.y}`)) {
          return n;
        }
      }
    }

    // Checkerboard parity hunting
    const parityCandidates = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if ((x + y) % 2 === 0 && !shotSet.has(`${x},${y}`)) {
          parityCandidates.push({ x, y });
        }
      }
    }

    if (parityCandidates.length > 0) {
      return parityCandidates[Math.floor(Math.random() * parityCandidates.length)];
    }

    // Fallback: any available cell
    const allRemaining = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (!shotSet.has(`${x},${y}`)) {
          allRemaining.push({ x, y });
        }
      }
    }
    return allRemaining[Math.floor(Math.random() * allRemaining.length)];
  }

  // Checkers bot move selection
  decideCheckersMove(legalMoves) {
    if (!legalMoves || legalMoves.length === 0) return null;

    // Prioritize captures
    const captures = legalMoves.filter(m => m.isCapture);
    if (captures.length > 0) {
      return captures[Math.floor(Math.random() * captures.length)];
    }

    // Prioritize promotions
    const promotions = legalMoves.filter(m => m.isPromotion);
    if (promotions.length > 0) {
      return promotions[0];
    }

    // Normal move towards center
    return legalMoves[Math.floor(Math.random() * legalMoves.length)];
  }
}

module.exports = {
  BattleshipBoard,
  CheckersBoard,
  AiBotPlayer
};
