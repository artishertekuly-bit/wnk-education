/**
 * WNK Education - Real-time Gamification Client (Battleship & Checkers)
 * DUAL TRANSPORT: WebSockets (Render / Node.js) + Supabase Realtime (Universal Cloud Engine)
 * Fully Working Multiplayer (PvP) & WNK AI Practice with 1-Minute Question Timers
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
  // 2. Client Identity & Dual Transport State
  // -------------------------------------------------------------
  let socket = null;
  let isWsConnected = false;
  let isCloudActive = false;
  let cloudChannel = null;

  let currentRoom = null;
  let activeQuestion = null;
  let questionTimerInterval = null;
  let questionSecondsRemaining = 0;
  let isRadarAimingMode = false;
  let selectedCheckerPiece = null;

  // Question Timer Limit: 60 seconds (1 full minute) as requested
  const DEFAULT_QUESTION_TIME_LIMIT = 60;

  // Local Academic Question Bank (Kazakh Curriculum: Math, Reading, Sciences)
  const LOCAL_QUESTION_BANK = {
    math: [
      { id: 1, difficulty: 'easy', topic: 'Математика & Логика', question: 'Егер 3x + 15 = 45 болса, x-тің мәнін табыңыз:', options: ['A) 8', 'B) 10', 'C) 12', 'D) 15'], correct_answer: 1, explanation: '3x = 45 - 15 = 30 => x = 10.' },
      { id: 2, difficulty: 'easy', topic: 'Математика & Логика', question: 'Тіктөртбұрыштың ұзындығы 12 см, ал ені 8 см. Оның периметрі қанша?', options: ['A) 20 см', 'B) 40 см', 'C) 96 см', 'D) 48 см'], correct_answer: 1, explanation: 'P = 2 * (12 + 8) = 40 см.' },
      { id: 3, difficulty: 'easy', topic: 'Математика & Логика', question: '120 санының 25%-ы нешеге тең?', options: ['A) 25', 'B) 30', 'C) 35', 'D) 40'], correct_answer: 1, explanation: '120 * 0.25 = 30.' },
      { id: 4, difficulty: 'easy', topic: 'Математика & Логика', question: 'Өрнектің мәнін есептеңіз: 5² - 4 * 3 + 7 = ?', options: ['A) 18', 'B) 20', 'C) 22', 'D) 25'], correct_answer: 1, explanation: '25 - 12 + 7 = 20.' },
      { id: 5, difficulty: 'easy', topic: 'Математика & Логика', question: 'Сандар қатарының заңдылығын табыңыз: 2, 4, 8, 16, ?', options: ['A) 24', 'B) 30', 'C) 32', 'D) 36'], correct_answer: 2, explanation: 'Әр келесі сан 2-ге көбейтіледі: 16 * 2 = 32.' },
      { id: 6, difficulty: 'easy', topic: 'Математика & Логика', question: 'Шаршының ауданы 64 см² болса, қабырғасы неше см?', options: ['A) 6 см', 'B) 8 см', 'C) 16 см', 'D) 32 см'], correct_answer: 1, explanation: 'a² = 64 => a = 8 см.' },
      { id: 7, difficulty: 'easy', topic: 'Математика & Логика', question: 'ЕҮҮБ(24, 36) - 24 пен 36-ның ең үлкен ортақ бөлгіші:', options: ['A) 6', 'B) 8', 'C) 12', 'D) 18'], correct_answer: 2, explanation: '24 пен 36-ның ең үлкен ортақ бөлгіші - 12.' },
      { id: 8, difficulty: 'easy', topic: 'Математика & Логика', question: 'Теңсіздікті шешіңіз: 2x - 5 < 11', options: ['A) x < 8', 'B) x > 8', 'C) x < 3', 'D) x < 16'], correct_answer: 0, explanation: '2x < 16 => x < 8.' },
      { id: 9, difficulty: 'easy', topic: 'Математика & Логика', question: 'Бөлшектерді қосыңыз: 2/5 + 1/10 = ?', options: ['A) 3/15', 'B) 1/2', 'C) 3/10', 'D) 4/5'], correct_answer: 1, explanation: '4/10 + 1/10 = 5/10 = 1/2.' },
      { id: 10, difficulty: 'easy', topic: 'Математика & Логика', question: 'Егер сағат 14:45 болса, тура 3 сағат 25 минуттан соң уақыт неше болады?', options: ['A) 17:10', 'B) 18:00', 'C) 18:10', 'D) 18:20'], correct_answer: 2, explanation: '14:45 + 3 сағ = 17:45. 17:45 + 25 мин = 18:10.' },
      { id: 11, difficulty: 'medium', topic: 'Математика & Логика', question: 'Квадрат теңдеудің түбірлерін табыңыз: x² - 7x + 12 = 0', options: ['A) x = 2; 5', 'B) x = 3; 4', 'C) x = -3; -4', 'D) x = 1; 12'], correct_answer: 1, explanation: 'Виет теоремасы: x1 + x2 = 7, x1 * x2 = 12 => 3 және 4.' },
      { id: 12, difficulty: 'medium', topic: 'Математика & Логика', question: 'Арифметикалық прогрессияның a₁ = 3, айырмасы d = 4. Оның 10-шы мүшесін табыңыз:', options: ['A) 36', 'B) 39', 'C) 40', 'D) 43'], correct_answer: 1, explanation: 'a₁₀ = a₁ + 9d = 3 + 36 = 39.' },
      { id: 13, difficulty: 'medium', topic: 'Математика & Логика', question: 'Тік бұрышты үшбұрыштың катеттері 6 см және 8 см. Гипотенузасын табыңыз:', options: ['A) 9 см', 'B) 10 см', 'C) 12 см', 'D) 14 см'], correct_answer: 1, explanation: 'Пифагор: c = √(36 + 64) = 10 см.' },
      { id: 14, difficulty: 'medium', topic: 'Математика & Логика', question: 'Туындыны есептеңіз: f(x) = 4x³ - 5x² + 7x - 9', options: ['A) 12x² - 10x + 7', 'B) 12x³ - 5x + 7', 'C) 4x² - 10x', 'D) 12x² - 10x'], correct_answer: 0, explanation: "f'(x) = 12x² - 10x + 7." },
      { id: 15, difficulty: 'medium', topic: 'Математика & Логика', question: 'Теңдеуді шешіңіз: log₂(x - 3) = 4', options: ['A) 11', 'B) 13', 'C) 16', 'D) 19'], correct_answer: 3, explanation: 'x - 3 = 2⁴ = 16 => x = 19.' },
      { id: 16, difficulty: 'medium', topic: 'Математика & Логика', question: 'Көрсеткіштік теңдеу: 3^(x+2) - 3^x = 72', options: ['A) 1', 'B) 2', 'C) 3', 'D) 4'], correct_answer: 1, explanation: '3^x * (9 - 1) = 72 => 3^x = 9 => x = 2.' },
      { id: 17, difficulty: 'medium', topic: 'Математика & Логика', question: 'Шеңбердің ұзындығы 20π см болса, оның ауданы:', options: ['A) 50π см²', 'B) 100π см²', 'C) 200π см²', 'D) 400π см²'], correct_answer: 1, explanation: 'C = 2πr = 20π => r = 10. S = πr² = 100π см².' },
      { id: 18, difficulty: 'medium', topic: 'Математика & Логика', question: 'v = 180 км / 3 сағ = 60 км/сағ. 300 км-ді неше сағатта өтеді?', options: ['A) 4 сағ', 'B) 5 сағ', 'C) 5.5 сағ', 'D) 6 сағ'], correct_answer: 1, explanation: '300 / 60 = 5 сағат.' },
      { id: 19, difficulty: 'medium', topic: 'Математика & Логика', question: 'Ойын сүйегі тасталғанда жұп сан шығу ықтималдығы:', options: ['A) 1/6', 'B) 1/3', 'C) 1/2', 'D) 2/3'], correct_answer: 2, explanation: '{2, 4, 6} => 3/6 = 1/2.' },
      { id: 20, difficulty: 'medium', topic: 'Математика & Логика', question: 'Тік бұрышты үшбұрыш ауданы 24 см², бір катеті 6 см. Екінші катеті:', options: ['A) 4 см', 'B) 8 см', 'C) 10 см', 'D) 12 см'], correct_answer: 1, explanation: 'S = (a*b)/2 = 24 => 6*b = 48 => b = 8 см.' },
      { id: 21, difficulty: 'hard', topic: 'Математика & Логика', question: 'Интегралды есептеңіз: ∫₀² (3x² - 2x + 1) dx', options: ['A) 4', 'B) 6', 'C) 8', 'D) 10'], correct_answer: 1, explanation: '[x³ - x² + x]₀² = (8 - 4 + 2) = 6.' },
      { id: 22, difficulty: 'hard', topic: 'Математика & Логика', question: 'Катеттері 9 және 12 болатын үшбұрышқа іштей сызылған шеңбер радиусы:', options: ['A) 2', 'B) 3', 'C) 4', 'D) 5'], correct_answer: 1, explanation: 'c = 15. r = (9 + 12 - 15)/2 = 3.' },
      { id: 23, difficulty: 'hard', topic: 'Математика & Логика', question: 'Комбинаторика: C(7, 3) мәні қанша?', options: ['A) 21', 'B) 35', 'C) 42', 'D) 70'], correct_answer: 1, explanation: '7! / (3! * 4!) = 35.' },
      { id: 24, difficulty: 'hard', topic: 'Математика & Логика', question: 'Векторлар скаляр көбейтіндісі: a = (3, -4, 2), b = (-2, 1, 5). a · b = ?', options: ['A) -2', 'B) 0', 'C) 4', 'D) 8'], correct_answer: 1, explanation: '(3*-2) + (-4*1) + (2*5) = -6 - 4 + 10 = 0.' },
      { id: 25, difficulty: 'hard', topic: 'Математика & Логика', question: 'Теңдеу түбірлері: 2sin²(x) - 3sin(x) + 1 = 0, аралығы [0, π/2]:', options: ['A) x = π/6 және x = π/2', 'B) x = π/4', 'C) x = π/3', 'D) x = 0'], correct_answer: 0, explanation: 'sin(x) = 1/2 (x = π/6), sin(x) = 1 (x = π/2).' }
    ],
    reading: [
      {
        id: 1,
        difficulty: 'easy',
        topic: 'Оқу сауаттылығы',
        context_text: 'Қазақстанның оңтүстігінде орналасқан Түркістан қаласы — мыңжылдық тарихы бар рухани орталық. Мұнда Қожа Ахмет Ясауи кесенесі бой көтерген. Бұл сәулет өнерінің ғажайып үлгісі ЮНЕСКО-ның Бүкіләлемдік мұралар тізіміне енгізілген. Қалаға жыл сайын әлемнің түкпір-түкпірінен мыңдаған туристер мен саяхатшылар ағылып келеді.',
        question: 'Мәтінге сәйкес Қожа Ахмет Ясауи кесенесі туралы қандай ақпарат дұрыс?',
        options: ['A) Жақында ғана салынған ғимарат', 'B) ЮНЕСКО-ның Бүкіләлемдік мұралар тізіміне енген', 'C) Тек Алматы тұрғындарына арналған', 'D) Мүлде туристер келмейді'],
        correct_answer: 1,
        explanation: 'Мәтінде кесененің ЮНЕСКО Бүкіләлемдік мұралар тізіміне енгізілгені анық айтылған.'
      },
      {
        id: 2,
        difficulty: 'easy',
        topic: 'Оқу сауаттылығы',
        context_text: 'Арал теңізінің тартылуы — ХХ ғасырдағы ең үлкен экологиялық апаттардың бірі. Бұрын теңізге құятын Сырдария мен Әмудария өзендерінің суы ауыл шаруашылығына, әсіресе мақта егуге жаппай бұрылды. Нәтижесінде теңіз деңгейі шұғыл төмендеп, оның орнында Аралқұм шөлі пайда болды.',
        question: 'Арал теңізінің тартылуының басты себебі ретінде мәтінде не аталған?',
        options: ['A) Климаттың күрт суытуы', 'B) Өзендер суының ауыл шаруашылығына бұрылуы', 'C) Балық шаруашылығының дамуы', 'D) Жер сілкінісі салдары'],
        correct_answer: 1,
        explanation: 'Сырдария мен Әмудария суы егістікке жаппай бұрылғандықтан теңіз суалған.'
      },
      {
        id: 3,
        difficulty: 'easy',
        topic: 'Оқу сауаттылығы',
        context_text: 'Қаныш Сәтбаев — қазақтан шыққан тұңғыш академик геолог. Ол Жезқазған мыс кен орнының мол қорын ғылыми тұрғыда дәлелдеп, ел қорғанысына өлшеусіз үлес қосты. Ғалымның басшылығымен Қазақ КСР Ғылым академиясы құрылып, республиканың өндірістік әлеуеті қарқынды дамыды.',
        question: 'Мәтінге қарап Қаныш Сәтбаевтың қай кен орнын ашуға тікелей үлес қосқанын анықтаңыз:',
        options: ['A) Қарағанды көмір алабы', 'B) Жезқазған мыс кен орны', 'C) Маңғыстау мұнайы', 'D) Алтай алтыны'],
        correct_answer: 1,
        explanation: 'Мәтінде Сәтбаевтың Жезқазған мыс кен орнының қорын дәлелдегені жазылған.'
      },
      {
        id: 4,
        difficulty: 'medium',
        topic: 'Оқу сауаттылығы',
        context_text: 'Жасанды интеллект жүйелері соңғы жылдары медицинада зор төңкеріс жасауда. Мыңдаған рентген және МРТ суреттерін талдау арқылы нейрожелілер қатерлі ісікті бастапқы кезеңінде аса жоғары дәлдікпен анықтай алады. Дегенмен, соңғы клиникалық диагноз бен емдеу тәсілін бекіту жауапкершілігі әрдайым білікті дәрігердің өзінде қалуы шарт.',
        question: 'Мәтіннің негізгі түйіні (идеясы) қандай?',
        options: ['A) AI дәрігерлерді толық алмастырады', 'B) AI медицинада қуатты көмекші, бірақ шешуші шешім адам дәрігерде қалады', 'C) Медицинада технология қолдануға тыйым салынуы керек', 'D) Рентген суреттерін тек компьютерлер оқи алады'],
        correct_answer: 1,
        explanation: 'AI зор көмекші құрал болғанымен, түпкілікті диагноз бен жауапкершілік дәрігерге тиесілі.'
      },
      {
        id: 5,
        difficulty: 'hard',
        topic: 'Оқу сауаттылығы',
        context_text: 'Әл-Фараби өзінің «Қайырымды қала тұрғындарының көзқарастары» атты трактатында бақытқа жету жолы тек білім мен парасаттылық арқылы жүзеге асатынын жазған. Екінші Ұстаз мемлекет басшысы ең алдымен әділ, білімді және халықтың әл-ауқатын ойлайтын дана тұлға болуы керек деп санаған. Бұл философиялық тұжырым қазіргі заманның саяси әдебі үшін де өзектілігін жойған жоқ.',
        question: 'Әл-Фарабидің «Қайырымды қала» тұжырымдамасының басты этикалық тірегі не?',
        options: ['A) Тек әскери күш пен билік', 'B) Байлық пен сауда-саттық', 'C) Білім, парасаттылық және әділетті басқару', 'D) Халықты қатаң заңмен бағындыру'],
        correct_answer: 2,
        explanation: 'Әл-Фараби бақыт пен ізгіліктің негізі білім, парасат және әділдік деп үйреткен.'
      }
    ],
    science: [
      { id: 1, difficulty: 'easy', topic: 'Физика & Ғылым', question: 'Ньютонның 2-заңының математикалық формуласы қандай?', options: ['A) F = ma', 'B) E = mc²', 'C) P = UI', 'D) s = vt'], correct_answer: 0, explanation: 'Ньютонның екінші заңы: Денеге әсер етуші күш F = m * a.' },
      { id: 2, difficulty: 'easy', topic: 'Физика & Ғылым', question: 'Тізбек бөлігіне арналған Ом заңының формуласы:', options: ['A) I = U / R', 'B) U = I / R', 'C) R = U * I', 'D) A = F * s'], correct_answer: 0, explanation: 'Ток күші кернеуге тура пропорционал, кедергіге кері: I = U / R.' },
      { id: 3, difficulty: 'easy', topic: 'Химия & Заттар', question: 'Су молекуласының химиялық формуласы қандай?', options: ['A) H2O', 'B) CO2', 'C) NaCl', 'D) CH4'], correct_answer: 0, explanation: 'Су: екі сутек және бір оттек атомы (H2O).' },
      { id: 4, difficulty: 'medium', topic: 'Физика & Ғылым', question: 'Эйнштейннің масса мен энергияның байланысын көрсететін әйгілі теңдеуі:', options: ['A) E = mc²', 'B) E = hν', 'C) F = G(m1m2/r²)', 'D) p = mv'], correct_answer: 0, explanation: 'Альберт Эйнштейн: E = m * c².' },
      { id: 5, difficulty: 'medium', topic: 'Информатика & AI', question: 'Компьютер ғылымының негізін салған және Тьюринг машинасын ұсынған ғалым:', options: ['A) Алан Тьюринг', 'B) Джон фон Нейман', 'C) Блез Паскаль', 'D) Чарльз Бэббидж'], correct_answer: 0, explanation: 'Алан Тьюринг заманауи информатика мен жасанды интеллект теориясының атасы.' },
      { id: 6, difficulty: 'hard', topic: 'Физика & Ғылым', question: 'Кванттық физикада жарық квантының (фотонның) энергиясын есептейтін формула (Планк заңы):', options: ['A) E = hν', 'B) E = mc²', 'C) λ = v / f', 'D) A = qU'], correct_answer: 0, explanation: 'Макс Планк формуласы: E = h * ν, мұндағы h — Планк тұрақтысы.' }
    ]
  };

  function getQuestionsForTopic(topicName = 'Математика & Логика') {
    const t = (topicName || '').toLowerCase();
    let sourceBank = LOCAL_QUESTION_BANK.science;
    if (t.includes('матем') || t.includes('логик') || t.includes('сан') || t.includes('есеп') || t.includes('алгебр')) {
      sourceBank = LOCAL_QUESTION_BANK.math;
    } else if (t.includes('оқу') || t.includes('мәтін') || t.includes('әдебиет') || t.includes('сауат') || t.includes('тарих')) {
      sourceBank = LOCAL_QUESTION_BANK.reading;
    }

    const questions = [];
    for (let i = 0; i < 25; i++) {
      const item = sourceBank[i % sourceBank.length];
      questions.push({
        ...item,
        id: i + 1,
        topic: topicName || item.topic,
        difficulty: i < 10 ? 'easy' : (i < 20 ? 'medium' : 'hard')
      });
    }
    return questions;
  }

  // Persistent Client User Identity
  function getPlatformUser() {
    try {
      const stored = localStorage.getItem('wnk_auth_user');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    if (window.currentUser && window.currentUser.id) return window.currentUser;

    // Ephemeral guest identity if not logged in
    let guestId = localStorage.getItem('wnk_gaming_guest_id');
    if (!guestId) {
      guestId = 'guest_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('wnk_gaming_guest_id', guestId);
    }
    return {
      id: guestId,
      name: 'Оқушы ' + guestId.substring(6, 10).toUpperCase(),
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${guestId}`
    };
  }

  function getMyUserId() {
    const u = getPlatformUser();
    return u ? u.id : 'guest';
  }

  function requireAuth(actionName = 'ойнау') {
    const user = getPlatformUser();
    return user;
  }

  // -------------------------------------------------------------
  // 3. Dual Transport Connection (WS + Supabase Cloud)
  // -------------------------------------------------------------

  function initConnection() {
    initWebSocket();
    initSupabaseCloudEngine();
  }

  function initWebSocket() {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const customWs = localStorage.getItem('wnk_ws_server_url');

    let wsUrl = null;
    if (customWs) {
      wsUrl = customWs;
    } else if (isLocalhost) {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      wsUrl = `${protocol}//${window.location.host}/ws`;
    }

    if (!wsUrl) return;

    try {
      socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        isWsConnected = true;
        updateServerStatusBadge(true, 'WS Сервер желіде');
        const user = getPlatformUser();
        if (user) sendWs('auth_identify', { user });
        sendWs('lobby_get_rooms', {});
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleServerMessage(data);
        } catch (e) {
          console.error('[WS Parse error]', e);
        }
      };

      socket.onclose = () => {
        isWsConnected = false;
        if (!isCloudActive) updateServerStatusBadge(false);
      };

      socket.onerror = () => {
        isWsConnected = false;
      };
    } catch (e) {
      isWsConnected = false;
    }
  }

  function sendWs(type, data = {}) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type, ...data }));
      return true;
    }
    return false;
  }

  function initSupabaseCloudEngine() {
    let checkAttempts = 0;
    const interval = setInterval(() => {
      checkAttempts++;
      const sb = window.supabaseClient;
      if (sb) {
        clearInterval(interval);
        setupSupabaseLobby(sb);
      } else if (checkAttempts > 30) {
        clearInterval(interval);
      }
    }, 200);
  }

  async function setupSupabaseLobby(sb) {
    isCloudActive = true;
    updateServerStatusBadge(true, 'Supabase Cloud желіде');
    refreshLobbyFromSupabase();

    try {
      sb.channel('public:wnk_active_rooms')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'wnk_active_rooms' }, () => {
          refreshLobbyFromSupabase();
        })
        .subscribe();
    } catch (e) {}
  }

  async function refreshLobbyFromSupabase() {
    const sb = window.supabaseClient;
    if (!sb) return;

    try {
      const { data, error } = await sb
        .from('wnk_active_rooms')
        .select('*')
        .eq('status', 'waiting')
        .order('created_at', { ascending: false })
        .limit(20);

      if (!error && Array.isArray(data)) {
        const rooms = data.map(r => ({
          id: r.id,
          gameType: r.game_type,
          topic: r.topic,
          status: r.status,
          host: {
            id: r.host_id,
            username: r.host_name,
            avatar: r.host_avatar
          },
          createdAt: new Date(r.created_at).getTime()
        }));
        renderLobbyRooms(rooms, Math.max(1, rooms.length + 1));
      }
    } catch (e) {}
  }

  function subscribeToCloudRoom(roomId, onReady) {
    const sb = window.supabaseClient;
    if (!sb) return;

    if (cloudChannel) {
      cloudChannel.unsubscribe();
    }

    cloudChannel = sb.channel(`arena_room_${roomId}`, {
      config: { broadcast: { self: false } }
    });

    cloudChannel
      .on('broadcast', { event: 'game_event' }, ({ payload }) => {
        handleServerMessage(payload);
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED' && onReady) onReady();
      });
  }

  function broadcastCloudEvent(type, data = {}) {
    if (cloudChannel) {
      cloudChannel.send({
        type: 'broadcast',
        event: 'game_event',
        payload: { type, ...data }
      });
    }
  }

  function sendGameMsg(type, data = {}) {
    const sentWs = sendWs(type, data);
    if (cloudChannel) {
      broadcastCloudEvent(type, data);
    }
    return sentWs || !!cloudChannel;
  }

  function updateServerStatusBadge(isOnline, text = null) {
    const badge = document.getElementById('gamingServerStatus');
    if (!badge) return;
    if (isOnline) {
      badge.className = 'gaming-server-status is-online';
      badge.innerHTML = `<span class="status-pulse-dot"></span> <span>${text || 'Сервер желіде (Реалтайм)'}</span>`;
    } else {
      badge.className = 'gaming-server-status is-offline';
      badge.innerHTML = `<span class="status-offline-dot"></span> <span>WNK AI автономды режимі дайын</span>`;
    }
  }

  // -------------------------------------------------------------
  // 4. Unified Server & Cloud Message Dispatcher
  // -------------------------------------------------------------
  function handleServerMessage(msg) {
    if (!msg || !msg.type) return;
    const { type } = msg;
    const myId = getMyUserId();

    switch (type) {
      case 'lobby_update':
        renderLobbyRooms(msg.rooms || [], msg.onlineCount || 1);
        break;

      case 'room_created': {
        const r = msg.room || msg;
        r.myId = myId;
        r.isMyTurn = (r.turn === myId);
        currentRoom = r;
        showArenaView(currentRoom);
        break;
      }

      case 'guest_joined': {
        if (currentRoom) {
          currentRoom.guest = msg.guest;
          if (currentRoom.gameType === 'checkers') {
            currentRoom.status = 'playing';
            currentRoom.turn = currentRoom.host?.id;
            currentRoom.isMyTurn = (currentRoom.turn === myId);
            sendGameMsg('battle_started', { turn: currentRoom.turn, message: 'Шашки басталды! Ақтар жүреді.' });
          } else {
            currentRoom.status = 'placing';
          }
          updateArenaUI();
          sfx.click();
          showToast(`${msg.guest?.username || 'Қарсылас'} ойынға қосылды!`, 'success');
        }
        break;
      }

      case 'room_joined': {
        const r = msg.room || msg;
        r.myId = myId;
        r.isMyTurn = (r.turn === myId);
        currentRoom = r;
        showArenaView(currentRoom);
        sfx.click();
        showToast(`Бөлмеге қосылдыңыз!`, 'success');
        break;
      }

      case 'questions_ready':
        showToast(`25 сұрақ дайын болды: ${msg.topic}`);
        break;

      case 'place_ships': {
        // Opponent placed their fleet
        if (currentRoom && currentRoom.battleship) {
          if (msg.playerId === currentRoom.host?.id) currentRoom.hostFleetReady = true;
          if (msg.playerId === currentRoom.guest?.id) currentRoom.guestFleetReady = true;

          // Check if both ready in Cloud Mode
          if (currentRoom.hostFleetReady && currentRoom.guestFleetReady) {
            currentRoom.status = 'playing';
            currentRoom.turn = currentRoom.host?.id;
            currentRoom.isMyTurn = (currentRoom.turn === myId);
            sfx.victory();
            showToast('Теңіз шайқасы басталды! Оқты нысанаға көздеңіз.', 'success');
            updateArenaUI();
            sendGameMsg('battle_started', { turn: currentRoom.turn });
          } else {
            updateTurnBanner('Қарсылас флотын орналастырды! Сіз де дайын болыңыз.');
          }
        }
        break;
      }

      case 'fleet_placed':
        if (currentRoom && currentRoom.battleship) {
          if (msg.fleet) currentRoom.battleship.myFleet = msg.fleet;
          renderBattleshipBoards();
        }
        break;

      case 'waiting_for_opponent_fleet':
        showToast('Кемелеріңіз орналастырылды! Қарсылас дайындалуда...', 'info');
        updateTurnBanner('⚓ Флотыңыз дайын! Қарсыластың дайын болуы күтілуде...');
        break;

      case 'battle_started':
        showToast(msg.message || 'Шайқас басталды!', 'success');
        sfx.victory();
        if (currentRoom) {
          currentRoom.status = 'playing';
          if (msg.turn) currentRoom.turn = msg.turn;
          currentRoom.isMyTurn = (currentRoom.turn === myId);
          updateTurnBanner();
          if (currentRoom.gameType === 'battleship') renderBattleshipBoards();
          else renderCheckersBoard();
        }
        break;

      case 'game_state_update': {
        const raw = msg.room || msg;
        if (currentRoom) {
          currentRoom.status = raw.status || currentRoom.status;
          currentRoom.turn = raw.turn || currentRoom.turn;
          currentRoom.isMyTurn = (currentRoom.turn === myId);
          currentRoom.scores = raw.scores || currentRoom.scores;
          if (raw.battleship?.opponentSea) currentRoom.battleship.opponentSea = raw.battleship.opponentSea;
          if (raw.checkers?.board) currentRoom.checkers.board = raw.checkers.board;
          updateArenaUI();
        }
        break;
      }

      case 'question_presented':
        presentQuestionModal(msg.question, msg.timeLimitSeconds || DEFAULT_QUESTION_TIME_LIMIT, msg.isRadar);
        break;

      case 'opponent_answering':
        showOpponentAnsweringBanner(msg.playerName, msg.difficulty, msg.timeLimitSeconds || DEFAULT_QUESTION_TIME_LIMIT);
        break;

      case 'move_executed':
        closeQuestionModal();
        handleMoveExecuted(msg);
        break;

      case 'move_failed':
        closeQuestionModal();
        handleMoveFailed(msg);
        break;

      case 'radar_executed':
        closeQuestionModal();
        handleRadarExecuted(msg);
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
        console.log('[WNK Gaming msg]', type, msg);
    }
  }

  // -------------------------------------------------------------
  // 5. Lobby & Arena Views Management
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
      if (!confirm('Ойыннан шықсаңыз, жеңіс қарсыласқа беріледі. Шығуды растайсыз ба?')) {
        return;
      }
      sendGameMsg('surrender', { roomId: currentRoom.id });
    }

    if (cloudChannel) {
      cloudChannel.unsubscribe();
      cloudChannel = null;
    }

    currentRoom = null;
    const lobbyView = document.getElementById('gamingLobbyView');
    const arenaView = document.getElementById('gamingArenaView');
    if (lobbyView) lobbyView.style.display = 'block';
    if (arenaView) arenaView.style.display = 'none';

    refreshLobbyFromSupabase();
    sendWs('lobby_get_rooms', {});
  }

  function updateArenaUI() {
    if (!currentRoom) return;
    const myId = getMyUserId();
    currentRoom.myId = myId;
    currentRoom.isMyTurn = (currentRoom.turn === myId);

    // Arena title & badges
    const titleEl = document.getElementById('arenaGameTitle');
    const topicEl = document.getElementById('arenaTopicBadge');
    const codeEl = document.getElementById('arenaRoomCode');

    if (titleEl) titleEl.textContent = currentRoom.gameType === 'battleship' ? '⚓ Морской бой' : '🏁 Шашки';
    if (topicEl) topicEl.textContent = currentRoom.topic || 'Математика & Логика';
    if (codeEl) codeEl.textContent = currentRoom.id;

    // Scoreboard elements
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
    if (p1Score) p1Score.textContent = currentRoom.host?.id === myId ? (currentRoom.myScore || 0) : (currentRoom.opponentScore || 0);
    if (p1Streak) {
      const s = currentRoom.host?.id === myId ? (currentRoom.myStreak || 0) : 0;
      p1Streak.innerHTML = s > 0 ? `🔥 ${s}` : '—';
    }

    if (p2Name) p2Name.textContent = currentRoom.guest ? currentRoom.guest.username : 'Қарсылас күтілуде...';
    if (p2Avatar) p2Avatar.src = currentRoom.guest?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=p2';
    if (p2Score) p2Score.textContent = currentRoom.guest?.id === myId ? (currentRoom.myScore || 0) : (currentRoom.opponentScore || 0);
    if (p2Streak) {
      const s = currentRoom.guest?.id === myId ? (currentRoom.myStreak || 0) : 0;
      p2Streak.innerHTML = s > 0 ? `🔥 ${s}` : '—';
    }

    updateTurnBanner();

    // Board visibility
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

  function updateTurnBanner(customText = null) {
    const banner = document.getElementById('arenaTurnBanner');
    if (!banner || !currentRoom) return;

    if (customText) {
      banner.className = 'arena-turn-banner is-placing';
      banner.innerHTML = `<span>${customText}</span>`;
      return;
    }

    if (currentRoom.status === 'waiting') {
      banner.className = 'arena-turn-banner is-waiting';
      banner.innerHTML = `<span>⏳ Екінші ойыншының қосылуы күтілуде... Бөлме коды: <strong>${currentRoom.id}</strong></span>`;
      return;
    }

    if (currentRoom.status === 'placing') {
      const hasMyFleet = currentRoom.battleship?.myFleet?.ships?.length === 10;
      banner.className = 'arena-turn-banner is-placing';
      banner.innerHTML = hasMyFleet
        ? `<span>⚓ Флотыңыз дайын! Қарсыластың дайындалуы күтілуде...</span>`
        : `<span>⚓ Кемелерді орналастыру үшін «🎲 Авто-орналастыруды» басыңыз!</span>`;
      return;
    }

    if (currentRoom.status === 'finished') {
      const isWinner = currentRoom.winner === currentRoom.myId;
      banner.className = `arena-turn-banner ${isWinner ? 'is-my-turn' : 'is-opponent-turn'}`;
      banner.innerHTML = isWinner
        ? `<span>🏆 ЖЕҢІС! Сіз ойынды жеңіспен аяқтадыңыз!</span>`
        : `<span>Матч аяқталды. Келесі жолы сәттілік серік болсын!</span>`;
      return;
    }

    if (currentRoom.isMyTurn) {
      banner.className = 'arena-turn-banner is-my-turn';
      banner.innerHTML = `
        <span class="turn-fire-dot"></span>
        <span><strong>СІЗДІҢ КЕЗЕГІҢІЗ!</strong> Нысананы таңдап, сұраққа жауап беріңіз (1 минут).</span>
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
  // 6. Battleship Boards Rendering & Interaction
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

        const myShips = bs.myFleet?.ships || [];
        const hasShip = myShips.some(s => s.coords && s.coords.some(pt => pt.x === x && pt.y === y));
        if (hasShip) cellClass += ' bs-has-ship';

        const shots = bs.myFleet?.shotsReceived || [];
        const shot = shots.find(s => s.x === x && s.y === y);
        if (shot) {
          if (shot.result === 'hit') {
            cellClass += ' bs-hit';
            content = '🔥';
          } else {
            cellClass += ' bs-miss';
            content = '•';
          }
        }

        return `<div class="${cellClass}" data-x="${x}" data-y="${y}">${content}</div>`;
      });
    }

    // 2. Opponent Target Grid
    const targetSeaEl = document.getElementById('battleshipTargetGrid');
    if (targetSeaEl) {
      targetSeaEl.innerHTML = renderGridHtml(10, (x, y) => {
        let cellClass = 'bs-cell bs-target-cell';
        let content = '';

        const shots = bs.opponentSea?.shots || [];
        const shot = shots.find(s => s.x === x && s.y === y);

        if (shot) {
          cellClass += ' is-shot';
          if (shot.result === 'hit') {
            cellClass += ' bs-hit';
            content = '🔥';
          } else {
            cellClass += ' bs-miss';
            content = '•';
          }
        }

        const radarList = bs.opponentSea?.radarRevealed || [];
        const rad = radarList.find(r => r.x === x && r.y === y);
        if (rad && !shot) {
          cellClass += rad.hasShip ? ' bs-radar-ship' : ' bs-radar-water';
          content = rad.hasShip ? '⚓' : '🌊';
        }

        return `<div class="${cellClass}" data-x="${x}" data-y="${y}">${content}</div>`;
      });

      // Target Sea Click Events
      targetSeaEl.querySelectorAll('.bs-target-cell:not(.is-shot)').forEach(cell => {
        cell.addEventListener('click', () => {
          if (currentRoom.status === 'waiting') {
            showToast('⏳ Екінші ойыншының қосылуын күтіңіз!', 'info');
            return;
          }
          if (currentRoom.status === 'placing') {
            showToast('⚓ Алдымен кемелеріңізді орналастырыңыз («Авто-орналастыру» басыңыз)!', 'info');
            return;
          }
          if (!currentRoom.isMyTurn) {
            showToast('Қазір қарсыластың кезегі! Күте тұрыңыз.', 'info');
            return;
          }

          const x = parseInt(cell.getAttribute('data-x'), 10);
          const y = parseInt(cell.getAttribute('data-y'), 10);

          if (isRadarAimingMode) {
            triggerRadarScan(x, y);
          } else {
            triggerBattleshipShot(x, y);
          }
        });
      });
    }

    renderBattleshipControls();
  }

  function renderGridHtml(size, cellRenderer) {
    let html = `<div class="bs-grid-wrap">`;
    html += `<div class="bs-grid-row bs-header-row"><div class="bs-corner-cell"></div>`;
    for (let c = 0; c < size; c++) html += `<div class="bs-coord-cell">${LETTERS[c]}</div>`;
    html += `</div>`;

    for (let r = 0; r < size; r++) {
      html += `<div class="bs-grid-row"><div class="bs-coord-cell">${r + 1}</div>`;
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

    if (currentRoom.status === 'placing' || currentRoom.status === 'waiting') {
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

  function generateRandomFleetClient() {
    const B_SIZE = 10;
    const SHIPS = [
      { name: 'Линкор', size: 4, count: 1 },
      { name: 'Крейсер', size: 3, count: 2 },
      { name: 'Эсминец', size: 2, count: 3 },
      { name: 'Катер', size: 1, count: 4 }
    ];
    const occupied = Array.from({ length: B_SIZE }, () => Array(B_SIZE).fill(false));
    const buffer = Array.from({ length: B_SIZE }, () => Array(B_SIZE).fill(false));
    const ships = [];
    let id = 1;

    for (const t of SHIPS) {
      for (let c = 0; c < t.count; c++) {
        let placed = false, attempts = 0;
        while (!placed && attempts < 500) {
          attempts++;
          const horizontal = Math.random() < 0.5;
          const xMax = horizontal ? B_SIZE - t.size : B_SIZE - 1;
          const yMax = horizontal ? B_SIZE - 1 : B_SIZE - t.size;
          const startX = Math.floor(Math.random() * (xMax + 1));
          const startY = Math.floor(Math.random() * (yMax + 1));

          let fits = true;
          const coords = [];
          for (let i = 0; i < t.size; i++) {
            const x = horizontal ? startX + i : startX;
            const y = horizontal ? startY : startY + i;
            if (buffer[y][x]) { fits = false; break; }
            coords.push({ x, y });
          }

          if (fits) {
            for (const pt of coords) {
              occupied[pt.y][pt.x] = true;
              for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                  const ny = pt.y + dy, nx = pt.x + dx;
                  if (nx >= 0 && nx < B_SIZE && ny >= 0 && ny < B_SIZE) buffer[ny][nx] = true;
                }
              }
            }
            ships.push({ id: id++, name: t.name, size: t.size, coords, hits: [] });
            placed = true;
          }
        }
      }
    }
    return { ships, shotsReceived: [] };
  }

  function handleAutoPlaceFleet() {
    sfx.click();
    const fleet = generateRandomFleetClient();
    const myId = getMyUserId();

    if (currentRoom) {
      if (!currentRoom.battleship) currentRoom.battleship = {};
      currentRoom.battleship.myFleet = fleet;
      renderBattleshipBoards();

      const isHost = currentRoom.host?.id === myId;
      if (isHost) currentRoom.hostFleetReady = true;
      else currentRoom.guestFleetReady = true;

      // Check if both ready in PvP
      if (currentRoom.hostFleetReady && (currentRoom.guestFleetReady || currentRoom.guest?.isBot)) {
        currentRoom.status = 'playing';
        currentRoom.turn = currentRoom.host?.id;
        currentRoom.isMyTurn = (currentRoom.turn === myId);
        sfx.victory();
        showToast('Теңіз шайқасы басталды! Оқты нысанаға көздеңіз.', 'success');
        updateArenaUI();
        sendGameMsg('battle_started', { turn: currentRoom.turn });
      } else {
        updateTurnBanner('⚓ Флотыңыз дайын! Қарсыластың дайын болуы күтілуде...');
      }
    }

    sendGameMsg('place_ships', { roomId: currentRoom.id, isAuto: true, playerId: myId });
  }

  function triggerBattleshipShot(x, y) {
    sfx.fire();
    const pool = currentRoom.questions || getQuestionsForTopic(currentRoom.topic);
    const difficulty = (currentRoom.myStreak >= 2) ? 'medium' : 'easy';
    const candidates = pool.filter(q => q.difficulty === difficulty);
    const q = candidates[Math.floor(Math.random() * candidates.length)] || pool[0];

    // 1 Full Minute (60 seconds) timer!
    const timeLimitSeconds = (q.difficulty === 'hard' || q.context_text) ? 75 : DEFAULT_QUESTION_TIME_LIMIT;

    if (isWsConnected) {
      sendWs('request_move', { roomId: currentRoom.id, moveData: { x, y } });
    } else {
      sendGameMsg('opponent_answering', {
        playerName: getPlatformUser()?.name || 'Ойыншы',
        difficulty: q.difficulty,
        timeLimitSeconds
      });

      currentRoom.pendingMove = { moveData: { x, y }, question: q, isRadar: false };
      presentQuestionModal(q, timeLimitSeconds, false);
    }
  }

  function triggerRadarScan(cx, cy) {
    isRadarAimingMode = false;
    document.getElementById('arenaBattleshipView')?.classList.remove('is-radar-targeting');
    sfx.radar();

    const pool = currentRoom.questions || getQuestionsForTopic(currentRoom.topic);
    const hardCandidates = pool.filter(q => q.difficulty === 'hard');
    const q = hardCandidates[Math.floor(Math.random() * hardCandidates.length)] || pool[0];
    const timeLimitSeconds = 60; // 1 minute

    if (isWsConnected) {
      sendWs('activate_radar', { roomId: currentRoom.id, center: { x: cx, y: cy } });
    } else {
      sendGameMsg('opponent_answering', {
        playerName: getPlatformUser()?.name || 'Ойыншы',
        difficulty: 'hard',
        timeLimitSeconds
      });
      currentRoom.pendingMove = { center: { x: cx, y: cy }, question: q, isRadar: true };
      presentQuestionModal({ ...q, question: `[РАДАРДЫ ІСКЕ ҚОСУ СЫНАҒЫ]: ${q.question}` }, timeLimitSeconds, true);
    }
  }

  // -------------------------------------------------------------
  // 7. Checkers Board Rendering & Interaction
  // -------------------------------------------------------------
  function renderCheckersBoard() {
    const ch = currentRoom?.checkers;
    const boardEl = document.getElementById('checkersGrid');
    if (!boardEl || !ch) return;

    const myId = getMyUserId();
    const board = ch.board;
    const myColor = (currentRoom.host?.id === myId) ? 'w' : 'b';
    ch.myColor = myColor;
    const legalMoves = ch.legalMoves || getClientCheckersLegalMoves(board, myColor);

    let html = `<div class="checkers-board-wrap">`;
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

    boardEl.querySelectorAll('.ch-cell-dark').forEach(cell => {
      cell.addEventListener('click', () => {
        if (currentRoom.status === 'waiting') {
          showToast('⏳ Екінші ойыншының қосылуын күтіңіз!', 'info');
          return;
        }
        if (!currentRoom.isMyTurn || currentRoom.status !== 'playing') {
          showToast('Қазір қарсыластың кезегі!', 'info');
          return;
        }

        const r = parseInt(cell.getAttribute('data-r'), 10);
        const c = parseInt(cell.getAttribute('data-c'), 10);
        const piece = board[r][c];

        if (piece && piece.startsWith(myColor)) {
          selectedCheckerPiece = { r, c };
          sfx.click();
          renderCheckersBoard();
        } else if (selectedCheckerPiece) {
          const move = legalMoves.find(m =>
            m.from.r === selectedCheckerPiece.r && m.from.c === selectedCheckerPiece.c &&
            m.to.r === r && m.to.c === c
          );

          if (move) {
            selectedCheckerPiece = null;
            executeCheckerMoveRequest(move);
          } else {
            selectedCheckerPiece = null;
            renderCheckersBoard();
          }
        }
      });
    });
  }

  function executeCheckerMoveRequest(move) {
    sfx.click();
    const difficulty = move.isPromotion || move.isKing ? 'hard' : (move.isCapture ? 'medium' : 'easy');
    const pool = currentRoom.questions || getQuestionsForTopic(currentRoom.topic);
    const candidates = pool.filter(q => q.difficulty === difficulty);
    const q = candidates[Math.floor(Math.random() * candidates.length)] || pool[0];
    const timeLimitSeconds = (q.difficulty === 'hard' || q.context_text) ? 75 : DEFAULT_QUESTION_TIME_LIMIT;

    if (isWsConnected) {
      sendWs('request_move', { roomId: currentRoom.id, moveData: move });
    } else {
      sendGameMsg('opponent_answering', {
        playerName: getPlatformUser()?.name || 'Ойыншы',
        difficulty,
        timeLimitSeconds
      });
      currentRoom.pendingMove = { moveData: move, question: q, isRadar: false };
      presentQuestionModal(q, timeLimitSeconds, false);
    }
  }

  function getClientCheckersLegalMoves(grid, playerColor) {
    const moves = [];
    const captures = [];

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = grid[r][c];
        if (!piece || !piece.startsWith(playerColor)) continue;
        const isKing = piece.endsWith('k');
        const directions = isKing
          ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
          : (playerColor === 'w' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]]);

        for (const [dr, dc] of directions) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && !grid[nr][nc]) {
            const isPromotion = (playerColor === 'w' && nr === 0) || (playerColor === 'b' && nr === 7);
            moves.push({ from: { r, c }, to: { r: nr, c: nc }, isCapture: false, isKing, isPromotion });
          }
        }

        const captureDirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (const [dr, dc] of captureDirs) {
          const midR = r + dr, midC = c + dc;
          const destR = r + dr * 2, destC = c + dc * 2;
          if (destR >= 0 && destR < 8 && destC >= 0 && destC < 8) {
            const midPiece = grid[midR][midC];
            const destPiece = grid[destR][destC];
            const enemyColor = playerColor === 'w' ? 'b' : 'w';
            if (midPiece && midPiece.startsWith(enemyColor) && !destPiece) {
              const isPromotion = (playerColor === 'w' && destR === 0) || (playerColor === 'b' && destR === 7);
              captures.push({ from: { r, c }, to: { r: destR, c: destC }, captured: { r: midR, c: midC }, isCapture: true, isKing, isPromotion });
            }
          }
        }
      }
    }
    return captures.length > 0 ? captures : moves;
  }

  // -------------------------------------------------------------
  // 8. Interactive Question Modal (1-Minute Timer)
  // -------------------------------------------------------------
  function presentQuestionModal(q, timeLimitSeconds = DEFAULT_QUESTION_TIME_LIMIT, isRadar = false) {
    activeQuestion = q;
    questionSecondsRemaining = timeLimitSeconds;

    const modal = document.getElementById('gameQuestionModal');
    if (!modal) return;

    const topicBadge = document.getElementById('qModalTopic');
    const diffBadge = document.getElementById('qModalDifficulty');
    const contextCard = document.getElementById('qModalContextCard');
    const contextText = document.getElementById('qModalContextText');
    const qBody = document.getElementById('qModalQuestion');
    const optionsGrid = document.getElementById('qModalOptionsGrid');

    if (topicBadge) topicBadge.textContent = q.topic || 'Математика & Логика';
    if (diffBadge) {
      diffBadge.className = `q-difficulty-badge is-${q.difficulty}`;
      diffBadge.textContent = q.difficulty === 'hard' ? 'ҚИЫН (1 мин)' : q.difficulty === 'medium' ? 'ОРТАША (1 мин)' : 'ОҢАЙ (1 мин)';
    }

    if (q.context_text && contextCard && contextText) {
      contextCard.style.display = 'block';
      contextText.textContent = q.context_text;
    } else if (contextCard) {
      contextCard.style.display = 'none';
    }

    if (qBody) qBody.textContent = q.question;

    if (optionsGrid) {
      const keys = ['A', 'B', 'C', 'D'];
      optionsGrid.innerHTML = q.options.map((opt, idx) => `
        <button class="q-option-btn" data-index="${idx}">
          <span class="q-option-key">${keys[idx]}</span>
          <span class="q-option-text">${opt.replace(/^[A-D]\)\s*/, '')}</span>
        </button>
      `).join('');

      optionsGrid.querySelectorAll('.q-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
          submitAnswer(selectedIdx);
        });
      });
    }

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
      if (remaining <= 15) {
        barEl.style.backgroundColor = '#ef4444';
        barEl.classList.add('is-urgent-pulse');
        sfx.playTone(400, 'sine', 0.05, 0.04);
      } else if (remaining <= 30) {
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
    document.querySelectorAll('.q-option-btn').forEach(b => b.disabled = true);

    if (isWsConnected) {
      sendWs('submit_answer', {
        roomId: currentRoom.id,
        selectedOptionIndex: selectedIndex
      });
    } else {
      resolveCloudAnswer(selectedIndex);
    }
  }

  function resolveCloudAnswer(selectedIndex) {
    closeQuestionModal();
    const pending = currentRoom.pendingMove;
    if (!pending) return;

    const { moveData, question, isRadar, center } = pending;
    const isCorrect = selectedIndex === question.correct_answer;
    currentRoom.pendingMove = null;

    const myId = getMyUserId();
    const oppId = (currentRoom.host?.id === myId) ? currentRoom.guest?.id : currentRoom.host?.id;

    if (isCorrect) {
      sfx.correct();
      currentRoom.myStreak = (currentRoom.myStreak || 0) + 1;
      currentRoom.myScore = (currentRoom.myScore || 0) + (question.difficulty === 'hard' ? 30 : question.difficulty === 'medium' ? 20 : 10);

      if (currentRoom.myStreak === 3 && currentRoom.gameType === 'battleship') {
        currentRoom.radarAvailable = true;
        showToast('🎯 РАДАР БОНУСЫ ҚОЛЖЕТІМДІ!', 'success');
      }

      if (isRadar) {
        currentRoom.radarAvailable = false;
        const scanRevealed = [];
        let shipParts = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const rx = center.x + dx, ry = center.y + dy;
            if (rx >= 0 && rx < 10 && ry >= 0 && ry < 10) {
              const hasShip = Math.random() < 0.28;
              scanRevealed.push({ x: rx, y: ry, hasShip });
              if (hasShip) shipParts++;
            }
          }
        }

        const msgData = {
          gameType: 'battleship',
          playerId: myId,
          playerName: getPlatformUser()?.name || 'Сіз',
          center,
          revealed: scanRevealed,
          shipPartsCount: shipParts,
          questionExplanation: question.explanation
        };
        handleRadarExecuted(msgData);
        sendGameMsg('radar_executed', msgData);
      } else if (currentRoom.gameType === 'battleship') {
        const isHit = Math.random() < 0.42;
        const shotResult = { status: isHit ? 'hit' : 'miss', isSunk: false };

        if (!currentRoom.battleship.opponentSea) currentRoom.battleship.opponentSea = { shots: [] };
        currentRoom.battleship.opponentSea.shots.push({ x: moveData.x, y: moveData.y, result: shotResult.status });

        if (isHit) {
          currentRoom.turn = myId;
          currentRoom.isMyTurn = true;
        } else {
          currentRoom.turn = oppId;
          currentRoom.isMyTurn = false;
        }

        const msgData = {
          gameType: 'battleship',
          playerId: myId,
          playerName: getPlatformUser()?.name || 'Сіз',
          shot: { x: moveData.x, y: moveData.y, result: shotResult.status },
          shotResult,
          isCorrect: true,
          streak: currentRoom.myStreak,
          nextTurn: currentRoom.turn,
          isGameOver: false,
          questionExplanation: question.explanation
        };

        handleMoveExecuted(msgData);
        sendGameMsg('move_executed', msgData);
      } else {
        const ch = currentRoom.checkers;
        ch.board[moveData.to.r][moveData.to.c] = ch.board[moveData.from.r][moveData.from.c];
        ch.board[moveData.from.r][moveData.from.c] = null;
        if (moveData.isCapture && moveData.captured) {
          ch.board[moveData.captured.r][moveData.captured.c] = null;
        }

        currentRoom.turn = oppId;
        currentRoom.isMyTurn = false;

        const msgData = {
          gameType: 'checkers',
          playerId: myId,
          playerName: getPlatformUser()?.name || 'Сіз',
          move: moveData,
          board: ch.board,
          nextTurn: currentRoom.turn,
          isGameOver: false,
          questionExplanation: question.explanation
        };

        handleMoveExecuted(msgData);
        sendGameMsg('move_executed', msgData);
      }
    } else {
      sfx.wrong();
      currentRoom.myStreak = 0;
      currentRoom.turn = oppId;
      currentRoom.isMyTurn = false;

      const failData = {
        playerId: myId,
        playerName: getPlatformUser()?.name || 'Сіз',
        reason: selectedIndex === -1 ? 'Уақыт аяқталды (1 минут)!' : 'Қате жауап!',
        explanation: question.explanation,
        nextTurn: oppId
      };
      handleMoveFailed(failData);
      sendGameMsg('move_failed', failData);
    }

    updateArenaUI();

    if (currentRoom.guest?.id === 'bot_wnk_ai' && currentRoom.turn === 'bot_wnk_ai') {
      setTimeout(simulateAiTurn, 1500);
    }
  }

  function simulateAiTurn() {
    if (!currentRoom || currentRoom.turn !== 'bot_wnk_ai' || currentRoom.status !== 'playing') return;

    if (currentRoom.gameType === 'battleship') {
      const rx = Math.floor(Math.random() * 10);
      const ry = Math.floor(Math.random() * 10);
      const isHit = Math.random() < 0.35;
      const shotResult = { status: isHit ? 'hit' : 'miss' };

      if (!currentRoom.battleship.myFleet.shotsReceived) currentRoom.battleship.myFleet.shotsReceived = [];
      currentRoom.battleship.myFleet.shotsReceived.push({ x: rx, y: ry, result: shotResult.status });

      currentRoom.turn = isHit ? 'bot_wnk_ai' : currentRoom.myId;
      currentRoom.isMyTurn = (currentRoom.turn === currentRoom.myId);

      handleMoveExecuted({
        gameType: 'battleship',
        playerId: 'bot_wnk_ai',
        playerName: 'WNK AI Ұстаз',
        shot: { x: rx, y: ry, result: shotResult.status },
        shotResult,
        isCorrect: true,
        nextTurn: currentRoom.turn,
        isGameOver: false
      });

      if (currentRoom.turn === 'bot_wnk_ai') {
        setTimeout(simulateAiTurn, 1500);
      }
    } else {
      currentRoom.turn = currentRoom.myId;
      currentRoom.isMyTurn = true;
      updateArenaUI();
    }
  }

  function closeQuestionModal() {
    if (questionTimerInterval) clearInterval(questionTimerInterval);
    const modal = document.getElementById('gameQuestionModal');
    if (modal) modal.classList.remove('is-open');
    activeQuestion = null;
  }

  function showOpponentAnsweringBanner(name, difficulty, time) {
    showToast(`⏳ ${name || 'Қарсылас'} сұраққа жауап беруде (${time}с)...`, 'info');
  }

  function handleMoveExecuted(data) {
    const myId = getMyUserId();

    if (data.isCorrect) {
      sfx.correct();
      showToast(`ДҰРЫС ЖАУАП! ${data.playerName} жүріс жасады.`, 'success');
      recordPlayerStat(null, 15, true);
    }

    if (data.gameType === 'battleship') {
      if (data.shotResult?.status === 'hit') {
        sfx.hit();
        showToast(data.shotResult.isSunk ? `КЕМЕ БАТТЫ! (${data.shotResult.shipName || ''})` : `ОҚ ТИДІ! Жүріс жалғасады!`, 'success');
      } else {
        sfx.miss();
        showToast('Оқ далаға кетті. Кезек ауысты.', 'info');
      }

      if (currentRoom && currentRoom.battleship) {
        if (data.playerId === myId) {
          if (!currentRoom.battleship.opponentSea) currentRoom.battleship.opponentSea = { shots: [] };
          currentRoom.battleship.opponentSea.shots.push(data.shot);
        } else {
          if (!currentRoom.battleship.myFleet) currentRoom.battleship.myFleet = { shotsReceived: [] };
          currentRoom.battleship.myFleet.shotsReceived.push(data.shot);
        }
      }
    } else if (data.gameType === 'checkers') {
      if (currentRoom && currentRoom.checkers && data.board) {
        currentRoom.checkers.board = data.board;
      }
    }

    if (currentRoom && data.nextTurn) {
      currentRoom.turn = data.nextTurn;
      currentRoom.isMyTurn = (currentRoom.turn === myId);
    }

    updateArenaUI();

    if (data.isGameOver) {
      setTimeout(() => {
        showGameOverModal(data.winner, 'Матч аяқталды!');
      }, 1000);
    }
  }

  function handleMoveFailed(data) {
    const myId = getMyUserId();
    sfx.wrong();
    showToast(`ҚАТЕ ЖАУАП! ${data.reason} Кезек қарсыласқа өтті.`, 'error');

    if (data.explanation) {
      showToast(`Түсіндірме: ${data.explanation}`, 'info');
    }

    if (currentRoom && data.nextTurn) {
      currentRoom.turn = data.nextTurn;
      currentRoom.isMyTurn = (currentRoom.turn === myId);
      updateArenaUI();
    }
  }

  function handleRadarExecuted(data) {
    sfx.radar();
    showToast(`🎯 РАДАР СӘТТІ ІСКЕ ҚОСЫЛДЫ! Анықталған кеме бөлшектері: ${data.shipPartsCount}`, 'success');

    if (currentRoom && currentRoom.battleship) {
      if (!currentRoom.battleship.opponentSea) currentRoom.battleship.opponentSea = { radarRevealed: [] };
      if (!currentRoom.battleship.opponentSea.radarRevealed) currentRoom.battleship.opponentSea.radarRevealed = [];
      if (Array.isArray(data.revealed)) {
        currentRoom.battleship.opponentSea.radarRevealed.push(...data.revealed);
      }
      currentRoom.radarAvailable = false;
      renderBattleshipBoards();
    }
  }

  function showGameOverModal(winnerId, message) {
    const myId = getMyUserId();
    const isWinner = winnerId === myId;
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
    modal.classList.add('is-open');
  }

  function closeGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    if (modal) modal.classList.remove('is-open');
    exitArenaToLobby();
  }

  // -------------------------------------------------------------
  // 9. Room Creation, Joining, and Code Sharing
  // -------------------------------------------------------------

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
      if (btnA) btnA.addEventListener('click', () => startSoloAiGame('battleship'));
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
          <img src="${r.host?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + r.host?.id}" class="room-host-avatar" alt="">
          <span class="room-host-name">${r.host?.username || 'Ойыншы'}</span>
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

  function handleCreateRoomSubmit() {
    const gameType = document.querySelector('input[name="roomGameType"]:checked')?.value || 'battleship';
    const topicInput = document.getElementById('roomTopicInput')?.value.trim();
    const topic = topicInput || 'Математика & Логика';
    const opponentMode = document.querySelector('input[name="roomOpponentMode"]:checked')?.value || 'pvp';
    const isVsAi = opponentMode === 'ai';

    const user = requireAuth('бөлме ашу');
    if (!user) return;

    if (isVsAi) {
      startSoloAiGame(gameType, topic);
      return;
    }

    const roomId = 'WNK-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    const questions = getQuestionsForTopic(topic);

    const roomObj = {
      id: roomId,
      gameType,
      topic,
      status: 'waiting',
      isVsAi: false,
      turn: user.id,
      myId: user.id,
      isMyTurn: true,
      myStreak: 0,
      radarAvailable: false,
      myScore: 0,
      opponentScore: 0,
      host: { id: user.id, username: user.name || 'Ойыншы 1', avatar: user.avatar },
      guest: null,
      questions
    };

    if (gameType === 'battleship') {
      roomObj.battleship = {
        myFleet: { ships: [], shotsReceived: [] },
        opponentSea: { shots: [], sunkShips: [], radarRevealed: [] }
      };
    } else {
      roomObj.checkers = {
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
        myColor: 'w'
      };
    }

    currentRoom = roomObj;

    if (isWsConnected) {
      sendWs('create_room', {
        host: user,
        gameType,
        topic,
        isVsAi: false
      });
    }

    const sb = window.supabaseClient;
    if (sb) {
      sb.from('wnk_active_rooms').upsert({
        id: roomId,
        game_type: gameType,
        topic,
        is_vs_ai: false,
        status: 'waiting',
        host_id: user.id,
        host_name: user.name || 'Ойыншы 1',
        host_avatar: user.avatar,
        turn: user.id,
        state_json: { questionsCount: 25 },
        updated_at: new Date().toISOString()
      }).then(() => refreshLobbyFromSupabase());

      subscribeToCloudRoom(roomId);
    }

    showArenaView(currentRoom);
    showToast(`Бөлме ашылды! Код: ${roomId}`, 'success');
  }

  async function joinRoomById(roomId) {
    if (!roomId) return;
    const cleanId = String(roomId).trim().toUpperCase();
    const user = requireAuth('бөлмеге қосылу');
    if (!user) return;

    if (isWsConnected) {
      sendWs('join_room', {
        roomId: cleanId,
        guest: { id: user.id, username: user.name || 'Ойыншы 2', avatar: user.avatar }
      });
    }

    const sb = window.supabaseClient;
    if (sb) {
      const { data: roomData, error } = await sb
        .from('wnk_active_rooms')
        .select('*')
        .eq('id', cleanId)
        .single();

      if (error || !roomData) {
        if (!isWsConnected) showToast('Бөлме табылмады немесе жабылған', 'error');
        return;
      }

      if (roomData.status !== 'waiting' && roomData.guest_id && roomData.guest_id !== user.id) {
        showToast('Бұл бөлме толы немесе ойын басталып кеткен', 'info');
        return;
      }

      const nextStatus = roomData.game_type === 'battleship' ? 'placing' : 'playing';
      await sb.from('wnk_active_rooms').update({
        guest_id: user.id,
        guest_name: user.name || 'Ойыншы 2',
        guest_avatar: user.avatar,
        status: nextStatus,
        updated_at: new Date().toISOString()
      }).eq('id', cleanId);

      const questions = getQuestionsForTopic(roomData.topic);

      const guestRoom = {
        id: cleanId,
        gameType: roomData.game_type,
        topic: roomData.topic,
        status: nextStatus,
        turn: roomData.host_id,
        myId: user.id,
        isMyTurn: (roomData.host_id === user.id),
        myStreak: 0,
        radarAvailable: false,
        myScore: 0,
        opponentScore: 0,
        host: { id: roomData.host_id, username: roomData.host_name, avatar: roomData.host_avatar },
        guest: { id: user.id, username: user.name || 'Ойыншы 2', avatar: user.avatar },
        questions
      };

      if (roomData.game_type === 'battleship') {
        guestRoom.battleship = {
          myFleet: { ships: [], shotsReceived: [] },
          opponentSea: { shots: [], sunkShips: [], radarRevealed: [] }
        };
      } else {
        guestRoom.checkers = {
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
          myColor: 'b'
        };
      }

      currentRoom = guestRoom;

      subscribeToCloudRoom(cleanId, () => {
        broadcastCloudEvent('guest_joined', { guest: guestRoom.guest });
      });

      showArenaView(currentRoom);
      showToast(`Бөлмеге қосылдыңыз: ${cleanId}`, 'success');
    }
  }

  function startSoloAiGame(selectedGameType = 'battleship', selectedTopic = 'Математика & Логика') {
    const user = getPlatformUser();
    const myId = user.id;

    const aiRoom = {
      id: 'AI-' + Math.floor(1000 + Math.random() * 9000),
      gameType: selectedGameType,
      topic: selectedTopic,
      status: selectedGameType === 'battleship' ? 'placing' : 'playing',
      turn: myId,
      myId: myId,
      isMyTurn: true,
      myStreak: 0,
      radarAvailable: false,
      myScore: 0,
      opponentScore: 0,
      host: { id: myId, username: user.name || 'Ойыншы', avatar: user.avatar },
      guest: { id: 'bot_wnk_ai', username: 'WNK AI Ұстаз', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=wnkai_master', isBot: true },
      questions: getQuestionsForTopic(selectedTopic)
    };

    if (selectedGameType === 'battleship') {
      aiRoom.battleship = {
        myFleet: { ships: [], shotsReceived: [] },
        opponentSea: { shots: [], sunkShips: [], radarRevealed: [] }
      };
    } else {
      aiRoom.checkers = {
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
        myColor: 'w'
      };
    }

    currentRoom = aiRoom;
    showArenaView(currentRoom);
    showToast('WNK AI Ұстазбен жаттығу матчы басталды!', 'info');
  }

  function copyRoomCodeOrLink() {
    if (!currentRoom) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}#room=${currentRoom.id}`;
    const textToCopy = `${shareUrl}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Бөлме сілтемесі көшірілді! (Код: ${currentRoom.id})`, 'success');
      }).catch(() => {
        prompt('Бөлме сілтемесін көшіріп алыңыз:', textToCopy);
      });
    } else {
      prompt('Бөлме сілтемесін көшіріп алыңыз:', textToCopy);
    }
  }

  function checkUrlRoomHash() {
    const hash = window.location.hash;
    const match = hash.match(/room=([A-Za-z0-9_-]+)/);
    if (match && match[1]) {
      const targetRoomId = match[1].toUpperCase();
      setTimeout(() => {
        if (confirm(`«${targetRoomId}» бөлмесіне қосылғыңыз келе ме?`)) {
          joinRoomById(targetRoomId);
        }
      }, 500);
    }
  }

  // -------------------------------------------------------------
  // 10. Profile & Supabase Stats Sync
  // -------------------------------------------------------------

  function renderPlayerProfile() {
    const user = getPlatformUser();
    const guestCard = document.getElementById('gamingGuestCard');
    const userCard = document.getElementById('gamingUserCard');
    if (!guestCard || !userCard) return;

    const storedAuth = localStorage.getItem('wnk_auth_user');
    if (!storedAuth) {
      guestCard.style.display = 'flex';
      userCard.style.display = 'none';
      return;
    }

    guestCard.style.display = 'none';
    userCard.style.display = 'flex';

    const avatarEl = document.getElementById('gamingUserAvatar');
    const nameEl = document.getElementById('gamingUserName');
    const statsEl = document.getElementById('gamingUserStats');

    if (avatarEl) avatarEl.src = user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.id}`;
    if (nameEl) nameEl.textContent = user.name || user.email || 'Оқушы';

    const sb = window.supabaseClient;
    if (sb && user.id) {
      sb.from('wnk_gaming_profiles').select('*').eq('user_id', user.id).single()
        .then(({ data }) => {
          if (data && statsEl) {
            statsEl.innerHTML = `
              <span>Жеңістер: <strong>${data.wins || 0}</strong></span>
              <span>Ұпай: <strong>${data.score || 0}</strong></span>
              <span>Серия: <strong>🔥 ${data.highest_streak || 0}</strong></span>
            `;
          }
        }).catch(() => {});
    }
  }

  function recordPlayerStat(isWinner, scoreAdd = 10, isCorrect = false) {
    const user = getPlatformUser();
    const sb = window.supabaseClient;
    if (!user || !sb || !localStorage.getItem('wnk_auth_user')) return;

    sb.from('wnk_gaming_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()
      .then(({ data }) => {
        const cur = data || { wins: 0, losses: 0, score: 0, total_matches: 0, highest_streak: 0 };
        const updates = {
          user_id: user.id,
          username: user.name || 'Оқушы',
          score: (cur.score || 0) + scoreAdd,
          updated_at: new Date().toISOString()
        };
        if (isWinner === true) {
          updates.wins = (cur.wins || 0) + 1;
          updates.total_matches = (cur.total_matches || 0) + 1;
        } else if (isWinner === false) {
          updates.losses = (cur.losses || 0) + 1;
          updates.total_matches = (cur.total_matches || 0) + 1;
        }
        sb.from('wnk_gaming_profiles').upsert(updates).then(() => renderPlayerProfile());
      })
      .catch(() => {});
  }

  function appendChatMessage(data) {
    const stream = document.getElementById('arenaChatStream');
    if (!stream) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'arena-chat-bubble';
    msgEl.innerHTML = `<strong>${data.senderName || 'Ойыншы'}:</strong> <span>${data.text}</span>`;
    stream.appendChild(msgEl);
    stream.scrollTop = stream.scrollHeight;
  }

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

  // -------------------------------------------------------------
  // 11. Event Listeners & Bootstrapping
  // -------------------------------------------------------------

  function setupEventListeners() {
    const btnCreate = document.getElementById('btnOpenCreateModal');
    if (btnCreate) btnCreate.addEventListener('click', openCreateRoomModal);

    const btnAi = document.getElementById('btnOpenAiPractice');
    if (btnAi) btnAi.addEventListener('click', () => startSoloAiGame('battleship'));

    const btnCloseCreate = document.getElementById('btnCloseCreateModal');
    if (btnCloseCreate) btnCloseCreate.addEventListener('click', closeCreateRoomModal);

    const btnSubmitCreate = document.getElementById('btnSubmitCreateRoom');
    if (btnSubmitCreate) btnSubmitCreate.addEventListener('click', handleCreateRoomSubmit);

    // Join by Code input & button
    const btnJoinCode = document.getElementById('btnJoinByCode');
    const inputJoinCode = document.getElementById('inputJoinByCode');
    if (btnJoinCode && inputJoinCode) {
      btnJoinCode.addEventListener('click', () => {
        joinRoomById(inputJoinCode.value);
      });
      inputJoinCode.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') joinRoomById(inputJoinCode.value);
      });
    }

    // Copy Code / Link Button
    const btnCopyCode = document.getElementById('btnCopyRoomCode');
    if (btnCopyCode) btnCopyCode.addEventListener('click', copyRoomCodeOrLink);

    // Battleship Auto Place
    const btnAutoPlace = document.getElementById('btnBattleshipAutoPlace');
    if (btnAutoPlace) btnAutoPlace.addEventListener('click', handleAutoPlaceFleet);

    // Battleship Radar Button
    const btnRadar = document.getElementById('btnBattleshipRadar');
    if (btnRadar) {
      btnRadar.addEventListener('click', () => {
        if (!currentRoom.radarAvailable || !currentRoom.isMyTurn) return;
        isRadarAimingMode = true;
        document.getElementById('arenaBattleshipView')?.classList.add('is-radar-targeting');
        showToast('🎯 РАДАР РЕЖИМІ: Қарсылас теңізіндегі 3x3 аумақтың ортасын басыңыз!', 'info');
      });
    }

    // Surrender / Exit Button
    const btnSurrender = document.getElementById('btnArenaSurrender');
    if (btnSurrender) btnSurrender.addEventListener('click', exitArenaToLobby);

    // Game Over Buttons
    const btnGoRematch = document.getElementById('goModalRematch');
    if (btnGoRematch) {
      btnGoRematch.addEventListener('click', () => {
        closeGameOverModal();
        if (currentRoom?.topic) startSoloAiGame(currentRoom.gameType, currentRoom.topic);
      });
    }

    const btnGoExit = document.getElementById('goModalExit');
    if (btnGoExit) btnGoExit.addEventListener('click', closeGameOverModal);

    // Quick Emotes
    document.querySelectorAll('.btn-chat-emote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.textContent.trim();
        if (currentRoom) {
          sendGameMsg('chat_message', {
            roomId: currentRoom.id,
            text,
            senderName: getPlatformUser()?.name || 'Сіз'
          });
          appendChatMessage({ senderName: getPlatformUser()?.name || 'Сіз', text });
        }
      });
    });

    // Mute Sound Toggle
    const btnMute = document.getElementById('btnGamingMute');
    if (btnMute) {
      btnMute.addEventListener('click', () => {
        sfx.muted = !sfx.muted;
        localStorage.setItem('wnk_sound_muted', sfx.muted ? 'true' : 'false');
        btnMute.textContent = sfx.muted ? '🔇' : '🔊';
      });
    }

    // Keyboard Shortcuts for Question Modal (1, 2, 3, 4)
    window.addEventListener('keydown', (e) => {
      if (!activeQuestion) return;
      const key = e.key.toUpperCase();
      if (['1', 'A'].includes(key)) submitAnswer(0);
      else if (['2', 'B'].includes(key)) submitAnswer(1);
      else if (['3', 'C'].includes(key)) submitAnswer(2);
      else if (['4', 'D'].includes(key)) submitAnswer(3);
    });

    // Topic chips in create modal
    document.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        const input = document.getElementById('roomTopicInput');
        if (input) input.value = chip.getAttribute('data-topic') || 'Математика & Логика';
      });
    });
  }

  function initGamingUI() {
    setupEventListeners();
    initConnection();
    renderPlayerProfile();
    checkUrlRoomHash();
  }

  window.addEventListener('wnk_auth_changed', (e) => {
    renderPlayerProfile();
    const u = e.detail?.user;
    if (u && isWsConnected) {
      sendWs('auth_identify', { user: u });
    }
  });

  window.WnkGaming = {
    init: initGamingUI,
    openCreateModal: openCreateRoomModal,
    joinRoom: joinRoomById,
    startAiGame: startSoloAiGame,
    sfx
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGamingUI);
  } else {
    initGamingUI();
  }

})();
