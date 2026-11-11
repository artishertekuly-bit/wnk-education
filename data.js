/**
 * WNK Education - 97+ Curated Resources & Playbooks Data
 * Fully enriched with authentic commands, specs, and execution instructions.
 */
var WNK_RESOURCES = window.WNK_RESOURCES = [
  {
    "id": 1,
    "title": "Claude-тың ең үздік 5 пайдалы скиллі (r/claude іріктемесі)",
    "orig_title": "The 5 Claude skills I kept from r/claude",
    "category": "Жүйелер мен Агенттер",
    "date": "5 Nov 2026",
    "excerpt": "Reddit қауымдастығынан жиналған ең пайдалы 5 ашық скилл: /bro, /grill-me, /humanizer, /impeccable және /diagram-design. Әрқайсысының мүмкіндіктері мен орнату жолы.",
    "slug": "reddit-claude-skills",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude-тың ең үздік 5 скиллі I kept from r/claude\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude-тың ең үздік 5 скиллі I kept from r/claude\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Бұл жинақта Claude Code және Claude Chat үшін ең тиімді скиллдер жинақталған. Диаграмма сызу, кодты адам түсінетін деңгейде рефакторинг жасау және қатаң тексеруден өткізу құралдары.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name reddit-claude-skills --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Claude-тың ең үздік 5 пайдалы скиллі (r/claude іріктемесі)\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 2,
    "title": "Reels үшін 6 Claude Code анимациялық скиллі (видеосыз)",
    "orig_title": "6 Claude Code animation skills for reels, no footage needed",
    "category": "Видео және Монтаж",
    "date": "1 Nov 2026",
    "excerpt": "Claude Code арқылы тікелей анимация жасауға арналған 6 тегін скилл: /zach-d-films, /stick-figure, /minimalistic-graphics, /map-route, /breakdown және /graph.",
    "slug": "animation-skills",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Reels үшін 6 Claude Code анимациялық скиллі for reels, no footage needed\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Reels үшін 6 Claude Code анимациялық скиллі for reels, no footage needed\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Камера мен түсірілімсіз-ақ жоғары деңгейлі вирустық анимациялық видеолар құрастыруға арналған дайын скиллдер жиынтығы.",
    "install_cmd": "npm install -g @remotion/cli\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "npx remotion render src/index.ts ReelsComposition out/reels_animation.mp4 --props='{\"text\":\"WNK Education\",\"theme\":\"swiss\"}'",
    "reqs": "Remotion 4.0, React 19, Node.js 20+, ffmpeg",
    "prompt_spec": "// WNK Remotion Code Animation Spec: Reels үшін 6 Claude Code анимациялық скиллі (видеосыз)\n1. Кадр құрылымы: 1080x1920 (9:16), 30 fps, 15 секунд ұзақтық.\n2. Анимация қисықтары: spring({ damping: 12, mass: 0.5, stiffness: 100 }) серіппелі динамикасы.\n3. Швейцариялық типографика: Ірі қара шрифт, жылы ақ фон (#FAF9F3), акцентті көк (#1F5BFF) элементтер.\n4. Экспорт: ffmpeg h264_videotoolbox арқылы жедел рендерлеу."
  },
  {
    "id": 3,
    "title": "Фотосуреттерден саяхаттарыңыздың 3D картасын жасау",
    "orig_title": "Map everywhere you’ve been from your camera roll with Claude",
    "category": "Промпттар",
    "date": "1 Nov 2026",
    "excerpt": "Барлық фотоларыңыздағы геолокация деректерін оқып, саяхаттарыңыздың интерактивті 3D глобус картасын сызатын арнайы промпт.",
    "slug": "map-camera-roll",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Map everywhere you’ve been from your camera roll with Claude\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Map everywhere you’ve been from your camera roll with Claude\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Claude фотолардың EXIF метадеректерін талдап, сіз барған барлық қалалар мен орындарды әсерлі анимациялық 3D картаға айналдырады.",
    "install_cmd": "brew install exiftool\npip install pillow folium piexif geopy\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m content_skills.gallery_mapper --input ~/Pictures/Vacation --output ~/Desktop/3D_Trip_Map.html",
    "reqs": "exiftool, Python 3.10+, Mapbox API / Leaflet, Pillow",
    "prompt_spec": "// WNK Geo-Visual Extraction Spec: Фотосуреттерден саяхаттарыңыздың 3D картасын жасау\n1. EXIF деректерін оқу: Фотосуреттерден GPS Latitude, Longitude, Date taken, Camera lens параметрлерін алу.\n2. Маршрут құру: Нүктелерді хронологиялық ретпен біріктіріп, 3D биіктік сызығын (Elevation trajectory) есептеу.\n3. Интерактивті карта: Leaflet / Mapbox көмегімен саяхаттың әр қадамына сәйкес фото-карточкалар мен видео-слайдтар генерациялау."
  },
  {
    "id": 4,
    "title": "Claude есептік жазбасының жасырын рейтингі: толық тізім",
    "orig_title": "Claude’s secret account score: the full list",
    "category": "Баптау нұсқаулықтары",
    "date": "31 Oct 2026",
    "excerpt": "Жүйелік шектеулерге әсер ететін барлық ішкі факторлар мен аккаунт рейтингін арттыру тәсілдері.",
    "slug": "claude-score",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude’s secret account score: the full list\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude’s secret account score: the full list\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Сіздің аккаунтыңыздың сенімділік деңгейі мен жылдамдығын арттыруға арналған практикалық баптаулар.",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide claude-score --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Claude есептік жазбасының жасырын рейтингі: толық тізім\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 5,
    "title": "Смартфон галереясын AI арқылы реттеу және сұрыптау",
    "orig_title": "Sort your camera roll into folders with Claude",
    "category": "Промпттар",
    "date": "31 Oct 2026",
    "excerpt": "Мыңдаған фотоларды құжаттар, чектер, саяхат және жеке естеліктер бойынша санаттарға автоматты бөлетін жүйе.",
    "slug": "sort-camera-roll",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Sort your camera roll into folders with Claude\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Sort your camera roll into folders with Claude\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Галереядағы артық скриншоттар мен сапасыз фотоларды тазалап, маңызды суреттерді каталогқа орналастыру алгоритмі.",
    "install_cmd": "brew install exiftool\npip install pillow folium piexif geopy\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m content_skills.gallery_mapper --input ~/Pictures/Vacation --output ~/Desktop/3D_Trip_Map.html",
    "reqs": "exiftool, Python 3.10+, Mapbox API / Leaflet, Pillow",
    "prompt_spec": "// WNK Geo-Visual Extraction Spec: Смартфон галереясын AI арқылы реттеу және сұрыптау\n1. EXIF деректерін оқу: Фотосуреттерден GPS Latitude, Longitude, Date taken, Camera lens параметрлерін алу.\n2. Маршрут құру: Нүктелерді хронологиялық ретпен біріктіріп, 3D биіктік сызығын (Elevation trajectory) есептеу.\n3. Интерактивті карта: Leaflet / Mapbox көмегімен саяхаттың әр қадамына сәйкес фото-карточкалар мен видео-слайдтар генерациялау."
  },
  {
    "id": 6,
    "title": "Бір бейнеклипті ондаған Reels-ке бөлетін 6 монтаж скиллі",
    "orig_title": "6 Claude Code editing skills that turn one clip into reels",
    "category": "Видео және Монтаж",
    "date": "29 Oct 2026",
    "excerpt": "Ұзақ сұхбатты немесе дәрісті автоматты түрде субтитрлерімен бірге трендті қысқа видеоларға айналдыру.",
    "slug": "editing-skills",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 6 Claude Code монтаж скиллі: 1 клипті reels-ке айналдыру that turn one clip into reels\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 6 Claude Code монтаж скиллі: 1 клипті reels-ке айналдыру that turn one clip into reels\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Claude Code көмегімен субтитр қосу, динамикалық зумдар, sound-design және маңызды сәттерді анықтау жүйесі.",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug editing-skills --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: Бір бейнеклипті ондаған Reels-ке бөлетін 6 монтаж скиллі\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 7,
    "title": "Claude Code арқылы жеке AI монтаж студиясын құру",
    "orig_title": "Build your own AI editing studio with Claude Code",
    "category": "Видео және Монтаж",
    "date": "28 Oct 2026",
    "excerpt": "Кәсіби монтаждау процесін толық автоматтандыратын 5 қуатты промпт пен командалар жиынтығы.",
    "slug": "editing-studio",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude Code көмегімен жеке AI монтаж студиясын құру with Claude Code\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude Code көмегімен жеке AI монтаж студиясын құру with Claude Code\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Түсірілген шикізаттан бастап соңғы түс коррекциясына дейінгі толық өндірістік пайплайн.",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug editing-studio --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: Claude Code арқылы жеке AI монтаж студиясын құру\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 8,
    "title": "Instagram карусельдерінің 10 түрі және 30 нақты мысал",
    "orig_title": "The 10 types of Instagram carousels, with 30 real examples",
    "category": "Баптау нұсқаулықтары",
    "date": "28 Oct 2026",
    "excerpt": "Қаралым мен сақтауларды арттыратын карусель құрылымдары, шаблондар мен дизайн формулалары.",
    "slug": "carousel-types",
    "tags": [
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Instagram карусельдерінің 10 түрі және мысалдары, with 30 real examples\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Instagram карусельдерінің 10 түрі және мысалдары, with 30 real examples\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Әр түрге сай мәтіндік құрылым, көрнекі визуалдар және конверсияны арттыратын соңғы слайд CTA үлгілері.",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark carousel-types.md -o carousel-types_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: Instagram карусельдерінің 10 түрі және 30 нақты мысал\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 9,
    "title": "Anatomy: кез келген нәрсенің жұмысын сызып беретін скилл",
    "orig_title": "Anatomy: the free Claude skill that draws how anything works",
    "category": "Жүйелер мен Агенттер",
    "date": "28 Oct 2026",
    "excerpt": "Күрделі механизмдер, алгоритмдер мен процестерді түсінікті техникалық инфографикаға айналдыру.",
    "slug": "anatomy",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Anatomy: the free Claude skill that draws how anything works\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Anatomy: the free Claude skill that draws how anything works\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "SVG және Canvas арқылы жүйенің ішкі анатомиясын, компоненттер байланысын интерактивті көрсетеді.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name anatomy --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Anatomy: кез келген нәрсенің жұмысын сызып беретін скилл\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 10,
    "title": "Jev жарнамалық зерттеуді жеңілдетеді жұмысты жеңілдететін құпия тәсілі.",
    "orig_title": "Jev makes ad research feel like cheating.",
    "category": "Жүйелер мен Агенттер",
    "date": "27 Oct 2026",
    "excerpt": "The full Ad Lab app: Jev reads creative images directly, classifies seven dimensions and links patterns to real ad examples. Nativ…",
    "slug": "ad-lab",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Jev makes ad research feel like cheating.\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Jev makes ad research feel like cheating.\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "The full Ad Lab app: Jev reads creative images directly, classifies seven dimensions and links patterns to real ad examples. Nativ…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name ad-lab --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Jev жарнамалық зерттеуді жеңілдетеді жұмысты жеңілдететін құпия тәсілі.\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 11,
    "title": "Claude мүмкіндігін максимум пайдалану (Claude-maxxing баптауы)",
    "orig_title": "The art of Claude maxxing: the full setup",
    "category": "Баптау нұсқаулықтары",
    "date": "24 Oct 2026",
    "excerpt": "Контекст, скиллдер, MCP серверлер және жадты тиімді басқарудың 5 деңгейі мен 36 тәсілі.",
    "slug": "claude-maxxing",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude мүмкіндігін максимум пайдалану: толық баптау\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude мүмкіндігін максимум пайдалану: толық баптау\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Claude-тың толық қуатын ашып, лимиттерге тірелмей жұмыс істеудің супер-инженерлік нұсқаулығы.",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide claude-maxxing --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Claude мүмкіндігін максимум пайдалану (Claude-maxxing баптауы)\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 12,
    "title": "29 AI tools: promise vs reality (Oct 2026)",
    "orig_title": "29 AI tools: promise vs reality (Oct 2026)",
    "category": "Баптау нұсқаулықтары",
    "date": "22 Oct 2026",
    "excerpt": "29 AI tools and agents scored out of 5 on what they promised and what they actually deliver. Perplexity Computer, OpenClaw, ChatGP…",
    "slug": "promise-vs-reality",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 29 AI tools: promise vs reality (Oct 2026)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 29 AI tools: promise vs reality (Oct 2026)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "29 AI tools and agents scored out of 5 on what they promised and what they actually deliver. Perplexity Computer, OpenClaw, ChatGP…",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide promise-vs-reality --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: 29 AI tools: promise vs reality (Oct 2026)\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 13,
    "title": "10,743 вирустық карусельді талдау нәтижесінде анықталған ережелер",
    "orig_title": "What viral carousels have in common — the full list (10,743 analysed)",
    "category": "Баптау нұсқаулықтары",
    "date": "12 Oct 2026",
    "excerpt": "Миллиондық қаралым жинаған посттардың ортақ заңдылықтары, тақырыпшалары және қаріп комбинациялары.",
    "slug": "viral-carousels",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: What viral carousels have in common — the full list (10,743 analysed)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: What viral carousels have in common — the full list (10,743 analysed)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Үздік сақталым көрсеткішіне қол жеткізудің нақты статистикалық деректері мен шаблондары.",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark viral-carousels.md -o viral-carousels_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: 10,743 вирустық карусельді талдау нәтижесінде анықталған ережелер\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 14,
    "title": "OpenAI Decisions жарнамалық зерттеуді жеңілдетеді жұмысты жеңілдететін құпия тәсілі.",
    "orig_title": "OpenAI Decisions makes ad research feel like cheating.",
    "category": "Жүйелер мен Агенттер",
    "date": "11 Oct 2026",
    "excerpt": "Get the visual ad research app: OpenAI Decisions reads creative images and sampled video frames, classifies seven dimensions, comp…",
    "slug": "openai-decisions-marketing",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: OpenAI Decisions makes ad research feel like cheating.\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: OpenAI Decisions makes ad research feel like cheating.\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Get the visual ad research app: OpenAI Decisions reads creative images and sampled video frames, classifies seven dimensions, comp…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name openai-decisions-marketing --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: OpenAI Decisions жарнамалық зерттеуді жеңілдетеді жұмысты жеңілдететін құпия тәсілі.\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 15,
    "title": "Қымбат ақылы сервистерді алмастыратын 18 тегін GitHub жобасы",
    "orig_title": "18 paid apps you can replace with free GitHub projects",
    "category": "Баптау нұсқаулықтары",
    "date": "5 Oct 2026",
    "excerpt": "Notion, Loom, Typeform, Canva және Zapier сияқты сервистердің ашық бастапқы кодты тегін аналогтары.",
    "slug": "free-github-alternatives",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 18 paid apps you can replace with free GitHub projects\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 18 paid apps you can replace with free GitHub projects\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Өз серверіңізде (self-hosted) оңай іске қосылатын, толықтай тегін және құпиялылықты қамтамасыз ететін құралдар.",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide free-github-alternatives --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Қымбат ақылы сервистерді алмастыратын 18 тегін GitHub жобасы\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 16,
    "title": "AI Агенттер бойынша толық энциклопедия және нұсқаулық",
    "orig_title": "The AI agents guide",
    "category": "Баптау нұсқаулықтары",
    "date": "2 Oct 2026",
    "excerpt": "Көп агентті жүйелер (Multi-Agent Swarms), құралдарды шақыру (tool calling) және дербес тапсырма орындау.",
    "slug": "ai-agents",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI агенттер бойынша толық нұсқаулық\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI агенттер бойынша толық нұсқаулық\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Қарапайым чат-боттардан нақты тапсырмаларды өздігінен орындайтын автономды агенттерге көшу қадамдары.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name ai-agents --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: AI Агенттер бойынша толық энциклопедия және нұсқаулық\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 17,
    "title": "ChatGPT-ді толыққанды видео монтаждау құралына айналдыру",
    "orig_title": "Turn your ChatGPT dot into a video editor",
    "category": "Видео және Монтаж",
    "date": "1 Oct 2026",
    "excerpt": "Мәтіндік нұсқаулар арқылы видео кесу, дыбыс өңдеу және эффектілер қосу процесі.",
    "slug": "dot-video-editor",
    "tags": [
      "ChatGPT",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: ChatGPT арқылы кәсіби видео монтаж жасау\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: ChatGPT арқылы кәсіби видео монтаж жасау\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "FFmpeg және ChatGPT интеграциясы арқылы кодсыз бейнебаян монтаждау шеберлігі.",
    "install_cmd": "brew install ffmpeg node\nexport GROQ_API_KEY=gsk_your_groq_key\ngit clone https://github.com/artishertekuly-bit/claude-editing-skills.git ~/claude-editing-skills\ncd ~/claude-editing-skills && ./install.sh",
    "exec_cmd": "/trial-reels raw_interview.mp4 --subtitles --punch-ins --lang kk --output out/final_reel.mp4",
    "reqs": "ffmpeg, Groq Whisper API, Python 3.10+, HyperFrames",
    "prompt_spec": "// WNK Video Editing Engine Spec: ChatGPT-ді толыққанды видео монтаждау құралына айналдыру\n1. Дыбысты мәтінге айналдыру: Groq Whisper Large v3 (0.3 сек/минут жылдамдық, қазақ тіліндегі дәлдік 98%).\n2. Динамикалық кадрлеу (Smart Punch-ins): Спикердің маңызды сөздерінде 1.15x масштабтау және бетті ортаға келтіру.\n3. Субтитр стилі: Space Grotesk / Inter қалың шрифті, сары екпінді сөздер, жасыл белсенді субтитр.\n4. B-roll және SFX: Әр 3-4 секунд сайын контекстік сурет немесе жеңіл Whoosh дыбыстық эффектісі."
  },
  {
    "id": 18,
    "title": "Қосымшаңызды қолданушыларға ұсынбас бұрын тестілеу",
    "orig_title": "Test your app before your users do",
    "category": "Баптау нұсқаулықтары",
    "date": "30 Sept 2026",
    "excerpt": "The Claude Code + Greptile loop for anything you build with AI. Setup in 10 minutes, copy-paste prompts, review rules, a free ship…",
    "slug": "test-before-you-ship",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Қосымшаңызды қолданушыларға ұсынбас бұрын тестілеу\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Қосымшаңызды қолданушыларға ұсынбас бұрын тестілеу\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "The Claude Code + Greptile loop for anything you build with AI. Setup in 10 minutes, copy-paste prompts, review rules, a free ship…",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide test-before-you-ship --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Қосымшаңызды қолданушыларға ұсынбас бұрын тестілеу\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 19,
    "title": "Jev жарнамалық зерттеуді жеңілдетеді жұмысты жеңілдететін құпия тәсілі",
    "orig_title": "Jev makes ad research feel like cheating",
    "category": "Жүйелер мен Агенттер",
    "date": "30 Sept 2026",
    "excerpt": "Get the ad research app: a no-key simulation, free local OCR, seven Jev labels, an optional Meta Ad Library connector and original…",
    "slug": "jev-marketing",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Jev makes ad research feel like cheating\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Jev makes ad research feel like cheating\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Get the ad research app: a no-key simulation, free local OCR, seven Jev labels, an optional Meta Ad Library connector and original…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name jev-marketing --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Jev жарнамалық зерттеуді жеңілдетеді жұмысты жеңілдететін құпия тәсілі\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 20,
    "title": "Күнделікті қолданатын ең үздік AI құралдар рейтингі (2026)",
    "orig_title": "The AI tools I actually use (Sep 2026)",
    "category": "Баптау нұсқаулықтары",
    "date": "29 Sept 2026",
    "excerpt": "Маркетингтік шусыз, тек нақты пайда әкелетін және уақытты 10 есе үнемдейтін құралдар іріктемесі.",
    "slug": "ai-tools-i-use",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: The AI tools I actually use (Sep 2026)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: The AI tools I actually use (Sep 2026)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Мәтін, код жазу, видео өндіріс, дыбыс синтезі және білім базасын басқаруға арналған бағдарламалар.",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide ai-tools-i-use --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Күнделікті қолданатын ең үздік AI құралдар рейтингі (2026)\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 21,
    "title": "Jev makes lead qualification жұмысты жеңілдететін құпия тәсілі.",
    "orig_title": "Jev makes lead qualification feel like cheating.",
    "category": "Жүйелер мен Агенттер",
    "date": "26 Sept 2026",
    "excerpt": "Connect saved Apollo contacts, qualify leads and prepare personalized messages with a call invitation. Includes the project, an AI…",
    "slug": "apollo-jev",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Jev makes lead qualification feel like cheating.\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Jev makes lead qualification feel like cheating.\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Connect saved Apollo contacts, qualify leads and prepare personalized messages with a call invitation. Includes the project, an AI…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name apollo-jev --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Jev makes lead qualification жұмысты жеңілдететін құпия тәсілі.\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 22,
    "title": "Барлық AI баптауларыңызды жеке қалтада сақтау жүйесі",
    "orig_title": "Keep your AI setup in a folder you own",
    "category": "Жүйелер мен Агенттер",
    "date": "24 Sept 2026",
    "excerpt": "My real folder approach, simplified for beginners. Download 14 starter files, save your writing preferences and project progress, …",
    "slug": "folder",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Барлық AI баптауларыңызды жеке қалтада сақтау жүйесі\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Барлық AI баптауларыңызды жеке қалтада сақтау жүйесі\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "My real folder approach, simplified for beginners. Download 14 starter files, save your writing preferences and project progress, …",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name folder --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Барлық AI баптауларыңызды жеке қалтада сақтау жүйесі\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 23,
    "title": "Jev makes content research жұмысты жеңілдететін құпия тәсілі",
    "orig_title": "Jev makes content research feel like cheating",
    "category": "Жүйелер мен Агенттер",
    "date": "24 Sept 2026",
    "excerpt": "The Hormozi research report: patterns from 431 Reels, six script breakdowns, eight templates and the downloadable data. Plus my Je…",
    "slug": "creator-lab",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Jev makes content research feel like cheating\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Jev makes content research feel like cheating\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "The Hormozi research report: patterns from 431 Reels, six script breakdowns, eight templates and the downloadable data. Plus my Je…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name creator-lab --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Jev makes content research жұмысты жеңілдететін құпия тәсілі\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 24,
    "title": "Limit Saver: AI жазылымының лимитін 3 есе үнемдейтін скилл",
    "orig_title": "Limit Saver: the skill that makes your AI plan last longer",
    "category": "Жүйелер мен Агенттер",
    "date": "21 Sept 2026",
    "excerpt": "Артық токендерді жұмсатпай, ұзақ диалогтарда сапаны жоғалтпай жұмыс істеу алгоритмі.",
    "slug": "limit-saver",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Limit Saver: AI лимиттерін үнемдейтін арнайы скилл\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Limit Saver: AI лимиттерін үнемдейтін арнайы скилл\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Динамикалық контекст қысқарту (compression) және жүйелік нұсқауларды оңтайландыру арқылы шығынды азайту.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name limit-saver --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Limit Saver: AI жазылымының лимитін 3 есе үнемдейтін скилл\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 25,
    "title": "Your Mac should have come with this",
    "orig_title": "Your Mac should have come with this",
    "category": "Баптау нұсқаулықтары",
    "date": "19 Sept 2026",
    "excerpt": "One menu icon, five Mac upgrades. The official download, simple setup, permissions explained, and a quick test for per-app volume,…",
    "slug": "vorssaint",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Your Mac should have come with this\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Your Mac should have come with this\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "One menu icon, five Mac upgrades. The official download, simple setup, permissions explained, and a quick test for per-app volume,…",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide vorssaint --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Your Mac should have come with this\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 26,
    "title": "AI көмегімен видео өңдеудің толық нұсқаулығы + 3 монтаж скиллі",
    "orig_title": "Edit videos with AI: the complete guide + 3 editing skills",
    "category": "Видео және Монтаж",
    "date": "18 Sept 2026",
    "excerpt": "Динамикалық ырғақ, SFX эффектілер және заманауи визуалды стильді жылдам қалыптастыру.",
    "slug": "vibe-editing",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI көмегімен видео өңдеу: толық практикалық нұсқаулық + 3 editing skills\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI көмегімен видео өңдеу: толық практикалық нұсқаулық + 3 editing skills\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Премиум видеороликтер жасауға арналған дайын пресеттер, темптер және кадр ауысымы формулалары.",
    "install_cmd": "brew install ffmpeg node\nexport GROQ_API_KEY=gsk_your_groq_key\ngit clone https://github.com/artishertekuly-bit/claude-editing-skills.git ~/claude-editing-skills\ncd ~/claude-editing-skills && ./install.sh",
    "exec_cmd": "/trial-reels raw_interview.mp4 --subtitles --punch-ins --lang kk --output out/final_reel.mp4",
    "reqs": "ffmpeg, Groq Whisper API, Python 3.10+, HyperFrames",
    "prompt_spec": "// WNK Video Editing Engine Spec: AI көмегімен видео өңдеудің толық нұсқаулығы + 3 монтаж скиллі\n1. Дыбысты мәтінге айналдыру: Groq Whisper Large v3 (0.3 сек/минут жылдамдық, қазақ тіліндегі дәлдік 98%).\n2. Динамикалық кадрлеу (Smart Punch-ins): Спикердің маңызды сөздерінде 1.15x масштабтау және бетті ортаға келтіру.\n3. Субтитр стилі: Space Grotesk / Inter қалың шрифті, сары екпінді сөздер, жасыл белсенді субтитр.\n4. B-roll және SFX: Әр 3-4 секунд сайын контекстік сурет немесе жеңіл Whoosh дыбыстық эффектісі."
  },
  {
    "id": 27,
    "title": "DIY Fly Brain (Yes, Really)",
    "orig_title": "DIY Fly Brain (Yes, Really)",
    "category": "Баптау нұсқаулықтары",
    "date": "14 Sept 2026",
    "excerpt": "Run a fruit fly connectome simulation on your laptop. Paper-trade Bitcoin, try Doom, or build your own experiment. Copyable setup …",
    "slug": "diy-fly-brain",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: DIY Fly Brain (Yes, Really)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: DIY Fly Brain (Yes, Really)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Run a fruit fly connectome simulation on your laptop. Paper-trade Bitcoin, try Doom, or build your own experiment. Copyable setup …",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide diy-fly-brain --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: DIY Fly Brain (Yes, Really)\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 28,
    "title": "10 things to make with ChatGPT Sketch",
    "orig_title": "10 things to make with ChatGPT Sketch",
    "category": "Визуал мен Карусель",
    "date": "9 Sept 2026",
    "excerpt": "Thumbnails, carousels, logos and more. 10 ideas with simple layouts and prompts you can copy. No signup needed.…",
    "slug": "sketch",
    "tags": [
      "ChatGPT",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 10 things to make with ChatGPT Sketch\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 10 things to make with ChatGPT Sketch\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Thumbnails, carousels, logos and more. 10 ideas with simple layouts and prompts you can copy. No signup needed.…",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark sketch.md -o sketch_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: 10 things to make with ChatGPT Sketch\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 29,
    "title": "Claude × Higgsfield Seedance 2.0 — Толық баптау нұсқаулығы",
    "orig_title": "Claude × Higgsfield Seedance 2.0 — Full Setup Guide",
    "category": "Видео және Монтаж",
    "date": "2026",
    "excerpt": "Claude Code және Playwright MCP арқылы Higgsfield Seedance 2.0 платформасында автоматты түрде жоғары сапалы 3D кинематографиялық бейнелер генерациялау.",
    "slug": "claude-higgsfield-seedance",
    "tags": [
      "Higgsfield",
      "Claude",
      "Video",
      "WNK"
    ],
    "steps": [
      "1-қадам: Claude Code-қа Playwright MCP құралын қосу және Higgsfield API сессиясын баптау.",
      "2-қадам: Seedance 2.0 үшін камера бұрыштары мен жарықтандыру параметрлерін беру.",
      "3-қадам: Промптты автоматты оңтайландырып, 4K сапада кадрларды рендерге жіберу.",
      "4-қадам: Дайын бейнені сақтап, автоматты субтитр мен дыбыстық қабатпен біріктіру."
    ],
    "prompt": "// WNK Education: Claude × Higgsfield Seedance 2.0 Setup Spec\n// Мақсаты: Түсірілімсіз кәсіби AI жарнама және кинематография\nСіз Higgsfield AI және Claude Code маманысыз.\nМына міндетті сапалы әрі нақты өндірістік деңгейде орындаңыз:\n- Модель: Higgsfield Seedance 2.0 (Cinematic Mode)\n- Камера: 35mm Anamorphic, subtle pan-right, volumetric fog, rim lighting\n- Параметрлер: Motion strength 6, coherence 0.85, 24fps film cadence.",
    "readTime": "6 мин оқу",
    "desc": "Бұл нұсқаулықта Claude Code арқылы Higgsfield Seedance платформасында кинолық сападағы өнімдік жарнамалар мен анимацияларды толық автоматтандыру көрсетілген.",
    "install_cmd": "pip install higgsfield requests pillow\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills",
    "exec_cmd": "/seedance-prompt 'Cinematic slow glide across cyberpunk Astana, neon reflection, 4k ultra-detailed' --camera '35mm slow push'",
    "reqs": "Higgsfield AI, Seedance 2.0, Midjourney v6.1, Topaz Video AI",
    "prompt_spec": "// WNK Higgsfield & Seedance 2.0 Generation Spec: Claude × Higgsfield Seedance 2.0 — Толық баптау нұсқаулығы\n1. Бастапқы кадр (Init frame): Midjourney v6.1 арқылы 16:9 немесе 9:16 қатынасында фотореалистік кадр дайындау.\n2. Қозғалыс параметрлері: Camera motion: Slow Pan Left (Speed: 3), Motion Strength: 0.65, FPS: 24.\n3. Seedance 2.0 өңдеуі: Кадрлар арасындағы морфингті реттеп, кейіпкердің бет-бейнесінің тұрақтылығын (identity consistency) 95%-дан төмендетпеу.\n4. Пост-өңдеу: Topaz Video AI арқылы 1080p -> 4K 60fps деңгейіне дейін масштабтау."
  },
  {
    "id": 30,
    "title": "Claude токендерін үнемдейтін 5 пайдалы скилл",
    "orig_title": "5 skills that stop Claude eating your tokens",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Claude Code burns context on files, outputs, and history — then everything gets slow and pricey. Five moves stop it: /doctor to se…",
    "slug": "token-saving-skills",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude токендерін үнемдейтін 5 пайдалы скилл\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude токендерін үнемдейтін 5 пайдалы скилл\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Claude Code burns context on files, outputs, and history — then everything gets slow and pricey. Five moves stop it: /doctor to se…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name token-saving-skills --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Claude токендерін үнемдейтін 5 пайдалы скилл\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 31,
    "title": "person-to-skill — turn any expert into your AI advisor",
    "orig_title": "person-to-skill — turn any expert into your AI advisor",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Take any person and all their knowledge from books and podcasts, and turn them into a Claude skill with one line — then they act a…",
    "slug": "person-to-skill",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: person-to-skill — turn any expert into your AI advisor\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: person-to-skill — turn any expert into your AI advisor\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Take any person and all their knowledge from books and podcasts, and turn them into a Claude skill with one line — then they act a…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name person-to-skill --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: person-to-skill — turn any expert into your AI advisor\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 32,
    "title": "The Arcads + Claude ads playbook (find &amp; clone winning ads)",
    "orig_title": "The Arcads + Claude ads playbook (find &amp; clone winning ads)",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "One ad did 20M+ views and $300k+ in revenue — and you don&#x27;t have to guess what works. Find TikTok ads already crushing it on Kalod…",
    "slug": "arcads-ads-playbook",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: The Arcads + Claude ads playbook (find &amp; clone winning ads)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: The Arcads + Claude ads playbook (find &amp; clone winning ads)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "One ad did 20M+ views and $300k+ in revenue — and you don&#x27;t have to guess what works. Find TikTok ads already crushing it on Kalod…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook arcads-ads-playbook --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: The Arcads + Claude ads playbook (find &amp; clone winning ads)\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 33,
    "title": "Top 27 AI tools of 2026, ranked (hype vs output)",
    "orig_title": "Top 27 AI tools of 2026, ranked (hype vs output)",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "My full stack, ranked the honest way: how much noise a tool makes (hype) vs how much work it actually does (output). The underrate…",
    "slug": "27-tools-hype-vs-output",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Top 27 AI tools of 2026, ranked (hype vs output)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Top 27 AI tools of 2026, ranked (hype vs output)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "My full stack, ranked the honest way: how much noise a tool makes (hype) vs how much work it actually does (output). The underrate…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name 27-tools-hype-vs-output --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Top 27 AI tools of 2026, ranked (hype vs output)\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 34,
    "title": "Зейінді шоғырландыруға арналған Claude жұмыс жүйесі",
    "orig_title": "The Claude skill for ADHD brains",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Claude knows how to fix your problem — but buries it under 14 paragraphs first. This free Claude Code skill, &quot;I Have ADHD&quot;, forces…",
    "slug": "claude-skill-for-adhd",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Зейінді шоғырландыруға арналған Claude жұмыс жүйесі\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Зейінді шоғырландыруға арналған Claude жұмыс жүйесі\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Claude knows how to fix your problem — but buries it under 14 paragraphs first. This free Claude Code skill, &quot;I Have ADHD&quot;, forces…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name claude-skill-for-adhd --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Зейінді шоғырландыруға арналған Claude жұмыс жүйесі\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 35,
    "title": "I turned myself into a website with one prompt (Manus)",
    "orig_title": "I turned myself into a website with one prompt (Manus)",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "I get flooded with DMs I can&#x27;t answer, so I cloned myself: a website with a chatbot trained on everything I&#x27;ve made, answering in …",
    "slug": "manus-clone-website",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: I turned myself into a website with one prompt (Manus)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: I turned myself into a website with one prompt (Manus)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "I get flooded with DMs I can&#x27;t answer, so I cloned myself: a website with a chatbot trained on everything I&#x27;ve made, answering in …",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name manus-clone-website --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: I turned myself into a website with one prompt (Manus)\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 36,
    "title": "Kimi K3 inside Claude Code harness is a cheat code",
    "orig_title": "Kimi K3 inside Claude Code harness is a cheat code",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Kimi K3 just dropped — a frontier-level model at roughly a fifth of the price. The play isn&#x27;t to replace Claude; it&#x27;s to make Kimi…",
    "slug": "kimi-k3-claude-code",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Kimi K3 inside Claude Code harness is a cheat code\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Kimi K3 inside Claude Code harness is a cheat code\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Kimi K3 just dropped — a frontier-level model at roughly a fifth of the price. The play isn&#x27;t to replace Claude; it&#x27;s to make Kimi…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name kimi-k3-claude-code --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Kimi K3 inside Claude Code harness is a cheat code\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 37,
    "title": "Open Design — the free, local Claude Design alternative",
    "orig_title": "Open Design — the free, local Claude Design alternative",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Someone open-sourced Claude Design. 78K+ stars, Apache-2.0, runs locally on your machine with 150 design systems and 100+ skills. …",
    "slug": "open-design",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Open Design — the free, local Claude Design alternative\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Open Design — the free, local Claude Design alternative\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Someone open-sourced Claude Design. 78K+ stars, Apache-2.0, runs locally on your machine with 150 design systems and 100+ skills. …",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name open-design --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Open Design — the free, local Claude Design alternative\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 38,
    "title": "AI интерьер дизайны: шынайы жобаларды жасау",
    "orig_title": "AI interior design you can actually buy",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Every AI interior tool invents furniture you can&#x27;t buy. This free one redesigns your room using only real IKEA products — every sh…",
    "slug": "ikea-room-design",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI интерьер дизайны: шынайы жобаларды жасау\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI интерьер дизайны: шынайы жобаларды жасау\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Every AI interior tool invents furniture you can&#x27;t buy. This free one redesigns your room using only real IKEA products — every sh…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name ikea-room-design --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: AI интерьер дизайны: шынайы жобаларды жасау\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 39,
    "title": "Claude көмегімен миллиондық қаралым жинайтын карусель жасау — the full system",
    "orig_title": "How I make viral carousels with Claude — the full system",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Claude sucks at carousels because it has no system and no taste. I fixed it with two skills and one workflow: carousel-copy plans …",
    "slug": "carousel-playbook",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude көмегімен миллиондық қаралым жинайтын карусель жасау — the full system\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude көмегімен миллиондық қаралым жинайтын карусель жасау — the full system\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Claude sucks at carousels because it has no system and no taste. I fixed it with two skills and one workflow: carousel-copy plans …",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark carousel-playbook.md -o carousel-playbook_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: Claude көмегімен миллиондық қаралым жинайтын карусель жасау — the full system\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 40,
    "title": "Stop burning your Claude limits — the Fable + Sonnet setup",
    "orig_title": "Stop burning your Claude limits — the Fable + Sonnet setup",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "You hit Claude limits because your most expensive model does everything, including the grunt work. Three built-in Claude Code sett…",
    "slug": "claude-model-pairing",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Stop burning your Claude limits — the Fable + Sonnet setup\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Stop burning your Claude limits — the Fable + Sonnet setup\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "You hit Claude limits because your most expensive model does everything, including the grunt work. Three built-in Claude Code sett…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name claude-model-pairing --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Stop burning your Claude limits — the Fable + Sonnet setup\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 41,
    "title": "Claude + Arcads арқылы UGC жарнамалар генерациясы",
    "orig_title": "Make UGC ads with Claude + Arcads",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Drop a product photo into Claude and it uses Arcads to spin up UGC ads — an AI actor holding your product, talking to camera — mak…",
    "slug": "arcads-ugc-ads",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude + Arcads арқылы UGC жарнамалар генерациясы\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude + Arcads арқылы UGC жарнамалар генерациясы\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Drop a product photo into Claude and it uses Arcads to spin up UGC ads — an AI actor holding your product, talking to camera — mak…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name arcads-ugc-ads --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Claude + Arcads арқылы UGC жарнамалар генерациясы\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 42,
    "title": "Control a website with your hand",
    "orig_title": "Control a website with your hand",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Open your hand and an origami version of your face unfolds; close it and it crumples into a paper ball — live, through your webcam…",
    "slug": "hand-gesture-website",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Control a website with your hand\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Control a website with your hand\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Open your hand and an origami version of your face unfolds; close it and it crumples into a paper ball — live, through your webcam…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name hand-gesture-website --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Control a website with your hand\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 43,
    "title": "Claude skill to steal any viral video",
    "orig_title": "Claude skill to steal any viral video",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "A free Claude Code skill. Paste any TikTok, Reel, or Short into /analyze and it pulls the full transcript from the actual audio (n…",
    "slug": "analyze-skill",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude skill to steal any viral video\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude skill to steal any viral video\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "A free Claude Code skill. Paste any TikTok, Reel, or Short into /analyze and it pulls the full transcript from the actual audio (n…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name analyze-skill --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Claude skill to steal any viral video\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 44,
    "title": "Higgsfield + Midjourney: Вирустық couple-with-a-flag тренді",
    "orig_title": "Couple with a Flag — Higgsfield + Midjourney Viral Video Formula",
    "category": "Видео және Монтаж",
    "date": "2026",
    "excerpt": "Брендтер үшін миллиондаған қаралым жинаған couple-with-a-flag тренді. Higgsfield бейне генераторы мен Midjourney v6.1 үшін нақты промпттар жиынтығы.",
    "slug": "viral-flag-videos",
    "tags": [
      "Higgsfield",
      "Midjourney",
      "Video",
      "WNK"
    ],
    "steps": [
      "1-қадам: Midjourney v6.1 арқылы жалау ұстаған кейіпкерлердің кинематографиялық базалық кадрын генерациялау.",
      "2-қадам: Кадрды Higgsfield 플랫폼ына енгізіп, динамикалық жел мен қозғалыс параметрлерін баптау.",
      "3-қадам: Камераның айналу бұрышын (orbit 15 deg) және фокус тұрақтылығын тексеру.",
      "4-қадам: Reels/Shorts үшін 9:16 қауіпсіз аймақта 1080x1920 MP4 етіп экспорттау."
    ],
    "prompt": "// WNK Education: Higgsfield + Midjourney Viral Flag Video Spec\n// Мақсаты: Миллиондық органикалық қаралымға арналған бейне\nMidjourney Prompt: Cinematic wide-angle shot of an aesthetic athletic couple standing on a mountain peak holding a custom flag fluttering in high winds, golden hour dramatic rim lighting, 35mm film photography style, ultra-detailed.\nHiggsfield Motion: camera pull-back slowly, wind strength 7.5, realistic flag cloth physics simulation.",
    "readTime": "5 мин оқу",
    "desc": "Әлемдік брендтердің TikTok және Instagram-да миллиондаған қаралым жинаған couple-with-a-flag форматын түсірілімсіз қайталау жолы.",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug viral-flag-videos --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: Higgsfield + Midjourney: Вирустық couple-with-a-flag тренді\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 45,
    "title": "5 Claude skills that fix its terrible writing",
    "orig_title": "5 Claude skills that fix its terrible writing",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Claude writes generic content by default. Five free Claude Code skills fix it one failure mode at a time: dumbify (8th-grade readi…",
    "slug": "content-skills",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 5 Claude skills that fix its terrible writing\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 5 Claude skills that fix its terrible writing\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Claude writes generic content by default. Five free Claude Code skills fix it one failure mode at a time: dumbify (8th-grade readi…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name content-skills --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: 5 Claude skills that fix its terrible writing\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 46,
    "title": "Сапасыз AI дизайнды жоятын 42 Claude скиллі",
    "orig_title": "42 Claude design skills that kill AI slop",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "AI-generated design all looks the same — purple gradient, Inter, four cards in a grid. These 42 SKILL.md skills for Claude Code, C…",
    "slug": "claude-design-skills",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Сапасыз AI дизайнды жоятын 42 Claude скиллі\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Сапасыз AI дизайнды жоятын 42 Claude скиллі\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "AI-generated design all looks the same — purple gradient, Inter, four cards in a grid. These 42 SKILL.md skills for Claude Code, C…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name claude-design-skills --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Сапасыз AI дизайнды жоятын 42 Claude скиллі\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 47,
    "title": "Turn Jeff Nippard into your own personal AI trainer",
    "orig_title": "Turn Jeff Nippard into your own personal AI trainer",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "A Jeff Nippard training coach that runs in Claude Code on 285 of his videos — where every recommendation is backed by a real video…",
    "slug": "ai-personal-trainer",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Turn Jeff Nippard into your own personal AI trainer\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Turn Jeff Nippard into your own personal AI trainer\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "A Jeff Nippard training coach that runs in Claude Code on 285 of his videos — where every recommendation is backed by a real video…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name ai-personal-trainer --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Turn Jeff Nippard into your own personal AI trainer\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 48,
    "title": "Get paid to wait for Claude",
    "orig_title": "Get paid to wait for Claude",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Someone turned the Claude Code loading spinner into an ad marketplace. A free VS Code extension shows a sponsored line while your …",
    "slug": "get-paid-to-wait-for-claude",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Get paid to wait for Claude\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Get paid to wait for Claude\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Someone turned the Claude Code loading spinner into an ad marketplace. A free VS Code extension shows a sponsored line while your …",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name get-paid-to-wait-for-claude --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Get paid to wait for Claude\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 49,
    "title": "Бір промпт арқылы сапалы қымбат сайт құрастыру in Claude",
    "orig_title": "How to build a $10,000 website with one prompt in Claude",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Hand Claude a world-class Refero design system and an AI-generated Higgsfield hero video, and it ships an agency-quality site with…",
    "slug": "10000-dollar-website",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Бір промпт арқылы сапалы қымбат сайт құрастыру in Claude\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Бір промпт арқылы сапалы қымбат сайт құрастыру in Claude\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Hand Claude a world-class Refero design system and an AI-generated Higgsfield hero video, and it ships an agency-quality site with…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name 10000-dollar-website --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Бір промпт арқылы сапалы қымбат сайт құрастыру in Claude\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 50,
    "title": "Loop engineering, explained",
    "orig_title": "Loop engineering, explained",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Stop being the person who prompts the AI — design the loop that prompts it for you. The five building blocks, when a loop is actua…",
    "slug": "loop-engineering",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Loop engineering, explained\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Loop engineering, explained\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Stop being the person who prompts the AI — design the loop that prompts it for you. The five building blocks, when a loop is actua…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook loop-engineering --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: Loop engineering, explained\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 51,
    "title": "I gave Claude 300 Huberman episodes — now he&#x27;s my health coach",
    "orig_title": "I gave Claude 300 Huberman episodes — now he&#x27;s my health coach",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "A Claude Code skill that bulk-loads any expert&#x27;s YouTube channel into NotebookLM, runs a cited interview about your goal, and writ…",
    "slug": "notebooklm-coach",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: I gave Claude 300 Huberman episodes — now he&#x27;s my health coach\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: I gave Claude 300 Huberman episodes — now he&#x27;s my health coach\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "A Claude Code skill that bulk-loads any expert&#x27;s YouTube channel into NotebookLM, runs a cited interview about your goal, and writ…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name notebooklm-coach --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: I gave Claude 300 Huberman episodes — now he&#x27;s my health coach\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 52,
    "title": "GEO аудит: дәстүрлі SEO емес, AI іздеу жүйелерінің алдыңғы қатарына шығу",
    "orig_title": "GEO audit — get cited by AI search instead of skipped",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Perplexity, ChatGPT Search және Google AI Overviews жауаптарында компанияңызды бірінші көрсету әдісі.",
    "slug": "geo-audit",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: GEO audit — get cited by AI search instead of skipped\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: GEO audit — get cited by AI search instead of skipped\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Generative Engine Optimization (GEO) стратегиясы және веб-сайтты AI үшін оңтайландыру жолдары.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name geo-audit --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: GEO аудит: дәстүрлі SEO емес, AI іздеу жүйелерінің алдыңғы қатарына шығу\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 53,
    "title": "Reels үшін Claude Code контент-миын жасау",
    "orig_title": "Build a Claude Code content brain for viral reels",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Every creator you learn from becomes your scriptwriter. Scrape their reels, analyze their patterns, generate scripts in their voic…",
    "slug": "content-brain",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Reels үшін Claude Code контент-миын жасау\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Reels үшін Claude Code контент-миын жасау\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Every creator you learn from becomes your scriptwriter. Scrape their reels, analyze their patterns, generate scripts in their voic…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name content-brain --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Reels үшін Claude Code контент-миын жасау\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 54,
    "title": "text-to-cad — prompt → real mechanical designs",
    "orig_title": "text-to-cad — prompt → real mechanical designs",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Open-source Claude/Codex skills that turn natural language into validated CAD: moving parts, physics, animated assemblies, URDF/SR…",
    "slug": "text-to-cad",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: text-to-cad — prompt → real mechanical designs\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: text-to-cad — prompt → real mechanical designs\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Open-source Claude/Codex skills that turn natural language into validated CAD: moving parts, physics, animated assemblies, URDF/SR…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name text-to-cad --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: text-to-cad — prompt → real mechanical designs\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 55,
    "title": "How to create viral Instagram carousels with ChatGPT",
    "orig_title": "How to create viral Instagram carousels with ChatGPT",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "How I make Instagram carousels that hit 100K+ views in 15 minutes with ChatGPT Image 2. Slide 1 as visual anchor, slide-by-slide g…",
    "slug": "carousel-system",
    "tags": [
      "ChatGPT",
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: How to create viral Instagram carousels with ChatGPT\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: How to create viral Instagram carousels with ChatGPT\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "How I make Instagram carousels that hit 100K+ views in 15 minutes with ChatGPT Image 2. Slide 1 as visual anchor, slide-by-slide g…",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark carousel-system.md -o carousel-system_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: How to create viral Instagram carousels with ChatGPT\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 56,
    "title": "5 Claude Code Skills That Replaced My $150k Dev Team",
    "orig_title": "5 Claude Code Skills That Replaced My $150k Dev Team",
    "category": "Баптау нұсқаулықтары",
    "date": "2026",
    "excerpt": "These are the 5 agent skills I use every single day to get production-grade code from Claude Code. Each one is a small markdown fi…",
    "slug": "5-claude-code-skills-that-replaced-my-150k-dev-te",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 5 Claude Code Skills That Replaced My $150k Dev Team\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 5 Claude Code Skills That Replaced My $150k Dev Team\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "These are the 5 agent skills I use every single day to get production-grade code from Claude Code. Each one is a small markdown fi…",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide 5-claude-code-skills-that-replaced-my-150k-dev-te --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: 5 Claude Code Skills That Replaced My $150k Dev Team\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 57,
    "title": "Claude Code Plugin",
    "orig_title": "Claude Code Plugin",
    "category": "Баптау нұсқаулықтары",
    "date": "2026",
    "excerpt": "Plugin Run this inside claude code /plugin install claude-code-setup@claude-plugins-official Official GitHub Page…",
    "slug": "claude-code-plugin",
    "tags": [
      "Claude",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude Code Plugin\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude Code Plugin\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Plugin Run this inside claude code /plugin install claude-code-setup@claude-plugins-official Official GitHub Page…",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide claude-code-plugin --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Claude Code Plugin\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 58,
    "title": "Microsoft 365 жүйесін Claude-қа қосу (Толық нұсқаулық) (Full Setup Guide)",
    "orig_title": "Connect Microsoft 365 to Claude (Full Setup Guide)",
    "category": "Баптау нұсқаулықтары",
    "date": "2026",
    "excerpt": "Claude just became one brain for your entire Microsoft workspace. This guide shows you exactly how to set it up and what to do wit…",
    "slug": "connect-microsoft-365-to-claude-full-setup-guide",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Microsoft 365 жүйесін Claude-қа қосу (Толық нұсқаулық) (Full Setup Guide)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Microsoft 365 жүйесін Claude-қа қосу (Толық нұсқаулық) (Full Setup Guide)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Claude just became one brain for your entire Microsoft workspace. This guide shows you exactly how to set it up and what to do wit…",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide connect-microsoft-365-to-claude-full-setup-guide --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Microsoft 365 жүйесін Claude-қа қосу (Толық нұсқаулық) (Full Setup Guide)\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 59,
    "title": "Шағын бизнеске арналған Claude енгізу нұсқаулығы",
    "orig_title": "The Claude for Small Business Setup Guide",
    "category": "Баптау нұсқаулықтары",
    "date": "2026",
    "excerpt": "Run your business on autopilot with 30 ready-to-go AI workflows. What this actually is On May 13, 2026, Anthropic launched Claude …",
    "slug": "the-claude-for-small-business-setup-guide",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Баптау нұсқаулықтары бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Шағын бизнеске арналған Claude енгізу нұсқаулығы\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Баптау нұсқаулықтары саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Шағын бизнеске арналған Claude енгізу нұсқаулығы\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Run your business on autopilot with 30 ready-to-go AI workflows. What this actually is On May 13, 2026, Anthropic launched Claude …",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/wnk-education.git\ncd wnk-education && npm install",
    "exec_cmd": "/guide the-claude-for-small-business-setup-guide --mode full-walkthrough",
    "reqs": "Git, Node.js 20+, Python 3.10+, Docker, Supabase CLI",
    "prompt_spec": "// WNK Production Setup Guide Spec: Шағын бизнеске арналған Claude енгізу нұсқаулығы\n1. Инфрақұрылым дайындығы: Жергілікті ортаны тексеру (Node >= 20.0.0, Python >= 3.10, Docker).\n2. Қоршаған орта айнымалылары (.env): API кілттерді конфигурациялау және байланысты тексеру.\n3. Қауіпсіз орындау: Жергілікті терминалда қауіпсіз тестілеп, содан соң бұлттық жүйеге енгізу.\n4. Мониторинг: Қолданушы сұраныстары мен кэштің тиімділігін күнделікті қадағалау."
  },
  {
    "id": 60,
    "title": "ChatGPT Image 2.0 vs Nano Banana Google Pro",
    "orig_title": "ChatGPT Image 2.0 vs Nano Banana Google Pro",
    "category": "Визуал мен Карусель",
    "date": "2026",
    "excerpt": "Prompt 1 (Live Stream) { &quot;scene&quot;: { &quot;type&quot;: &quot;cinematic_live_stream_podcast&quot;, &quot;aspect_ratio&quot;: &quot;9:16&quot;, &quot;resolution&quot;: &quot;8K&quot;, &quot;style&quot;: …",
    "slug": "chatgpt-image-2-0-vs-nano-banana-google-pro",
    "tags": [
      "ChatGPT",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: ChatGPT Image 2.0 vs Nano Banana Google Pro\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: ChatGPT Image 2.0 vs Nano Banana Google Pro\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Prompt 1 (Live Stream) { &quot;scene&quot;: { &quot;type&quot;: &quot;cinematic_live_stream_podcast&quot;, &quot;aspect_ratio&quot;: &quot;9:16&quot;, &quot;resolution&quot;: &quot;8K&quot;, &quot;style&quot;: …",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark chatgpt-image-2-0-vs-nano-banana-google-pro.md -o chatgpt-image-2-0-vs-nano-banana-google-pro_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: ChatGPT Image 2.0 vs Nano Banana Google Pro\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 61,
    "title": "Claude Instagram Carousel Generator — Project Instructions",
    "orig_title": "Claude Instagram Carousel Generator — Project Instructions",
    "category": "Визуал мен Карусель",
    "date": "2026",
    "excerpt": "By the way, I&#x27;m currently building a web app with more templates and better consistency for Instagram carousels. Check it out here…",
    "slug": "claude-instagram-carousel-generator-project-inst",
    "tags": [
      "Claude",
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude Instagram Carousel Generator — Project Instructions\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude Instagram Carousel Generator — Project Instructions\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "By the way, I&#x27;m currently building a web app with more templates and better consistency for Instagram carousels. Check it out here…",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark claude-instagram-carousel-generator-project-inst.md -o claude-instagram-carousel-generator-project-inst_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: Claude Instagram Carousel Generator — Project Instructions\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 62,
    "title": "GPT Image 2 — The Толық нұсқаулық пен шолу",
    "orig_title": "GPT Image 2 — The Full Leak Guide",
    "category": "Визуал мен Карусель",
    "date": "2026",
    "excerpt": "All known codenames (in order) There might new codenames coming out, so hurry before it gets changed. How to access it right now G…",
    "slug": "gpt-image-2-the-full-leak-guide",
    "tags": [
      "ChatGPT",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: GPT Image 2 — The Full Leak Guide\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: GPT Image 2 — The Full Leak Guide\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "All known codenames (in order) There might new codenames coming out, so hurry before it gets changed. How to access it right now G…",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark gpt-image-2-the-full-leak-guide.md -o gpt-image-2-the-full-leak-guide_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: GPT Image 2 — The Толық нұсқаулық пен шолу\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 63,
    "title": "How to Generate Hyper-Realistic AI Images",
    "orig_title": "How to Generate Hyper-Realistic AI Images",
    "category": "Визуал мен Карусель",
    "date": "2026",
    "excerpt": "The Problem Most AI-generated faces look fake because people focus only on the face and setting—but skip what makes humans actuall…",
    "slug": "how-to-generate-hyper-realistic-ai-images",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: How to Generate Hyper-Realistic AI Images\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: How to Generate Hyper-Realistic AI Images\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "The Problem Most AI-generated faces look fake because people focus only on the face and setting—but skip what makes humans actuall…",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark how-to-generate-hyper-realistic-ai-images.md -o how-to-generate-hyper-realistic-ai-images_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: How to Generate Hyper-Realistic AI Images\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 64,
    "title": "How to Make Instagram Carousels with ChatGPT Image 2",
    "orig_title": "How to Make Instagram Carousels with ChatGPT Image 2",
    "category": "Визуал мен Карусель",
    "date": "2026",
    "excerpt": "The Reference-First Workflow Most people will use ChatGPT Image 2 the wrong way. They’ll ask it to “make a carousel” in one giant …",
    "slug": "how-to-make-instagram-carousels-with-chatgpt-image",
    "tags": [
      "ChatGPT",
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: How to Make Instagram Carousels with ChatGPT Image 2\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: How to Make Instagram Carousels with ChatGPT Image 2\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "The Reference-First Workflow Most people will use ChatGPT Image 2 the wrong way. They’ll ask it to “make a carousel” in one giant …",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark how-to-make-instagram-carousels-with-chatgpt-image.md -o how-to-make-instagram-carousels-with-chatgpt-image_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: How to Make Instagram Carousels with ChatGPT Image 2\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 65,
    "title": "Референс арқылы мінсіз карусель жасау алгоритмі",
    "orig_title": "The Reference-First Carousel Workflow",
    "category": "Визуал мен Карусель",
    "date": "2026",
    "excerpt": "All my systems &amp; weekly discoveries here 👇: Most people use ChatGPT Image 2 wrong. They open one chat, type &quot;make me a 6-slide ca…",
    "slug": "the-reference-first-carousel-workflow",
    "tags": [
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Визуал мен Карусель бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Референс арқылы мінсіз карусель жасау алгоритмі\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Визуал мен Карусель саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Референс арқылы мінсіз карусель жасау алгоритмі\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "All my systems &amp; weekly discoveries here 👇: Most people use ChatGPT Image 2 wrong. They open one chat, type &quot;make me a 6-slide ca…",
    "install_cmd": "npm install -g @marp-team/marp-cli sharp\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "npx marp --theme swiss-dark the-reference-first-carousel-workflow.md -o the-reference-first-carousel-workflow_carousel.pdf --images png",
    "reqs": "Midjourney v6.1, Marp CLI, Node.js 20+, Sharp, Puppeteer",
    "prompt_spec": "// WNK Carousel & Visual Architecture Spec: Референс арқылы мінсіз карусель жасау алгоритмі\n1. 1-слайд (Hook): Көз тартатын провокациялық сұрақ немесе күтпеген дерек (1080x1350 4:5 қатынасы).\n2. 2-6 слайдтар (Core Content): Бір слайд — бір негізгі ой. Қарапайым инфографика және ірі цифрлар.\n3. 7-слайд (Summary & Cheatsheet): Скриншот жасауға ыңғайлы жиынтық кесте немесе диаграмма.\n4. 8-слайд (CTA): «WNK Education қауымдастығына қосылыңыз» — нақты шақыру."
  },
  {
    "id": 66,
    "title": "🎬 Free Instagram Reel Transcript &amp; Hook Analyzer",
    "orig_title": "🎬 Free Instagram Reel Transcript &amp; Hook Analyzer",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "Stop wasting time searching for transcript tools that hide behind paywalls. I got tired of the Google rabbit hole—every &quot;free&quot; too…",
    "slug": "free-instagram-reel-transcript-and-hook-analyzer",
    "tags": [
      "Video",
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 🎬 Free Instagram Reel Transcript &amp; Hook Analyzer\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 🎬 Free Instagram Reel Transcript &amp; Hook Analyzer\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Stop wasting time searching for transcript tools that hide behind paywalls. I got tired of the Google rabbit hole—every &quot;free&quot; too…",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug free-instagram-reel-transcript-and-hook-analyzer --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: 🎬 Free Instagram Reel Transcript &amp; Hook Analyzer\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 67,
    "title": "🔮 The Top 10 AI Apps You&#x27;re Ignoring",
    "orig_title": "🔮 The Top 10 AI Apps You&#x27;re Ignoring",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "February 2025 • Real usage data, not hype The Leaderboard Snapshot 🎭 THE LIST 1. Janitor AI 🔗 janitorai.com What it is: Characte…",
    "slug": "the-top-10-ai-apps-youre-ignoring",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 🔮 The Top 10 AI Apps You&#x27;re Ignoring\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 🔮 The Top 10 AI Apps You&#x27;re Ignoring\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "February 2025 • Real usage data, not hype The Leaderboard Snapshot 🎭 THE LIST 1. Janitor AI 🔗 janitorai.com What it is: Characte…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook the-top-10-ai-apps-youre-ignoring --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: 🔮 The Top 10 AI Apps You&#x27;re Ignoring\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 68,
    "title": "🚀 Үздік AI стек: Gemini + Claude интеграциясы: Gemini 3.1 + Claude 4.6",
    "orig_title": "🚀 The Ultimate AI Stack: Gemini 3.1 + Claude 4.6",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "👉 Github repo for World Monitor 👈 👉 Helpful Resources 👈 Sales &amp; Marketing AI Agents that work out of the box: 🤝 Credit for th…",
    "slug": "the-ultimate-ai-stack-gemini-3-1-claude-4-6",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 🚀 Үздік AI стек: Gemini + Claude интеграциясы: Gemini 3.1 + Claude 4.6\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 🚀 Үздік AI стек: Gemini + Claude интеграциясы: Gemini 3.1 + Claude 4.6\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "👉 Github repo for World Monitor 👈 👉 Helpful Resources 👈 Sales &amp; Marketing AI Agents that work out of the box: 🤝 Credit for th…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook the-ultimate-ai-stack-gemini-3-1-claude-4-6 --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: 🚀 Үздік AI стек: Gemini + Claude интеграциясы: Gemini 3.1 + Claude 4.6\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 69,
    "title": "List of AI tools worth paying for in 2026 (July)",
    "orig_title": "List of AI tools worth paying for in 2026 (July)",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "The actual stack I pay for in July 2026 — plus two free ones I&#x27;d happily pay for. Claude Max ($100) as the powerhouse for every au…",
    "slug": "7-ai-tools-every-content-creator-needs-in-2026-i",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: List of AI tools worth paying for in 2026 (July)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: List of AI tools worth paying for in 2026 (July)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "The actual stack I pay for in July 2026 — plus two free ones I&#x27;d happily pay for. Claude Max ($100) as the powerhouse for every au…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook 7-ai-tools-every-content-creator-needs-in-2026-i --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: List of AI tools worth paying for in 2026 (July)\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 70,
    "title": "AImaxxing 101: The Full Playbook",
    "orig_title": "AImaxxing 101: The Full Playbook",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "Thanks for commenting on the reel. Here&#x27;s the long version of everything I crammed into 60 seconds, plus the tools and resources I…",
    "slug": "aimaxxing-101-the-full-playbook",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AImaxxing 101: The Full Playbook\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AImaxxing 101: The Full Playbook\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Thanks for commenting on the reel. Here&#x27;s the long version of everything I crammed into 60 seconds, plus the tools and resources I…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook aimaxxing-101-the-full-playbook --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: AImaxxing 101: The Full Playbook\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 71,
    "title": "6 айда AI инженеры болу: толық оқу бағдарламасы — Complete Resource Guide",
    "orig_title": "How to Become an AI Engineer in 6 Months — Complete Resource Guide",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "A practical, month-by-month roadmap with every resource you need. No CS degree required. Month 1: Coding &amp; Fundamentals Goal: Beco…",
    "slug": "how-to-become-an-ai-engineer-in-6-months-complet",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 6 айда AI инженеры болу: толық оқу бағдарламасы — Complete Resource Guide\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 6 айда AI инженеры болу: толық оқу бағдарламасы — Complete Resource Guide\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "A practical, month-by-month roadmap with every resource you need. No CS degree required. Month 1: Coding &amp; Fundamentals Goal: Beco…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook how-to-become-an-ai-engineer-in-6-months-complet --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: 6 айда AI инженеры болу: толық оқу бағдарламасы — Complete Resource Guide\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 72,
    "title": "How to Build a Fully Automated AI Ad Agency Inside Claude",
    "orig_title": "How to Build a Fully Automated AI Ad Agency Inside Claude",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "If you need any help setting up for your business 👇: All my systems &amp; weekly discoveries here 👇: What you&#x27;re building By the end…",
    "slug": "how-to-build-a-fully-automated-ai-ad-agency-inside",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: How to Build a Fully Automated AI Ad Agency Inside Claude\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: How to Build a Fully Automated AI Ad Agency Inside Claude\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "If you need any help setting up for your business 👇: All my systems &amp; weekly discoveries here 👇: What you&#x27;re building By the end…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook how-to-build-a-fully-automated-ai-ad-agency-inside --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: How to Build a Fully Automated AI Ad Agency Inside Claude\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 73,
    "title": "Жеке AI көмекшісін 5 минутта баптау (кодсыз) (No Code)",
    "orig_title": "Set Up Your Personal AI Assistant in 5 Minutes (No Code)",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "This thing negotiated my deals, found me a cheap flight to Bali, and it all runs straight from WhatsApp. The Problem With Building…",
    "slug": "set-up-your-personal-ai-assistant-in-5-minutes-no",
    "tags": [
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Жеке AI көмекшісін 5 минутта баптау (кодсыз) (No Code)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Жеке AI көмекшісін 5 минутта баптау (кодсыз) (No Code)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "This thing negotiated my deals, found me a cheap flight to Bali, and it all runs straight from WhatsApp. The Problem With Building…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook set-up-your-personal-ai-assistant-in-5-minutes-no --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: Жеке AI көмекшісін 5 минутта баптау (кодсыз) (No Code)\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 74,
    "title": "The Future of Website Interfaces: Pretext Package",
    "orig_title": "The Future of Website Interfaces: Pretext Package",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "What is this? Pretext is a single JavaScript/TypeScript package that lets you measure and lay out text without relying on the brow…",
    "slug": "the-future-of-website-interfaces-pretext-package",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: The Future of Website Interfaces: Pretext Package\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: The Future of Website Interfaces: Pretext Package\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "What is this? Pretext is a single JavaScript/TypeScript package that lets you measure and lay out text without relying on the brow…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook the-future-of-website-interfaces-pretext-package --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: The Future of Website Interfaces: Pretext Package\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 75,
    "title": "Бір түнде код жазуды бастауға арналған AI стартер-кит",
    "orig_title": "The Overnight AI Coding Starter Kit",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "Claude Code + Ralph Plugin Setup Guide What is this? A complete guide to setting up autonomous AI coding — where you give AI a tas…",
    "slug": "the-overnight-ai-coding-starter-kit",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Бір түнде код жазуды бастауға арналған AI стартер-кит\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Бір түнде код жазуды бастауға арналған AI стартер-кит\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Claude Code + Ralph Plugin Setup Guide What is this? A complete guide to setting up autonomous AI coding — where you give AI a tas…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook the-overnight-ai-coding-starter-kit --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: Бір түнде код жазуды бастауға арналған AI стартер-кит\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 76,
    "title": "The Three-Model Stack: A Practical Setup",
    "orig_title": "The Three-Model Stack: A Practical Setup",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "All my systems &amp; weekly discoveries here 👇: Setup Three frontier models dropped in one week: April 16: Claude Opus 4.7 (Anthropic…",
    "slug": "the-three-model-stack-a-practical-setup",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: The Three-Model Stack: A Practical Setup\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: The Three-Model Stack: A Practical Setup\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "All my systems &amp; weekly discoveries here 👇: Setup Three frontier models dropped in one week: April 16: Claude Opus 4.7 (Anthropic…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook the-three-model-stack-a-practical-setup --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: The Three-Model Stack: A Practical Setup\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 77,
    "title": "VIRAL ENGINE — Толық практикалық гид",
    "orig_title": "VIRAL ENGINE — The Full Guide",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "How to engineer a viral video using AI that simulates how your brain reacts to every second of it What you&#x27;re getting: A step-by-s…",
    "slug": "viral-engine-the-full-guide",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: VIRAL ENGINE — The Full Guide\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: VIRAL ENGINE — The Full Guide\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "How to engineer a viral video using AI that simulates how your brain reacts to every second of it What you&#x27;re getting: A step-by-s…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook viral-engine-the-full-guide --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: VIRAL ENGINE — Толық практикалық гид\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 78,
    "title": "YouTuber миын клондау архитектурасы",
    "orig_title": "YouTuber Brain Clone Blueprint",
    "category": "Плейбуктар",
    "date": "2026",
    "excerpt": "Helpful Resources Sales &amp; Marketing AI Agents that work out of the box: Turn Any Creator Into Your Personal AI Advisor in 5 Minute…",
    "slug": "youtuber-brain-clone-blueprint",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Плейбуктар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: YouTuber Brain Clone Blueprint\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Плейбуктар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: YouTuber Brain Clone Blueprint\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Helpful Resources Sales &amp; Marketing AI Agents that work out of the box: Turn Any Creator Into Your Personal AI Advisor in 5 Minute…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook youtuber-brain-clone-blueprint --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: YouTuber миын клондау архитектурасы\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 79,
    "title": "ChatGPT және Midjourney үшін 100+ визуалды промпт коды",
    "orig_title": "100+ ChatGPT Image Prompt Codes",
    "category": "Промпттар",
    "date": "2026",
    "excerpt": "🔽 Learn More &amp; Join My Community 📄 Image Prompt Codes (PDF) The full collection of codes was too large to display inline, so I’v…",
    "slug": "100-chatgpt-image-prompt-codes",
    "tags": [
      "ChatGPT",
      "Prompts",
      "Coding",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: ChatGPT және Midjourney үшін 100+ визуалды промпт коды\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: ChatGPT және Midjourney үшін 100+ визуалды промпт коды\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "🔽 Learn More &amp; Join My Community 📄 Image Prompt Codes (PDF) The full collection of codes was too large to display inline, so I’v…",
    "install_cmd": "pip install anthropic rich tiktoken\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "/prompt-run --template 100-chatgpt-image-prompt-codes --lang kk",
    "reqs": "Claude 3.5 Sonnet, Markdown Spec, JSON Schema",
    "prompt_spec": "// WNK Master Prompt Architecture: ChatGPT және Midjourney үшін 100+ визуалды промпт коды\nRole: Жоғары деңгейлі тәжірибелі сарапшы және білім беру архитектор.\nContext: WNK Education қауымдастығы үшін практикалық, нәтижеге бағытталған оқу контентін дайындау.\nConstraints:\n- Артық кіріспе мен қорытынды сөздер жазбаңыз.\n- Тек нақты мысалдар, терминал командалары және нақты нәтиже көрсетіңіз.\n- Тіл: Әдеби және кәсіби қазақ тілі."
  },
  {
    "id": 80,
    "title": "AI Character Creation Prompts",
    "orig_title": "AI Character Creation Prompts",
    "category": "Промпттар",
    "date": "2026",
    "excerpt": "Your Complete Prompt Library for Higgsfield Nano Banana Pro 🎯 The Prompt Formula A strong portrait prompt is built on several key…",
    "slug": "ai-character-creation-prompts",
    "tags": [
      "Prompts",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI Character Creation Prompts\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI Character Creation Prompts\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Your Complete Prompt Library for Higgsfield Nano Banana Pro 🎯 The Prompt Formula A strong portrait prompt is built on several key…",
    "install_cmd": "pip install anthropic rich tiktoken\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "/prompt-run --template ai-character-creation-prompts --lang kk",
    "reqs": "Claude 3.5 Sonnet, Markdown Spec, JSON Schema",
    "prompt_spec": "// WNK Master Prompt Architecture: AI Character Creation Prompts\nRole: Жоғары деңгейлі тәжірибелі сарапшы және білім беру архитектор.\nContext: WNK Education қауымдастығы үшін практикалық, нәтижеге бағытталған оқу контентін дайындау.\nConstraints:\n- Артық кіріспе мен қорытынды сөздер жазбаңыз.\n- Тек нақты мысалдар, терминал командалары және нақты нәтиже көрсетіңіз.\n- Тіл: Әдеби және кәсіби қазақ тілі."
  },
  {
    "id": 81,
    "title": "AI Particle Simulator — Full Guide + Prompt Pack",
    "orig_title": "AI Particle Simulator — Full Guide + Prompt Pack",
    "category": "Промпттар",
    "date": "2026",
    "excerpt": "Turn text prompts into complex 3D particle simulations. Export production-ready React or Three.js code in seconds. 🔗 The Tool AI …",
    "slug": "ai-particle-simulator-full-guide-prompt-pack",
    "tags": [
      "Prompts",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI Particle Simulator — Full Guide + Prompt Pack\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI Particle Simulator — Full Guide + Prompt Pack\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Turn text prompts into complex 3D particle simulations. Export production-ready React or Three.js code in seconds. 🔗 The Tool AI …",
    "install_cmd": "pip install anthropic rich tiktoken\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "/prompt-run --template ai-particle-simulator-full-guide-prompt-pack --lang kk",
    "reqs": "Claude 3.5 Sonnet, Markdown Spec, JSON Schema",
    "prompt_spec": "// WNK Master Prompt Architecture: AI Particle Simulator — Full Guide + Prompt Pack\nRole: Жоғары деңгейлі тәжірибелі сарапшы және білім беру архитектор.\nContext: WNK Education қауымдастығы үшін практикалық, нәтижеге бағытталған оқу контентін дайындау.\nConstraints:\n- Артық кіріспе мен қорытынды сөздер жазбаңыз.\n- Тек нақты мысалдар, терминал командалары және нақты нәтиже көрсетіңіз.\n- Тіл: Әдеби және кәсіби қазақ тілі."
  },
  {
    "id": 82,
    "title": "Anti-AI Writing: мәтінді жасанды емес, шынайы тірі адамша жаздыру ережелері",
    "orig_title": "ANTI-AI WRITING RULES",
    "category": "Промпттар",
    "date": "2026",
    "excerpt": "Шаблонды сөздерден, клишелерден және 'AI иісінен' арылуға арналған 15 қатаң сүзгі.",
    "slug": "anti-ai-writing-rules",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Жасанды интеллект мәтінін адам жазғандай шығару ережелері\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Жасанды интеллект мәтінін адам жазғандай шығару ережелері\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Оқырманды баурап алатын, тартымды, қарапайым әрі әсерлі мәтіндер дайындау формулары.",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/humanizer 'Мәтіндегі жасанды интеллект клишелерін жойып, қазақша тірі тілмен қайта жаз'",
    "reqs": "Claude 3.5 Sonnet / Antigravity CLI, Content Skills",
    "prompt_spec": "// WNK Anti-AI Writing Filter Protocol: Anti-AI Writing: мәтінді жасанды емес, шынайы тірі адамша жаздыру ережелері\n1. Тыйым салынған тіркестер: «қазіргі таңда», «маңызды рөл атқарады», «айта кету керек», «бұл тек бастамасы ғана», «көздің қарашығындай».\n2. Ритм және құрылым: 5-8 сөзден тұратын қысқа екпінді сөйлемдер. Бір ой — бір сөйлем.\n3. Белсенді етістіктер: Тұйық және ырықсыз етіс формаларын азайтып, тікелей әрекетке көшу.\n4. Тексеру: Қазақ тілінің табиғи сөйлеу колориті мен кәсіби фактілерді сақтау."
  },
  {
    "id": 83,
    "title": "WNK Education: Ең ауқымды AI промпттар кітапханасы",
    "orig_title": "Mega Prompt Library",
    "category": "Промпттар",
    "date": "2026",
    "excerpt": "Маркетинг, бағдарламалау, білім беру, сату және контент жасауға арналған жүздеген дайын промпт.",
    "slug": "mega-prompt-library",
    "tags": [
      "Prompts",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: WNK Education: Ең үлкен AI промпттар кітапханасы\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: WNK Education: Ең үлкен AI промпттар кітапханасы\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Әрбір тапсырма бойынша нәтижесі тексерілген, айнымалылары бар (variables) кәсіби промпттар жинағы.",
    "install_cmd": "pip install anthropic rich tiktoken\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "/prompt-run --template mega-prompt-library --lang kk",
    "reqs": "Claude 3.5 Sonnet, Markdown Spec, JSON Schema",
    "prompt_spec": "// WNK Master Prompt Architecture: WNK Education: Ең ауқымды AI промпттар кітапханасы\nRole: Жоғары деңгейлі тәжірибелі сарапшы және білім беру архитектор.\nContext: WNK Education қауымдастығы үшін практикалық, нәтижеге бағытталған оқу контентін дайындау.\nConstraints:\n- Артық кіріспе мен қорытынды сөздер жазбаңыз.\n- Тек нақты мысалдар, терминал командалары және нақты нәтиже көрсетіңіз.\n- Тіл: Әдеби және кәсіби қазақ тілі."
  },
  {
    "id": 84,
    "title": "STOP LYING CHAT GPT PROMPT",
    "orig_title": "STOP LYING CHAT GPT PROMPT",
    "category": "Промпттар",
    "date": "2026",
    "excerpt": "Prompt You are an expert who double and triple checks things, you are skeptical and you do research before verification. I am not …",
    "slug": "stop-lying-chat-gpt-prompt",
    "tags": [
      "ChatGPT",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Промпттар бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: STOP LYING CHAT GPT PROMPT\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Промпттар саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: STOP LYING CHAT GPT PROMPT\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Prompt You are an expert who double and triple checks things, you are skeptical and you do research before verification. I am not …",
    "install_cmd": "git clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/humanizer 'Мәтіндегі жасанды интеллект клишелерін жойып, қазақша тірі тілмен қайта жаз'",
    "reqs": "Claude 3.5 Sonnet / Antigravity CLI, Content Skills",
    "prompt_spec": "// WNK Anti-AI Writing Filter Protocol: STOP LYING CHAT GPT PROMPT\n1. Тыйым салынған тіркестер: «қазіргі таңда», «маңызды рөл атқарады», «айта кету керек», «бұл тек бастамасы ғана», «көздің қарашығындай».\n2. Ритм және құрылым: 5-8 сөзден тұратын қысқа екпінді сөйлемдер. Бір ой — бір сөйлем.\n3. Белсенді етістіктер: Тұйық және ырықсыз етіс формаларын азайтып, тікелей әрекетке көшу.\n4. Тексеру: Қазақ тілінің табиғи сөйлеу колориті мен кәсіби фактілерді сақтау."
  },
  {
    "id": 85,
    "title": "AI Агенттер бойынша толық энциклопедия және нұсқаулық",
    "orig_title": "10 Things You Can Do With AI Agents Right Now",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Көп агентті жүйелер (Multi-Agent Swarms), құралдарды шақыру (tool calling) және дербес тапсырма орындау.",
    "slug": "10-things-you-can-do-with-ai-agents-right-now",
    "tags": [
      "Agents",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 10 Things You Can Do With AI Agents Right Now\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 10 Things You Can Do With AI Agents Right Now\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Қарапайым чат-боттардан нақты тапсырмаларды өздігінен орындайтын автономды агенттерге көшу қадамдары.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name 10-things-you-can-do-with-ai-agents-right-now --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: AI Агенттер бойынша толық энциклопедия және нұсқаулық\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 86,
    "title": "Reels трендтерін күнделікті бақылайтын AI агент",
    "orig_title": "Daily Instagram Reels Viral Outlier Spy Agent",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "This agent runs every morning, scans every creator you follow, finds the videos that went way more viral than usual, and drops a f…",
    "slug": "daily-instagram-reels-viral-outlier-spy-agent",
    "tags": [
      "Agents",
      "Video",
      "SMM",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Daily Instagram Reels Viral Outlier Spy Agent\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Daily Instagram Reels Viral Outlier Spy Agent\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "This agent runs every morning, scans every creator you follow, finds the videos that went way more viral than usual, and drops a f…",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug daily-instagram-reels-viral-outlier-spy-agent --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: Reels трендтерін күнделікті бақылайтын AI агент\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 87,
    "title": "AI Агенттер бойынша толық энциклопедия және нұсқаулық",
    "orig_title": "How to Build &amp; Sell AI Agents with Claude Managed Agents",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Көп агентті жүйелер (Multi-Agent Swarms), құралдарды шақыру (tool calling) және дербес тапсырма орындау.",
    "slug": "how-to-build-and-sell-ai-agents-with-claude-managed",
    "tags": [
      "Claude",
      "Agents",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: How to Build &amp; Sell AI Agents with Claude Managed Agents\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: How to Build &amp; Sell AI Agents with Claude Managed Agents\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "Қарапайым чат-боттардан нақты тапсырмаларды өздігінен орындайтын автономды агенттерге көшу қадамдары.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name how-to-build-and-sell-ai-agents-with-claude-managed --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: AI Агенттер бойынша толық энциклопедия және нұсқаулық\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 88,
    "title": "AI жадын 10 минутта дұрыстау және контекст сақтау",
    "orig_title": "How to Fix Your AI Memory in 10 Minutes",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "The exact guide to stop ChatGPT, Claude, and Gemini from getting worse over time. Why Your AI Is Getting Worse Every time you use …",
    "slug": "how-to-fix-your-ai-memory-in-10-minutes",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI жадын 10 минутта дұрыстау және контекст сақтау\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI жадын 10 минутта дұрыстау және контекст сақтау\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "The exact guide to stop ChatGPT, Claude, and Gemini from getting worse over time. Why Your AI Is Getting Worse Every time you use …",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name how-to-fix-your-ai-memory-in-10-minutes --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: AI жадын 10 минутта дұрыстау және контекст сақтау\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 89,
    "title": "Physical AI &amp; Robotics Investment Watchlist",
    "orig_title": "Physical AI &amp; Robotics Investment Watchlist",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "🔌 The Infrastructure Layer (Picks &amp; Shovels) These power everything else on this list. NVDA — NVIDIA The backbone of all physical…",
    "slug": "physical-ai-and-robotics-investment-watchlist",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Physical AI &amp; Robotics Investment Watchlist\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Physical AI &amp; Robotics Investment Watchlist\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "🔌 The Infrastructure Layer (Picks &amp; Shovels) These power everything else on this list. NVDA — NVIDIA The backbone of all physical…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name physical-ai-and-robotics-investment-watchlist --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Physical AI &amp; Robotics Investment Watchlist\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 90,
    "title": "Жылжымайтын мүлік саласына арналған жедел AI жүйесі",
    "orig_title": "Real Estate Speed-to-Lead AI Automation System",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Speed-to-Lead System: Complete Resources 🎯 The $380K Problem We&#x27;re Solving Most real estate agencies lose $380,000 annually due t…",
    "slug": "real-estate-speed-to-lead-ai-automation-system",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Real Estate Speed-to-Lead AI Automation System\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Real Estate Speed-to-Lead AI Automation System\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "Speed-to-Lead System: Complete Resources 🎯 The $380K Problem We&#x27;re Solving Most real estate agencies lose $380,000 annually due t…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name real-estate-speed-to-lead-ai-automation-system --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Жылжымайтын мүлік саласына арналған жедел AI жүйесі\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 91,
    "title": "The AI Automation Agency Playbook for 2026 + Secret Sauce",
    "orig_title": "The AI Automation Agency Playbook for 2026 + Secret Sauce",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "The AI Automation Agency Playbook for 2026 Why 90% of agencies will fail — and what the surviving 10% are doing differently 👋 You…",
    "slug": "the-ai-automation-agency-playbook-for-2026-secre",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: The AI Automation Agency Playbook for 2026 + Secret Sauce\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: The AI Automation Agency Playbook for 2026 + Secret Sauce\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "The AI Automation Agency Playbook for 2026 Why 90% of agencies will fail — and what the surviving 10% are doing differently 👋 You…",
    "install_cmd": "pip install anthropic litellm playwright schedule requests rich\nplaywright install chromium\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/content-skills",
    "exec_cmd": "python -m workflows.runner --playbook the-ai-automation-agency-playbook-for-2026-secre --config config.yaml",
    "reqs": "Python 3.10+, Playwright, LiteLLM, Claude API, Notion API",
    "prompt_spec": "// WNK Operational Playbook & Automation Spec: The AI Automation Agency Playbook for 2026 + Secret Sauce\n1. Модельдер стегі (Three-Model Stack):\n   - Reasoning: Claude 3.5 Sonnet (архитектура, логика және рефакторинг).\n   - Fast Triage: Gemini 2.0 Flash (жылдам дерек іздеу, веб-парсинг).\n   - Multimodal & OCR: GPT-4o (суреттер мен скриншоттарды талдау).\n2. Автоматтандыру циклдері: Күнделікті мониторинг -> Мәліметтерді өңдеу -> Нәтижені Telegram/Notion базасына жіберу.\n3. Қателерге төзімділік: Exponential backoff (3 қайталау) және жүйелік логтарды сақтау."
  },
  {
    "id": 92,
    "title": "Instagram үшін вирустық тақырыптарды зерттейтін бот",
    "orig_title": "Viral IG Bot Researcher",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "N8N file (sauce) What It Does Send one message to Telegram. Get a full competitor analysis report back. &quot;Analyze my Instagram comp…",
    "slug": "viral-ig-bot-researcher",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Viral IG Bot Researcher\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Viral IG Bot Researcher\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "N8N file (sauce) What It Does Send one message to Telegram. Get a full competitor analysis report back. &quot;Analyze my Instagram comp…",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name viral-ig-bot-researcher --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Instagram үшін вирустық тақырыптарды зерттейтін бот\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 93,
    "title": "Алғашқы автономды AI контент жүйеңіз: толық нұсқаулық",
    "orig_title": "Your first AI Content System  (Full Guide)",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Апталық контент-жоспарды, посттарды, сценарийлер мен визуалдарды 1 сағатта дайындау жүйесі.",
    "slug": "your-first-ai-content-system-full-guide",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Алғашқы AI контент жүйеңіз: толық нұсқаулық  (Full Guide)\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Алғашқы AI контент жүйеңіз: толық нұсқаулық  (Full Guide)\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "5 мин оқу",
    "desc": "Тақырып іздеу, дәйектеу, жазу және бейімдеу кезеңдерін автоматтандыратын кешенді құрылым.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name your-first-ai-content-system-full-guide --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Алғашқы автономды AI контент жүйеңіз: толық нұсқаулық\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 94,
    "title": "Second Brain: барлық ақпарат пен білімді AI көмегімен басқару",
    "orig_title": "Your Second Brain Full In-Depth Setup Guide",
    "category": "Жүйелер мен Агенттер",
    "date": "2026",
    "excerpt": "Оқыған кітаптарды, мақалаларды, идеяларды бір орталыққа жинап, олардан лезде жауап алу жүйесі.",
    "slug": "your-second-brain-full-in-depth-setup-guide",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Жүйелер мен Агенттер бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Екінші ми (Second Brain): AI арқылы ақпаратты сақтау\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Жүйелер мен Агенттер саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Екінші ми (Second Brain): AI арқылы ақпаратты сақтау\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "6 мин оқу",
    "desc": "Obsidian, Notion және Claude интеграциясы арқылы жеке цифрлық білім қорын қалыптастыру.",
    "install_cmd": "pip install anthropic playwright beautifulsoup4\ngit clone https://github.com/artishertekuly-bit/content-skills.git ~/.gemini/config/skills/content-skills",
    "exec_cmd": "/agent-run --name your-second-brain-full-in-depth-setup-guide --auto-approve false",
    "reqs": "Claude Code 1.0+, Antigravity CLI, Python 3.10+, Playwright",
    "prompt_spec": "// WNK AI Agent Architecture Spec: Second Brain: барлық ақпарат пен білімді AI көмегімен басқару\n1. Мақсат (Objective): Қолданушының берілген тапсырмасын адам араласуынсыз 100% орындап шығу.\n2. Құралдар (Tools): File System (read/edit/write), Terminal (run_command), Web Search (fetch/browse).\n3. Шешім қабылдау циклі (ReAct Loop):\n   - Ойлану (Thought): Ағымдағы жағдай мен келесі қадамды айқындау.\n   - Әрекет (Action): Құралды шақырып, нақты команданы орындау.\n   - Бақылау (Observation): Нәтижені тексеріп, қателерді түзету.\n4. Қауіпсіздік шектеуі: Сыртқы жүйелерге зиян келтірмейтін қатаң sandbox режимі."
  },
  {
    "id": 95,
    "title": "📘 The Gemini 3 Visualization Playbook",
    "orig_title": "📘 The Gemini 3 Visualization Playbook",
    "category": "Видео және Монтаж",
    "date": "2026",
    "excerpt": "How to turn complex business ideas into interactive simulations in seconds. 💡 How to use this Playbook This guide allows you to b…",
    "slug": "the-gemini-3-visualization-playbook",
    "tags": [
      "AI Tools",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: 📘 The Gemini 3 Visualization Playbook\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: 📘 The Gemini 3 Visualization Playbook\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "7 мин оқу",
    "desc": "How to turn complex business ideas into interactive simulations in seconds. 💡 How to use this Playbook This guide allows you to b…",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug the-gemini-3-visualization-playbook --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: 📘 The Gemini 3 Visualization Playbook\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 96,
    "title": "AI арқылы видео аватар мен дауыс клон жасау нұсқаулығы - Headsfield + Cling AI",
    "orig_title": "AI Video Clone Guide - Headsfield + Cling AI",
    "category": "Видео және Монтаж",
    "date": "2026",
    "excerpt": "Complete step-by-step tutorial to clone any person&#x27;s appearance in your videos 🎯 What This Guide Does Transform any video of your…",
    "slug": "ai-video-clone-guide-headsfield-cling-ai",
    "tags": [
      "Video",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: AI арқылы видео аватар мен дауыс клон жасау нұсқаулығы - Headsfield + Cling AI\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: AI арқылы видео аватар мен дауыс клон жасау нұсқаулығы - Headsfield + Cling AI\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "3 мин оқу",
    "desc": "Complete step-by-step tutorial to clone any person&#x27;s appearance in your videos 🎯 What This Guide Does Transform any video of your…",
    "install_cmd": "brew install ffmpeg node\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills\ncd ~/claude-animation-skills && npm install",
    "exec_cmd": "/render-video --slug ai-video-clone-guide-headsfield-cling-ai --quality high --aspect 9:16",
    "reqs": "ffmpeg, Node.js 20+, Claude Code / Python 3.10+",
    "prompt_spec": "// WNK Production Video Pipeline: AI арқылы видео аватар мен дауыс клон жасау нұсқаулығы - Headsfield + Cling AI\n1. Ингест: Бастапқы видеоны 9:16 қауіпсіз аймаққа (Instagram/TikTok safe zone) бейімдеу.\n2. Аудио баланс: Дауысты -3dB деңгейіне дейін компрессиялап, фондық музыканы -22dB төмендету.\n3. Визуалды екпіндер: Түйінді терминдер экранда 0.8 секундқа графикалық плашка ретінде шығуын қамтамасыз ету."
  },
  {
    "id": 97,
    "title": "Claude × Higgsfield Seedance 2.0 — Full Setup Guide",
    "orig_title": "Claude × Higgsfield Seedance 2.0 — Full Setup Guide",
    "category": "Видео және Монтаж",
    "date": "2026",
    "excerpt": "What This Does Claude Code uses the Playwright MCP to control your browser and automate video generation on Higgsfield. You descri…",
    "slug": "claude-higgsfield-seedance-2-0-full-setup-guid",
    "tags": [
      "Claude",
      "WNK"
    ],
    "steps": [
      "1-қадам: Құралдар мен кітапханаларды дайындау (Видео және Монтаж бағыты бойынша).",
      "2-қадам: Промпт немесе конфигурацияны өз мақсатыңызға қарай бейімдеу.",
      "3-қадам: Модельге нақты контекст пен шектеулерді (constraints) беру.",
      "4-қадам: Нәтижені сапалық бақылаудан өткізіп, бірден өндіріске енгізу."
    ],
    "prompt": "// WNK Education: Claude × Higgsfield Seedance 2.0 — Full Setup Guide\n// Мақсаты: Кәсіби нәтиже алуға арналған нақты шеберлік промпты\nСіз Видео және Монтаж саласының жоғары деңгейлі маманысыз. \nМына міндетті сапалы, артық сөзсіз әрі нақты нәтижеге бағыттап орындаңыз:\n- Бағыт: Claude × Higgsfield Seedance 2.0 — Full Setup Guide\n- Формат: Практикалық қадамдар, нақты мысалдар және код/нұсқаулық.\n- Тіл: Қазақ тілінде (кәсіби, түсінікті және логикалық).",
    "readTime": "4 мин оқу",
    "desc": "What This Does Claude Code uses the Playwright MCP to control your browser and automate video generation on Higgsfield. You descri…",
    "install_cmd": "pip install higgsfield requests pillow\ngit clone https://github.com/artishertekuly-bit/claude-animation-skills.git ~/claude-animation-skills",
    "exec_cmd": "/seedance-prompt 'Cinematic slow glide across cyberpunk Astana, neon reflection, 4k ultra-detailed' --camera '35mm slow push'",
    "reqs": "Higgsfield AI, Seedance 2.0, Midjourney v6.1, Topaz Video AI",
    "prompt_spec": "// WNK Higgsfield & Seedance 2.0 Generation Spec: Claude × Higgsfield Seedance 2.0 — Full Setup Guide\n1. Бастапқы кадр (Init frame): Midjourney v6.1 арқылы 16:9 немесе 9:16 қатынасында фотореалистік кадр дайындау.\n2. Қозғалыс параметрлері: Camera motion: Slow Pan Left (Speed: 3), Motion Strength: 0.65, FPS: 24.\n3. Seedance 2.0 өңдеуі: Кадрлар арасындағы морфингті реттеп, кейіпкердің бет-бейнесінің тұрақтылығын (identity consistency) 95%-дан төмендетпеу.\n4. Пост-өңдеу: Topaz Video AI арқылы 1080p -> 4K 60fps деңгейіне дейін масштабтау."
  }
];
