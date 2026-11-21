(() => {
  const I18N = {
    ru: {
      search: 'Поиск', newChat: 'Новый чат', pinned: 'Закреплённые', recent: 'Недавние', noChats: 'Нет чатов',
      settings: 'Настройки', models: 'Модели', check: 'Проверить', checking: 'Проверка...', refresh: 'Обновить',
      tasks: 'Задачи', projectChip: 'Проект (ZIP)', apiReady: 'API подключён', apiMissing: 'API не настроен',
      dropFiles: 'Перетащите файлы сюда', askGemini: 'Спросите Gemini...', searchChip: 'Поиск',
      disclaimer: 'Gemini может допускать ошибки. Проверяйте важную информацию.',
      clearDone: 'Очистить выполненные', newTask: 'Новая задача...', preview: 'Предпросмотр', code: 'Код',
      copy: 'Копировать', copied: 'Скопировано ✓', regen: 'Повторить', openCanvas: 'Открыть в Canvas',
      thinkingToggle: 'Показать ход мыслей', thinkingNow: 'Думаю...', taskPlan: 'План задач',
      addToTasks: 'Добавить в Задачи', added: 'Добавлено ✓',
      tasksEmpty: 'Список задач пуст. Включите режим «Задачи» или добавьте задачу вручную.',
      downloadZip: 'Скачать project.zip', filesCount: 'файлов', tokenStatsTitle: 'Расход токенов', tokensChatIn: 'Чат (вход)', tokensChatOut: 'Чат (выход)', tokensChatTotal: 'Чат (всего)', tokensToday: 'За сегодня', tokensAllTime: 'За всё время',
      workspaceTitle: 'Ваше пространство', tabCustom: 'Кастомизация', tabConnection: 'Подключение',
      tabModels: 'Модели и генерация', tabInterface: 'Интерфейс и ввод', tabData: 'Сброс и данные', tabAbout: 'О приложении',
      styleTitle: 'Стиль', styleDesc: 'Выберите авторское оформление или настройте детали под себя.', reset: 'Сбросить',
      themeObsidian: 'Obsidian Spark', themeObsidianDesc: 'Глубокий графит и мягкое свечение',
      themeAurora: 'Aurora Nebula', themeAuroraDesc: 'Космический индиго и полупрозрачное стекло',
      themeSolaris: 'Solaris Light', themeSolarisDesc: 'Чистый дневной свет и чёткая типографика',
      themeCyber: 'Cyber Synth', themeCyberDesc: 'Неоновый циан и острые грани',
      themeMatcha: 'Matcha Zen', themeMatchaDesc: 'Спокойный лесной сланец для долгой работы',
      themeVellum: 'Ink & Vellum', themeVellumDesc: 'Тёплый пергамент и книжные засечки',
      fineTune: 'Тонкая настройка', accentColor: 'Акцентный цвет', fontSize: 'Размер текста',
      cornerRadius: 'Скругление углов', chatWidth: 'Ширина ленты', greetingLabel: 'Текст приветствия',
      show: 'Показать', hide: 'Скрыть', keyHint: 'Ключ из', baseUrlLabel: 'Базовый URL API',
      streamingTitle: 'Потоковый вывод (Streaming SSE)', streamingDesc: 'Ответ появляется по мере генерации, слово за словом',
      sysPromptLabel: 'Системная инструкция', sysPromptPh: 'Дополнительные инструкции для модели...',
      addCustomModel: 'Добавить свою модель (ID)', enterSendTitle: 'Отправка сообщения по Enter',
      enterSendDesc: 'Если выключено, отправка по Ctrl+Enter (Enter перенесёт строку)',
      showTokensTitle: 'Показывать счётчик токенов', showTokensDesc: 'Отображать расход токенов под ответом модели',
      autoCanvasTitle: 'Автооткрытие Canvas для HTML/SVG', autoCanvasDesc: 'Открывать панель предпросмотра сразу после генерации',
      storageNote: 'Путь хранения:', exportBackup: 'Экспорт резервной копии (JSON)', importBackup: 'Импорт из JSON',
      clearHistory: 'Очистить историю чатов', aboutVer: 'Версия 1.3.0 • Прямой клиент для Gemini API',
      scSend: 'отправить сообщение', scNew: 'новый чат', scSettings: 'открыть настройки',
      scSidebar: 'скрыть/показать боковую панель', saveApply: 'Сохранить и применить',
      availUnknown: 'Не проверена', availOk: 'Доступна', availBusy: 'Перегрузка (503)',
      availPaid: 'Платная (429)', availLimit: 'Лимит (429)', availNoNet: 'Нет сети', defaultGreeting: 'Привет! Чем помочь?'
    },
    en: {
      search: 'Search', newChat: 'New chat', pinned: 'Pinned', recent: 'Recent', noChats: 'No chats yet',
      settings: 'Settings', models: 'Models', check: 'Check', checking: 'Checking...', refresh: 'Refresh',
      tasks: 'Tasks', projectChip: 'Project (ZIP)', apiReady: 'API connected', apiMissing: 'API not set',
      dropFiles: 'Drop files here', askGemini: 'Ask Gemini...', searchChip: 'Search',
      disclaimer: 'Gemini may display inaccurate info. Double-check important responses.',
      clearDone: 'Clear completed', newTask: 'New task...', preview: 'Preview', code: 'Code',
      copy: 'Copy', copied: 'Copied ✓', regen: 'Regenerate', openCanvas: 'Open in Canvas',
      thinkingToggle: 'Show thinking', thinkingNow: 'Thinking...', taskPlan: 'Task Plan',
      addToTasks: 'Add to Tasks', added: 'Added ✓',
      tasksEmpty: 'No tasks yet. Enable Tasks mode or add a task manually.',
      downloadZip: 'Download project.zip', filesCount: 'files', tokenStatsTitle: 'Token Usage', tokensChatIn: 'Chat (input)', tokensChatOut: 'Chat (output)', tokensChatTotal: 'Chat (total)', tokensToday: 'Today', tokensAllTime: 'All time',
      workspaceTitle: 'Your Workspace', tabCustom: 'Appearance', tabConnection: 'Connection',
      tabModels: 'Models & Generation', tabInterface: 'Interface & Input', tabData: 'Reset & Data', tabAbout: 'About',
      styleTitle: 'Theme Style', styleDesc: 'Pick an original theme or fine-tune the look to your taste.', reset: 'Reset',
      themeObsidian: 'Obsidian Spark', themeObsidianDesc: 'Deep graphite with soft luminous glow',
      themeAurora: 'Aurora Nebula', themeAuroraDesc: 'Cosmic indigo and frosted glass layers',
      themeSolaris: 'Solaris Light', themeSolarisDesc: 'Crisp daylight palette and clean typography',
      themeCyber: 'Cyber Synth', themeCyberDesc: 'Neon cyan and sharp geometric edges',
      themeMatcha: 'Matcha Zen', themeMatchaDesc: 'Calm forest slate for long focus sessions',
      themeVellum: 'Ink & Vellum', themeVellumDesc: 'Warm parchment and editorial serif type',
      fineTune: 'Fine-tuning', accentColor: 'Accent color', fontSize: 'Text size',
      cornerRadius: 'Corner radius', chatWidth: 'Chat width', greetingLabel: 'Welcome greeting',
      show: 'Show', hide: 'Hide', keyHint: 'Key from', baseUrlLabel: 'API Base URL',
      streamingTitle: 'Streaming output (SSE)', streamingDesc: 'Stream model responses token by token in real time',
      sysPromptLabel: 'System Instruction', sysPromptPh: 'Additional instructions for the model...',
      addCustomModel: 'Add custom model (ID)', enterSendTitle: 'Send message on Enter',
      enterSendDesc: 'When off, press Ctrl+Enter to send (Enter adds a newline)',
      showTokensTitle: 'Show token counter', showTokensDesc: 'Display token usage below model responses',
      autoCanvasTitle: 'Auto-open Canvas for HTML/SVG', autoCanvasDesc: 'Open preview panel automatically after code generation',
      storageNote: 'Storage path:', exportBackup: 'Export backup (JSON)', importBackup: 'Import JSON',
      clearHistory: 'Clear chat history', aboutVer: 'Version 1.3.0 • Direct Gemini API client',
      scSend: 'send message', scNew: 'new chat', scSettings: 'open settings',
      scSidebar: 'toggle sidebar', saveApply: 'Save & Apply',
      availUnknown: 'Not checked', availOk: 'Available', availBusy: 'Busy (503)',
      availPaid: 'Paid tier (429)', availLimit: 'Rate limit (429)', availNoNet: 'Offline', defaultGreeting: 'Hello! How can I help?'
    }
  };

  const DEFAULT_MODELS = [
    { id: 'gemini-4-carbon', name: 'Gemini 4 Carbon' },
    { id: 'gemini-4-neon', name: 'Gemini 4 Neon' },
    { id: 'gemini-4-argon', name: 'Gemini 4 Argon' },
    { id: 'gemini-4-hydrogen', name: 'Gemini 4 Hydrogen' },
    { id: 'gemini-3.8-flash', name: 'Gemini 3.8 Flash' },
    { id: 'gemini-3.6-flash', name: 'Gemini 3.6 Flash' },
    { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash-Lite' }
  ];

  const DEFAULT_SETTINGS = {
    lang: 'ru', apiKey: '', baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    model: 'gemini-3.8-flash', systemPrompt: '', temperature: 0.7, topP: 0.95, maxOutputTokens: 8192,
    themePreset: 'gemini-dark', accentColor: '', fontSize: 15, borderRadius: 20, chatWidth: 820, greeting: '',
    streaming: true, enterToSend: true, showTokens: true, autoCanvas: false,
    thinkingEnabled: true, searchGrounding: false, tasksMode: false, projectMode: false,
    customModels: DEFAULT_MODELS
  };

  let state = {
    chats: [], tasks: [], activeChatId: null, settings: { ...DEFAULT_SETTINGS },
    tokenStats: { allTime: 0, today: 0, date: new Date().toISOString().slice(0, 10) }, modelAvailability: {}, pendingAttachments: [], isStreaming: false, abortController: null,
    canvasContent: '', canvasLang: 'text'
  };

  const t = (key) => (I18N[state.settings.lang] || I18N.ru)[key] || key;
  const $ = (id) => document.getElementById(id);
  const el = {
    sidebar: $('sidebar'), btnToggleSidebar: $('btn-toggle-sidebar'), btnOpenSidebar: $('btn-open-sidebar'),
    chatSearch: $('chat-search'), btnNewChat: $('btn-new-chat'), pinnedSection: $('pinned-section'),
    pinnedList: $('pinned-list'), recentList: $('recent-list'), emptyHistory: $('empty-history'),
    btnSettings: $('btn-settings'), btnModelDropdown: $('btn-model-dropdown'), currentModelDot: $('current-model-dot'),
    currentModelLabel: $('current-model-label'), modelMenu: $('model-menu'), modelOptions: $('model-options'),
    btnCheckModels: $('btn-check-models'), btnRefreshModels: $('btn-refresh-models'),
    btnToggleTasksPanel: $('btn-toggle-tasks-panel'), tasksCountBadge: $('tasks-count-badge'),
    btnTokenStats: $('btn-token-stats'), tokenShortTotal: $('token-short-total'), tokenPopover: $('token-popover'), btnResetTokens: $('btn-reset-tokens'), tokChatIn: $('tok-chat-in'), tokChatOut: $('tok-chat-out'), tokChatTotal: $('tok-chat-total'), tokTodayTotal: $('tok-today-total'), tokAllTotal: $('tok-all-total'), btnApiStatus: $('btn-api-status'), apiStatusText: $('api-status-text'),
    btnExportChat: $('btn-export-chat'), btnToggleCanvas: $('btn-toggle-canvas'),
    chatArea: $('chat-area'), welcomeView: $('welcome-view'), welcomeGreeting: $('welcome-greeting'),
    messagesContainer: $('messages-container'), dropOverlay: $('drop-overlay'),
    attachmentsPreview: $('attachments-preview'), promptInput: $('prompt-input'), fileInput: $('file-input'),
    btnAttach: $('btn-attach'), btnToggleProjectMode: $('btn-toggle-project-mode'),
    btnToggleTasksMode: $('btn-toggle-tasks-mode'), btnToggleThinking: $('btn-toggle-thinking'),
    btnToggleSearch: $('btn-toggle-search'), btnSend: $('btn-send'), iconSend: $('icon-send'), iconStop: $('icon-stop'),
    tasksPanel: $('tasks-panel'), tasksPanelCount: $('tasks-panel-count'), btnClearDoneTasks: $('btn-clear-done-tasks'),
    btnCloseTasks: $('btn-close-tasks'), newTaskInput: $('new-task-input'), btnAddTask: $('btn-add-task'),
    tasksListBody: $('tasks-list-body'), canvasPanel: $('canvas-panel'), canvasLangBadge: $('canvas-lang-badge'),
    canvasCodeView: $('canvas-code-view'), canvasPreviewFrame: $('canvas-preview-frame'),
    btnCanvasPreview: $('btn-canvas-preview'), btnCanvasCode: $('btn-canvas-code'),
    btnCanvasCopy: $('btn-canvas-copy'), btnCanvasClose: $('btn-canvas-close'),
    settingsModal: $('settings-modal'), btnCloseSettings: $('btn-close-settings'), btnResetTheme: $('btn-reset-theme'),
    inputAccentColor: $('input-accent-color'), inputFontSize: $('input-font-size'), valFontSize: $('val-font-size'),
    inputRadius: $('input-radius'), valRadius: $('val-radius'), inputChatWidth: $('input-chat-width'), valChatWidth: $('val-chat-width'),
    inputGreeting: $('input-greeting'), inputApiKey: $('input-api-key'), btnToggleKeyVis: $('btn-toggle-key-vis'),
    inputBaseUrl: $('input-base-url'), inputStreaming: $('input-streaming'), inputSystemPrompt: $('input-system-prompt'),
    inputTemperature: $('input-temperature'), valTemperature: $('val-temperature'),
    inputTopP: $('input-top-p'), valTopP: $('val-top-p'), inputMaxTokens: $('input-max-tokens'),
    inputCustomModelId: $('input-custom-model-id'), btnAddCustomModel: $('btn-add-custom-model'),
    inputEnterSend: $('input-enter-send'), inputShowTokens: $('input-show-tokens'), inputAutoCanvas: $('input-auto-canvas'),
    btnExportAll: $('btn-export-all'), btnImportAll: $('btn-import-all'), importFileInput: $('import-file-input'),
    btnClearAll: $('btn-clear-all'), btnSaveSettings: $('btn-save-settings')
  };

  // Pure-JS Zero-Dependency ZIP Builder (Store method + CRC32)
  const CRC_TABLE = (() => {
    const tbl = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      tbl[n] = c >>> 0;
    }
    return tbl;
  })();

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  }

  function buildZipUint8Array(files) {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    files.forEach((f) => {
      const nameBytes = encoder.encode(f.path.replace(/^\/+/, ''));
      const dataBytes = encoder.encode(f.content);
      const crc = crc32(dataBytes);

      const lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true);
      lh.setUint16(4, 20, true);
      lh.setUint16(6, 0x0800, true); // UTF-8
      lh.setUint16(8, 0, true); // Store
      lh.setUint16(10, 0, true);
      lh.setUint16(12, 0, true);
      lh.setUint32(14, crc, true);
      lh.setUint32(18, dataBytes.length, true);
      lh.setUint32(22, dataBytes.length, true);
      lh.setUint16(26, nameBytes.length, true);
      lh.setUint16(28, 0, true);

      localParts.push(new Uint8Array(lh.buffer), nameBytes, dataBytes);

      const ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true);
      ch.setUint16(4, 20, true);
      ch.setUint16(6, 20, true);
      ch.setUint16(8, 0x0800, true);
      ch.setUint16(10, 0, true);
      ch.setUint16(12, 0, true);
      ch.setUint16(14, 0, true);
      ch.setUint32(16, crc, true);
      ch.setUint32(20, dataBytes.length, true);
      ch.setUint32(24, dataBytes.length, true);
      ch.setUint16(28, nameBytes.length, true);
      ch.setUint16(30, 0, true);
      ch.setUint16(32, 0, true);
      ch.setUint16(34, 0, true);
      ch.setUint16(36, 0, true);
      ch.setUint32(38, 0, true);
      ch.setUint32(42, offset, true);

      centralParts.push(new Uint8Array(ch.buffer), nameBytes);
      offset += 30 + nameBytes.length + dataBytes.length;
    });

    const centralSize = centralParts.reduce((a, b) => a + b.length, 0);
    const eocd = new DataView(new ArrayBuffer(22));
    eocd.setUint32(0, 0x06054b50, true);
    eocd.setUint16(4, 0, true);
    eocd.setUint16(6, 0, true);
    eocd.setUint16(8, files.length, true);
    eocd.setUint16(10, files.length, true);
    eocd.setUint32(12, centralSize, true);
    eocd.setUint32(16, offset, true);
    eocd.setUint16(20, 0, true);

    const all = [...localParts, ...centralParts, new Uint8Array(eocd.buffer)];
    const total = all.reduce((a, b) => a + b.length, 0);
    const out = new Uint8Array(total);
    let pos = 0;
    all.forEach((chunk) => { out.set(chunk, pos); pos += chunk.length; });
    return out;
  }

  async function saveProjectZip(files, defaultName = 'project.zip') {
    const zipBytes = buildZipUint8Array(files);
    if (window.desktopAPI && window.desktopAPI.isElectron) {
      let binary = '';
      for (let i = 0; i < zipBytes.length; i += 0x8000) binary += String.fromCharCode.apply(null, zipBytes.subarray(i, i + 0x8000));
      await window.desktopAPI.saveFile({ defaultName, base64: btoa(binary) });
    } else {
      const blob = new Blob([zipBytes], { type: 'application/zip' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = defaultName;
      a.click();
      URL.revokeObjectURL(a.href);
    }
  }

  // Persistence
  async function loadPersistedData() {
    if (window.desktopAPI && window.desktopAPI.isElectron) return await window.desktopAPI.loadStore();
    try {
      const raw = localStorage.getItem('gemini_desktop_store');
      return raw ? JSON.parse(raw) : { chats: [], tasks: [], settings: {} };
    } catch { return { chats: [], tasks: [], settings: {} }; }
  }

  async function persistData() {
    const payload = { chats: state.chats, tasks: state.tasks, tokenStats: state.tokenStats, settings: state.settings };
    if (window.desktopAPI && window.desktopAPI.isElectron) { await window.desktopAPI.saveStore(payload); return; }
    try { localStorage.setItem('gemini_desktop_store', JSON.stringify(payload)); } catch (_) {}
  }

  async function init() {
    const saved = await loadPersistedData();
    state.chats = Array.isArray(saved.chats) ? saved.chats : [];
    state.tasks = Array.isArray(saved.tasks) ? saved.tasks : [];
    const todayStr = new Date().toISOString().slice(0, 10);
    if (saved.tokenStats) {
      state.tokenStats = { allTime: saved.tokenStats.allTime || 0, today: saved.tokenStats.date === todayStr ? (saved.tokenStats.today || 0) : 0, date: todayStr };
    }
    state.settings = { ...DEFAULT_SETTINGS, ...(saved.settings || {}) };
    if (!Array.isArray(state.settings.customModels) || state.settings.customModels.length === 0) {
      state.settings.customModels = DEFAULT_MODELS;
    }

    applyLanguage();
    applyCustomization();
    sortModelsList();
    renderModelOptions();
    updateStatusIndicators();
    renderChatList();
    renderTasks();
    renderActiveChat();
    renderTokenStats();
    bindEvents();

    // Auto-refresh & auto-check models on startup
    if (state.settings.apiKey && state.settings.apiKey.trim()) {
      await refreshModelsFromAPI(true);
      await checkAllModelsAvailability(true);
    }
  }


  function formatCompactNum(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return String(n);
  }

  function renderTokenStats() {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (state.tokenStats.date !== todayStr) {
      state.tokenStats.date = todayStr;
      state.tokenStats.today = 0;
    }
    const chat = getActiveChat();
    let chatIn = 0, chatOut = 0, chatTot = 0;
    if (chat) {
      chat.messages.forEach((m) => {
        if (m.role === 'model') {
          chatIn += m.promptTokens || 0;
          chatOut += m.outputTokens || 0;
          chatTot += m.tokens || ((m.promptTokens || 0) + (m.outputTokens || 0));
        }
      });
    }
    el.tokenShortTotal.textContent = formatCompactNum(chatTot || state.tokenStats.today);
    el.tokChatIn.textContent = chatIn.toLocaleString();
    el.tokChatOut.textContent = chatOut.toLocaleString();
    el.tokChatTotal.textContent = chatTot.toLocaleString();
    el.tokTodayTotal.textContent = (state.tokenStats.today || 0).toLocaleString();
    el.tokAllTotal.textContent = (state.tokenStats.allTime || 0).toLocaleString();
  }

  function applyLanguage() {
    const lang = state.settings.lang || 'ru';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    document.querySelectorAll('.lang-btn').forEach((btn) => { btn.classList.toggle('active', btn.dataset.lang === lang); });
    el.inputGreeting.placeholder = t('defaultGreeting');
    updateStatusIndicators();
    renderModelOptions();
    renderTasks();
    renderActiveChat();
  }

  function applyCustomization() {
    const s = state.settings;
    const root = document.documentElement;
    root.setAttribute('data-theme', s.themePreset || 'gemini-dark');
    if (s.accentColor) root.style.setProperty('--accent', s.accentColor);
    else root.style.removeProperty('--accent');
    root.style.setProperty('--font-size-base', `${s.fontSize || 15}px`);
    root.style.setProperty('--radius-base', `${s.borderRadius ?? 20}px`);
    root.style.setProperty('--chat-max-width', `${s.chatWidth || 820}px`);
    el.welcomeGreeting.textContent = (s.greeting && s.greeting.trim()) ? s.greeting.trim() : t('defaultGreeting');
    document.querySelectorAll('.theme-card').forEach((card) => card.classList.toggle('active', card.dataset.preset === (s.themePreset || 'gemini-dark')));
  }

  // Model freshness + availability sorting
  function modelFreshnessScore(id) {
    const s = id.toLowerCase();
    const verMatch = s.match(/gemini-(\d+(?:\.\d+)?)/);
    const ver = verMatch ? parseFloat(verMatch[1]) : 0;
    let tier = 0;
    if (s.includes('carbon')) tier = 0.9;
    else if (s.includes('neon')) tier = 0.85;
    else if (s.includes('argon')) tier = 0.8;
    else if (s.includes('hydrogen')) tier = 0.75;
    else if (s.includes('pro')) tier = 0.7;
    else if (s.includes('flash') && !s.includes('lite')) tier = 0.6;
    else if (s.includes('lite')) tier = 0.4;
    if (s.includes('tts') || s.includes('image') || s.includes('live') || s.includes('embedding') || s.includes('robotics') || s.includes('transcribe')) {
      tier -= 5;
    }
    return ver * 10 + tier;
  }

  function availRank(status) {
    if (status === 'ok') return 0;
    if (status === 'busy') return 1;
    if (status === 'unknown' || status === 'checking') return 2;
    return 3;
  }

  function sortModelsList() {
    state.settings.customModels.sort((a, b) => {
      const ra = availRank(getModelAvail(a.id).status);
      const rb = availRank(getModelAvail(b.id).status);
      if (ra !== rb) return ra - rb;
      return modelFreshnessScore(b.id) - modelFreshnessScore(a.id);
    });
  }

  function getModelAvail(modelId) {
    return state.modelAvailability[modelId] || { status: 'unknown', label: t('availUnknown') };
  }

  function setModelAvail(modelId, status, label) {
    state.modelAvailability[modelId] = { status, label };
    sortModelsList();
    renderModelOptions();
    updateStatusIndicators();
  }

  function updateStatusIndicators() {
    const hasKey = Boolean(state.settings.apiKey && state.settings.apiKey.trim());
    el.btnApiStatus.classList.toggle('ready', hasKey);
    el.apiStatusText.textContent = hasKey ? t('apiReady') : t('apiMissing');

    const currentModel = state.settings.customModels.find((m) => m.id === state.settings.model);
    el.currentModelLabel.textContent = currentModel ? currentModel.name : state.settings.model;
    el.currentModelDot.className = `avail-dot ${getModelAvail(state.settings.model).status}`;

    el.btnToggleProjectMode.classList.toggle('active', Boolean(state.settings.projectMode));
    el.btnToggleTasksMode.classList.toggle('active', Boolean(state.settings.tasksMode));
    el.btnToggleThinking.classList.toggle('active', Boolean(state.settings.thinkingEnabled));
    el.btnToggleSearch.classList.toggle('active', Boolean(state.settings.searchGrounding));
  }

  function renderModelOptions() {
    el.modelOptions.innerHTML = '';
    state.settings.customModels.forEach((m) => {
      const avail = getModelAvail(m.id);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'model-option' + (m.id === state.settings.model ? ' selected' : '');
      btn.innerHTML = `
        <div class="model-option-main">
          <span class="avail-dot ${avail.status}"></span>
          <div class="model-option-text">
            <span class="model-option-name">${escapeHtml(m.name)}</span>
            <span class="model-option-id">${escapeHtml(m.id)}</span>
          </div>
        </div>
        <span class="avail-badge ${avail.status}">${escapeHtml(avail.label)}</span>
      `;
      btn.addEventListener('click', () => {
        state.settings.model = m.id;
        el.modelMenu.classList.add('hidden');
        updateStatusIndicators();
        renderModelOptions();
        persistData();
      });
      el.modelOptions.appendChild(btn);
    });
  }

  async function checkAllModelsAvailability(silent = false) {
    const apiKey = state.settings.apiKey.trim();
    if (!apiKey) { if (!silent) openSettings('tab-connection'); return; }
    el.btnCheckModels.textContent = t('checking');
    const base = state.settings.baseUrl.replace(/\/+$/, '');

    // Check top 15 text-capable models so we don't spam rate limits
    const candidates = state.settings.customModels.slice(0, 15);
    candidates.forEach((m) => {
      state.modelAvailability[m.id] = { status: 'checking', label: t('checking') };
    });
    renderModelOptions();
    updateStatusIndicators();

    await Promise.all(
      candidates.map(async (m) => {
        try {
          const res = await fetch(`${base}/models/${encodeURIComponent(m.id)}:generateContent?key=${encodeURIComponent(apiKey)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: 'hi' }] }], generationConfig: { maxOutputTokens: 1 } })
          });
          if (res.ok) state.modelAvailability[m.id] = { status: 'ok', label: t('availOk') };
          else if (res.status === 503) state.modelAvailability[m.id] = { status: 'busy', label: t('availBusy') };
          else if (res.status === 429) {
            const txt = await res.text();
            state.modelAvailability[m.id] = { status: 'unavailable', label: txt.includes('limit: 0') ? t('availPaid') : t('availLimit') };
          } else {
            state.modelAvailability[m.id] = { status: 'unavailable', label: `HTTP ${res.status}` };
          }
        } catch {
          state.modelAvailability[m.id] = { status: 'unavailable', label: t('availNoNet') };
        }
      })
    );

    sortModelsList();
    // If current model is unavailable, auto-select best available model
    if (getModelAvail(state.settings.model).status === 'unavailable') {
      const bestOk = state.settings.customModels.find((m) => getModelAvail(m.id).status === 'ok');
      if (bestOk) state.settings.model = bestOk.id;
    }

    el.btnCheckModels.textContent = t('check');
    renderModelOptions();
    updateStatusIndicators();
    await persistData();
  }

  async function refreshModelsFromAPI(silent = false) {
    const apiKey = state.settings.apiKey.trim();
    if (!apiKey) { if (!silent) openSettings('tab-connection'); return; }
    el.btnRefreshModels.textContent = '...';
    try {
      const base = state.settings.baseUrl.replace(/\/+$/, '');
      const res = await fetch(`${base}/models?key=${encodeURIComponent(apiKey)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const models = (data.models || [])
        .filter((m) => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes('generateContent'))
        .filter((m) => {
          const id = m.name.toLowerCase();
          return !id.includes('tts') && !id.includes('image') && !id.includes('embedding');
        })
        .map((m) => ({ id: m.name.replace(/^models\//, ''), name: m.displayName || m.name.replace(/^models\//, '') }));
      if (models.length > 0) {
        state.settings.customModels = models;
        sortModelsList();
        if (!models.some((m) => m.id === state.settings.model)) state.settings.model = state.settings.customModels[0].id;
        renderModelOptions();
        updateStatusIndicators();
        await persistData();
      }
    } catch (err) {
      if (!silent) alert(err.message);
    } finally {
      el.btnRefreshModels.textContent = t('refresh');
    }
  }

  // Tasks & Project Parsers
  function addTask(title) {
    const clean = title.trim();
    if (!clean) return;
    state.tasks.unshift({ id: 'task_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6), title: clean, done: false });
    renderTasks();
    persistData();
  }

  function renderTasks() {
    const activeCount = state.tasks.filter((x) => !x.done).length;
    el.tasksCountBadge.textContent = String(activeCount);
    el.tasksCountBadge.classList.toggle('hidden', activeCount === 0);
    el.tasksPanelCount.textContent = String(state.tasks.length);
    el.tasksListBody.innerHTML = '';
    if (state.tasks.length === 0) { el.tasksListBody.innerHTML = `<div class="empty-history">${escapeHtml(t('tasksEmpty'))}</div>`; return; }

    state.tasks.forEach((task) => {
      const card = document.createElement('div');
      card.className = 'task-card' + (task.done ? ' done' : '');
      const left = document.createElement('div');
      left.className = 'task-card-left';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = Boolean(task.done);
      cb.addEventListener('change', () => { task.done = cb.checked; renderTasks(); persistData(); });
      const txt = document.createElement('span');
      txt.className = 'task-card-text';
      txt.textContent = task.title;
      left.append(cb, txt);

      const actions = document.createElement('div');
      actions.className = 'task-card-actions';
      const runBtn = document.createElement('button');
      runBtn.className = 'mini-btn';
      runBtn.textContent = '▶';
      runBtn.addEventListener('click', () => {
        el.promptInput.value = (state.settings.lang === 'en' ? 'Help me complete this task: ' : 'Помоги выполнить задачу: ') + task.title;
        el.promptInput.focus();
        sendMessage();
      });
      const delBtn = document.createElement('button');
      delBtn.className = 'mini-btn';
      delBtn.textContent = '✕';
      delBtn.addEventListener('click', () => { state.tasks = state.tasks.filter((x) => x.id !== task.id); renderTasks(); persistData(); });
      actions.append(runBtn, delBtn);
      card.append(left, actions);
      el.tasksListBody.appendChild(card);
    });
  }

  function extractTasksFromResponse(text) {
    const match = text.match(/```tasks\s*([\s\S]*?)```/);
    if (!match) return [];
    return match[1].split('\n').map((l) => l.replace(/^[-*\d.)\s\[\]x]+/i, '').trim()).filter(Boolean);
  }

  function extractProjectFiles(text) {
    const files = [];
    const regex = /```file:([^\n]+)\n([\s\S]*?)```/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      files.push({ path: m[1].trim(), content: m[2].replace(/\n$/, '') });
    }
    return files;
  }

  // Chats
  function getActiveChat() { return state.chats.find((c) => c.id === state.activeChatId) || null; }

  function createNewChat() {
    if (state.isStreaming) stopGeneration();
    state.activeChatId = null;
    state.pendingAttachments = [];
    renderAttachmentsPreview();
    renderChatList();
    renderActiveChat();
    el.promptInput.focus();
  }

  function renderChatList() {
    const query = el.chatSearch.value.trim().toLowerCase();
    const filtered = state.chats.filter((c) => !query || (c.title || '').toLowerCase().includes(query));
    const pinned = filtered.filter((c) => c.pinned);
    const recent = filtered.filter((c) => !c.pinned);
    el.pinnedList.innerHTML = '';
    el.recentList.innerHTML = '';
    el.pinnedSection.classList.toggle('hidden', pinned.length === 0);
    el.emptyHistory.classList.toggle('hidden', filtered.length > 0);
    pinned.forEach((c) => el.pinnedList.appendChild(buildChatListItem(c)));
    recent.forEach((c) => el.recentList.appendChild(buildChatListItem(c)));
  }

  function buildChatListItem(chat) {
    const li = document.createElement('li');
    li.className = 'chat-item' + (chat.id === state.activeChatId ? ' active' : '');
    const titleSpan = document.createElement('span');
    titleSpan.className = 'chat-item-title';
    titleSpan.textContent = chat.title || t('newChat');
    const actions = document.createElement('div');
    actions.className = 'chat-item-actions';
    const pinBtn = document.createElement('button');
    pinBtn.className = 'mini-btn';
    pinBtn.textContent = chat.pinned ? '★' : '☆';
    pinBtn.addEventListener('click', (e) => { e.stopPropagation(); chat.pinned = !chat.pinned; renderChatList(); persistData(); });
    const renameBtn = document.createElement('button');
    renameBtn.className = 'mini-btn';
    renameBtn.textContent = '✎';
    renameBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const next = prompt(t('newChat') + ':', chat.title || '');
      if (next !== null && next.trim()) { chat.title = next.trim(); renderChatList(); persistData(); }
    });
    const delBtn = document.createElement('button');
    delBtn.className = 'mini-btn';
    delBtn.textContent = '🗑';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.chats = state.chats.filter((x) => x.id !== chat.id);
      if (state.activeChatId === chat.id) state.activeChatId = null;
      renderChatList();
      renderActiveChat();
      persistData();
    });
    actions.append(pinBtn, renameBtn, delBtn);
    li.append(titleSpan, actions);
    li.addEventListener('click', () => {
      if (state.isStreaming) stopGeneration();
      state.activeChatId = chat.id;
      renderChatList();
      renderActiveChat();
    });
    return li;
  }

  function renderActiveChat() {
    const chat = getActiveChat();
    if (!chat || chat.messages.length === 0) {
      el.welcomeView.classList.remove('hidden');
      el.messagesContainer.classList.add('hidden');
      el.messagesContainer.innerHTML = '';
      return;
    }
    el.welcomeView.classList.add('hidden');
    el.messagesContainer.classList.remove('hidden');
    el.messagesContainer.innerHTML = '';
    chat.messages.forEach((msg, idx) => el.messagesContainer.appendChild(buildMessageRow(msg, idx, chat.messages.length - 1)));
    scrollToBottom();
    renderTokenStats();
  }

  function buildMessageRow(msg, idx, lastIdx) {
    const row = document.createElement('div');
    row.className = `message-row ${msg.role}`;

    if (msg.role === 'user') {
      if (Array.isArray(msg.attachments) && msg.attachments.length > 0) {
        const attWrap = document.createElement('div');
        attWrap.className = 'user-attachments';
        msg.attachments.forEach((att) => {
          if (att.mimeType && att.mimeType.startsWith('image/')) {
            const img = document.createElement('img');
            img.className = 'att-thumb';
            img.src = `data:${att.mimeType};base64,${att.base64}`;
            attWrap.appendChild(img);
          } else {
            const chip = document.createElement('span');
            chip.className = 'att-chip';
            chip.textContent = `📎 ${att.name}`;
            attWrap.appendChild(chip);
          }
        });
        row.appendChild(attWrap);
      }
      const bubble = document.createElement('div');
      bubble.className = 'user-bubble';
      bubble.textContent = msg.text || '';
      row.appendChild(bubble);
      return row;
    }

    const modelWrap = document.createElement('div');
    modelWrap.className = 'model-row';
    const isLastStreaming = state.isStreaming && idx === lastIdx;
    const avatar = document.createElement('div');
    avatar.className = 'model-avatar' + (isLastStreaming ? ' spinning' : '');
    avatar.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="var(--accent)" d="M12 1C12 7.07 7.07 12 1 12C7.07 12 12 16.93 12 23C12 16.93 16.93 12 23 12C16.93 12 12 7.07 12 1Z" /></svg>`;

    const content = document.createElement('div');
    content.className = 'model-content';

    if (msg.thinking) {
      const thinkBox = document.createElement('div');
      thinkBox.className = 'thinking-box';
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'thinking-toggle';
      toggle.innerHTML = `<span>${escapeHtml(t('thinkingToggle'))}</span><span>▾</span>`;
      const body = document.createElement('div');
      body.className = 'thinking-body hidden';
      body.textContent = msg.thinking;
      toggle.addEventListener('click', () => body.classList.toggle('hidden'));
      thinkBox.append(toggle, body);
      content.appendChild(thinkBox);
    }

    let cleanDisplay = (msg.text || '').replace(/```tasks\s*[\s\S]*?```/g, '');
    if (Array.isArray(msg.projectFiles) && msg.projectFiles.length > 0) {
      cleanDisplay = cleanDisplay.replace(/```file:[^\n]+\n[\s\S]*?```/g, '');
    }
    cleanDisplay = cleanDisplay.trim();

    const mdDiv = document.createElement('div');
    mdDiv.className = 'markdown-body';
    mdDiv.innerHTML = renderMarkdown(cleanDisplay || (isLastStreaming ? t('thinkingNow') : ''));
    attachCodeBlockHandlers(mdDiv);
    content.appendChild(mdDiv);

    if (Array.isArray(msg.projectFiles) && msg.projectFiles.length > 0) {
      content.appendChild(buildProjectCard(msg.projectFiles));
    }

    if (Array.isArray(msg.extractedTasks) && msg.extractedTasks.length > 0) {
      content.appendChild(buildInlineTaskCard(msg.extractedTasks));
    }

    if (!isLastStreaming) {
      const actions = document.createElement('div');
      actions.className = 'msg-actions';
      const copyBtn = document.createElement('button');
      copyBtn.className = 'msg-action-btn';
      copyBtn.textContent = t('copy');
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(msg.text || '');
        copyBtn.textContent = t('copied');
        setTimeout(() => (copyBtn.textContent = t('copy')), 1500);
      });
      const regenBtn = document.createElement('button');
      regenBtn.className = 'msg-action-btn';
      regenBtn.textContent = t('regen');
      regenBtn.addEventListener('click', () => regenerateFrom(idx));
      actions.append(copyBtn, regenBtn);

      if (state.settings.showTokens && msg.tokens) {
        const meta = document.createElement('span');
        meta.className = 'token-meta';
        meta.textContent = `${msg.tokens} tok`;
        actions.appendChild(meta);
      }
      content.appendChild(actions);
    }

    modelWrap.append(avatar, content);
    row.appendChild(modelWrap);
    return row;
  }

  function buildProjectCard(files) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const header = document.createElement('div');
    header.className = 'project-card-header';
    header.innerHTML = `
      <div class="project-card-title">
        <span>📦 project.zip</span>
        <span class="badge">${files.length} ${escapeHtml(t('filesCount'))}</span>
      </div>
    `;
    const dlBtn = document.createElement('button');
    dlBtn.className = 'primary-btn small-btn';
    dlBtn.textContent = t('downloadZip');
    dlBtn.addEventListener('click', () => saveProjectZip(files, 'project.zip'));
    header.appendChild(dlBtn);

    const list = document.createElement('div');
    list.className = 'project-files-list';
    files.forEach((f) => {
      const row = document.createElement('div');
      row.className = 'project-file-row';
      row.innerHTML = `<span>📄 ${escapeHtml(f.path)}</span><span class="project-file-size">${f.content.length} B</span>`;
      row.addEventListener('click', () => {
        const ext = f.path.split('.').pop().toLowerCase();
        openCanvas(f.content, ext);
      });
      list.appendChild(row);
    });

    card.append(header, list);
    return card;
  }

  function buildInlineTaskCard(taskItems) {
    const card = document.createElement('div');
    card.className = 'inline-task-card';
    const header = document.createElement('div');
    header.className = 'inline-task-header';
    header.innerHTML = `<span>${escapeHtml(t('taskPlan'))}</span>`;
    const addAllBtn = document.createElement('button');
    addAllBtn.className = 'text-btn';
    addAllBtn.textContent = t('addToTasks');
    addAllBtn.addEventListener('click', () => {
      taskItems.forEach((item) => addTask(item));
      el.tasksPanel.classList.remove('hidden');
      el.canvasPanel.classList.add('hidden');
      addAllBtn.textContent = t('added');
      addAllBtn.disabled = true;
    });
    header.appendChild(addAllBtn);

    const ul = document.createElement('ul');
    ul.className = 'inline-task-list';
    taskItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'inline-task-item';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.addEventListener('change', () => li.classList.toggle('done', cb.checked));
      const span = document.createElement('span');
      span.textContent = item;
      li.append(cb, span);
      ul.appendChild(li);
    });
    card.append(header, ul);
    return card;
  }

  function scrollToBottom() { el.messagesContainer.scrollTop = el.messagesContainer.scrollHeight; }
  function escapeHtml(str) { return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function renderMarkdown(raw) {
    if (!raw) return '';
    const codeBlocks = [];
    let text = raw.replace(/```([a-zA-Z0-9_+-]*)\n([\s\S]*?)```/g, (_m, lang, code) => {
      const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
      codeBlocks.push({ lang: lang || 'text', code: code.replace(/\n$/, '') });
      return token;
    });
    text = escapeHtml(text);

    text = text.replace(/((?:^\|.+\|\n?)+)/gm, (block) => {
      const rows = block.trim().split('\n').filter((r) => r.trim());
      if (rows.length < 2 || !/^\|[\s:-|]+\|$/.test(rows[1].trim())) return block;
      const parseRow = (r) => r.trim().slice(1, -1).split('|').map((c) => c.trim());
      const headers = parseRow(rows[0]);
      const bodyRows = rows.slice(2).map(parseRow);
      let html = '<table><thead><tr>' + headers.map((h) => `<th>${formatInline(h)}</th>`).join('') + '</tr></thead><tbody>';
      bodyRows.forEach((cols) => { html += '<tr>' + cols.map((c) => `<td>${formatInline(c)}</td>`).join('') + '</tr>'; });
      return html + '</tbody></table>';
    });

    text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    text = text.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    text = text.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    text = text.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
    text = text.replace(/(?:^(?:- |\* )(.+)\n?)+/gm, (m) => `<ul>${m.trim().split('\n').map((l) => `<li>${formatInline(l.replace(/^(?:- |\* )/, ''))}</li>`).join('')}</ul>`);
    text = text.replace(/(?:^\d+\. (.+)\n?)+/gm, (m) => `<ol>${m.trim().split('\n').map((l) => `<li>${formatInline(l.replace(/^\d+\. /, ''))}</li>`).join('')}</ol>`);

    const blocks = text.split(/\n{2,}/).map((part) => {
      const tPart = part.trim();
      if (!tPart) return '';
      if (/^<(h1|h2|h3|ul|ol|table|blockquote)|^@@CODEBLOCK_/.test(tPart)) return tPart;
      return `<p>${formatInline(tPart).replace(/\n/g, '<br>')}</p>`;
    });

    let out = blocks.join('\n');
    codeBlocks.forEach((cb, i) => {
      const encoded = encodeURIComponent(cb.code);
      const html = `
        <div class="code-block-wrap">
          <div class="code-block-header">
            <span>${escapeHtml(cb.lang)}</span>
            <div class="code-block-actions">
              <button class="text-btn btn-open-canvas" data-lang="${escapeHtml(cb.lang)}" data-code="${encoded}">${escapeHtml(t('openCanvas'))}</button>
              <button class="text-btn btn-copy-code" data-code="${encoded}">${escapeHtml(t('copy'))}</button>
            </div>
          </div>
          <pre><code>${escapeHtml(cb.code)}</code></pre>
        </div>
      `;
      out = out.replace(`@@CODEBLOCK_${i}@@`, html);
    });
    return out;
  }

  function formatInline(s) {
    return s.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  }

  function attachCodeBlockHandlers(container) {
    container.querySelectorAll('.btn-copy-code').forEach((btn) => {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(decodeURIComponent(btn.dataset.code || ''));
        btn.textContent = t('copied');
        setTimeout(() => (btn.textContent = t('copy')), 1500);
      });
    });
    container.querySelectorAll('.btn-open-canvas').forEach((btn) => {
      btn.addEventListener('click', () => openCanvas(decodeURIComponent(btn.dataset.code || ''), btn.dataset.lang || 'text'));
    });
  }

  function openCanvas(code, lang) {
    state.canvasContent = code;
    state.canvasLang = lang.toLowerCase();
    el.tasksPanel.classList.add('hidden');
    el.canvasPanel.classList.remove('hidden');
    el.canvasLangBadge.textContent = state.canvasLang;
    el.canvasCodeView.querySelector('code').textContent = code;
    const isPreviewable = state.canvasLang === 'html' || state.canvasLang === 'svg';
    el.btnCanvasPreview.classList.toggle('hidden', !isPreviewable);
    el.btnCanvasCode.classList.toggle('hidden', !isPreviewable);
    if (isPreviewable) showCanvasPreview(); else showCanvasCode();
  }
  function showCanvasPreview() { el.canvasCodeView.classList.add('hidden'); el.canvasPreviewFrame.classList.remove('hidden'); el.canvasPreviewFrame.srcdoc = state.canvasContent; }
  function showCanvasCode() { el.canvasPreviewFrame.classList.add('hidden'); el.canvasCodeView.classList.remove('hidden'); }

  function detectMime(name, fallbackType) {
    if (fallbackType) return fallbackType;
    const ext = name.split('.').pop().toLowerCase();
    const map = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif', pdf: 'application/pdf', mp3: 'audio/mp3', wav: 'audio/wav', mp4: 'video/mp4', txt: 'text/plain', md: 'text/markdown', csv: 'text/csv', json: 'application/json', py: 'text/x-python', js: 'text/javascript', html: 'text/html', css: 'text/css' };
    return map[ext] || 'text/plain';
  }
  function isBinaryInlineMime(mime) { return mime.startsWith('image/') || mime.startsWith('audio/') || mime.startsWith('video/') || mime === 'application/pdf'; }

  function formatFileSize(bytes) {
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  async function addBrowserFiles(fileList) {
    for (const file of fileList) {
      const buf = await file.arrayBuffer();
      const mimeType = detectMime(file.name || 'clipboard.png', file.type);
      const name = file.name && file.name !== 'image.png' ? file.name : `screenshot_${new Date().toTimeString().slice(0, 8).replace(/:/g, '-')}.png`;
      state.pendingAttachments.push({ name, mimeType, base64: arrayBufferToBase64(buf), size: file.size });
    }
    renderAttachmentsPreview();
  }
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(binary);
  }
  function renderAttachmentsPreview() {
    el.attachmentsPreview.innerHTML = '';
    if (state.pendingAttachments.length === 0) { el.attachmentsPreview.classList.add('hidden'); return; }
    el.attachmentsPreview.classList.remove('hidden');
    state.pendingAttachments.forEach((att, idx) => {
      const item = document.createElement('div');
      item.className = 'preview-item';
      if (att.mimeType.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = `data:${att.mimeType};base64,${att.base64}`;
        item.appendChild(img);
      }
      const name = document.createElement('span');
      const sz = formatFileSize(att.size);
      name.textContent = sz ? `${att.name} (${sz})` : att.name;
      const rm = document.createElement('button');
      rm.className = 'preview-remove';
      rm.textContent = '×';
      rm.addEventListener('click', () => { state.pendingAttachments.splice(idx, 1); renderAttachmentsPreview(); });
      item.append(name, rm);
      el.attachmentsPreview.appendChild(item);
    });
  }

  async function sendMessage() {
    if (state.isStreaming) { stopGeneration(); return; }
    const text = el.promptInput.value.trim();
    if (!text && state.pendingAttachments.length === 0) return;
    if (!state.settings.apiKey.trim()) { openSettings('tab-connection'); return; }

    let chat = getActiveChat();
    if (!chat) {
      chat = { id: 'chat_' + Date.now(), title: (text || t('newChat')).slice(0, 48), pinned: false, updatedAt: Date.now(), messages: [] };
      state.chats.unshift(chat);
      state.activeChatId = chat.id;
    }

    chat.messages.push({ role: 'user', text, attachments: [...state.pendingAttachments] });
    chat.updatedAt = Date.now();
    el.promptInput.value = '';
    el.promptInput.style.height = 'auto';
    state.pendingAttachments = [];
    renderAttachmentsPreview();
    renderChatList();
    await runModelTurn(chat);
  }

  async function regenerateFrom(modelMsgIndex) {
    const chat = getActiveChat();
    if (!chat || state.isStreaming) return;
    chat.messages = chat.messages.slice(0, modelMsgIndex);
    await runModelTurn(chat);
  }

  function stopGeneration() {
    if (state.abortController) { state.abortController.abort(); state.abortController = null; }
    state.isStreaming = false;
    updateSendButton();
    renderActiveChat();
    persistData();
  }
  function updateSendButton() {
    el.iconSend.classList.toggle('hidden', state.isStreaming);
    el.iconStop.classList.toggle('hidden', !state.isStreaming);
  }

  function buildApiContents(messages) {
    return messages.map((m) => {
      if (m.role === 'user') {
        const parts = [];
        if (Array.isArray(m.attachments)) {
          m.attachments.forEach((att) => {
            if (isBinaryInlineMime(att.mimeType)) parts.push({ inlineData: { mimeType: att.mimeType, data: att.base64 } });
            else {
              try {
                const decoded = decodeURIComponent(escape(atob(att.base64)));
                parts.push({ text: `\n[${att.name}]\n\`\`\`\n${decoded}\n\`\`\`\n` });
              } catch { parts.push({ inlineData: { mimeType: 'text/plain', data: att.base64 } }); }
            }
          });
        }
        if (m.text) parts.push({ text: m.text });
        return { role: 'user', parts };
      }
      const parts = [];
      if (m.text) {
        const part = { text: m.text };
        if (m.thoughtSignature) part.thoughtSignature = m.thoughtSignature;
        parts.push(part);
      }
      return { role: 'model', parts: parts.length ? parts : [{ text: '' }] };
    });
  }

  async function runModelTurn(chat) {
    const modelId = state.settings.model;
    const modelMsg = { role: 'model', text: '', thinking: '', thoughtSignature: null, extractedTasks: [], projectFiles: [], tokens: null };
    chat.messages.push(modelMsg);

    state.isStreaming = true;
    state.abortController = new AbortController();
    updateSendButton();
    renderActiveChat();

    const base = state.settings.baseUrl.replace(/\/+$/, '');
    const useStream = state.settings.streaming !== false;
    const endpoint = useStream ? 'streamGenerateContent?alt=sse&' : 'generateContent?';
    const url = `${base}/models/${encodeURIComponent(modelId)}:${endpoint}key=${encodeURIComponent(state.settings.apiKey.trim())}`;

    const body = {
      contents: buildApiContents(chat.messages.slice(0, -1)),
      generationConfig: {
        temperature: Number(state.settings.temperature),
        topP: Number(state.settings.topP || 0.95),
        maxOutputTokens: Number(state.settings.maxOutputTokens)
      }
    };

    const sysParts = [];
    if (state.settings.systemPrompt && state.settings.systemPrompt.trim()) sysParts.push(state.settings.systemPrompt.trim());
    if (state.settings.projectMode) {
      sysParts.push(
        'Project Builder Mode is active. Output every project file using exact fenced blocks:\n```file:path/to/filename.ext\n<full file contents>\n```\nThe client will automatically package all ```file:...``` blocks into a downloadable project.zip archive. Keep your explanation concise.'
      );
    }
    if (state.settings.tasksMode) {
      sysParts.push('Tasks mode enabled. Break down the user goal into actionable steps and append a ```tasks\\n- [ ] Step 1\\n- [ ] Step 2\\n``` block at the end.');
    }
    if (sysParts.length > 0) body.systemInstruction = { parts: [{ text: sysParts.join('\n\n') }] };
    if (state.settings.thinkingEnabled) body.generationConfig.thinkingConfig = { includeThoughts: true };
    if (state.settings.searchGrounding) body.tools = [{ google_search: {} }];

    try {
      const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: state.abortController.signal });

      if (!response.ok) {
        const errText = await response.text();
        if (response.status === 503) setModelAvail(modelId, 'busy', t('availBusy'));
        else if (response.status === 429) setModelAvail(modelId, 'unavailable', errText.includes('limit: 0') ? t('availPaid') : t('availLimit'));
        else setModelAvail(modelId, 'unavailable', `HTTP ${response.status}`);
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }

      setModelAvail(modelId, 'ok', t('availOk'));

      if (!useStream) {
        const data = await response.json();
        const parts = data?.candidates?.[0]?.content?.parts || [];
        parts.forEach((p) => {
          if (p.thoughtSignature) modelMsg.thoughtSignature = p.thoughtSignature;
          if (p.thought === true && p.text) modelMsg.thinking += p.text;
          else if (p.text) modelMsg.text += p.text;
        });
        if (data?.usageMetadata) {
          modelMsg.promptTokens = data.usageMetadata.promptTokenCount || 0;
          modelMsg.outputTokens = data.usageMetadata.candidatesTokenCount || 0;
          modelMsg.tokens = data.usageMetadata.totalTokenCount || (modelMsg.promptTokens + modelMsg.outputTokens);
        }
      } else {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';
          for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line.startsWith('data:')) continue;
            const jsonStr = line.slice(5).trim();
            if (!jsonStr || jsonStr === '[DONE]') continue;
            try {
              const chunk = JSON.parse(jsonStr);
              const parts = chunk?.candidates?.[0]?.content?.parts || [];
              for (const p of parts) {
                if (p.thoughtSignature) modelMsg.thoughtSignature = p.thoughtSignature;
                if (p.thought === true && p.text) modelMsg.thinking += p.text;
                else if (p.text) modelMsg.text += p.text;
              }
              if (chunk?.usageMetadata) {
                modelMsg.promptTokens = chunk.usageMetadata.promptTokenCount || modelMsg.promptTokens || 0;
                modelMsg.outputTokens = chunk.usageMetadata.candidatesTokenCount || modelMsg.outputTokens || 0;
                modelMsg.tokens = chunk.usageMetadata.totalTokenCount || (modelMsg.promptTokens + modelMsg.outputTokens);
              }
              updateLastModelBubble(modelMsg);
            } catch (_) {}
          }
        }
      }

      if (modelMsg.tokens) {
        state.tokenStats.today = (state.tokenStats.today || 0) + modelMsg.tokens;
        state.tokenStats.allTime = (state.tokenStats.allTime || 0) + modelMsg.tokens;
        renderTokenStats();
      }
      if (modelMsg.text) {
        modelMsg.projectFiles = extractProjectFiles(modelMsg.text);
        if (state.settings.tasksMode) modelMsg.extractedTasks = extractTasksFromResponse(modelMsg.text);
      }
      if (state.settings.autoCanvas && modelMsg.text) {
        const htmlMatch = modelMsg.text.match(/```(html|svg)\n([\s\S]*?)```/i);
        if (htmlMatch) openCanvas(htmlMatch[2], htmlMatch[1]);
      }
    } catch (err) {
      if (err.name !== 'AbortError') modelMsg.text += `\n\n**API Error:** ${err.message}`;
    } finally {
      state.isStreaming = false;
      state.abortController = null;
      updateSendButton();
      renderActiveChat();
      await persistData();
    }
  }

  function updateLastModelBubble(modelMsg) {
    const lastRow = el.messagesContainer.lastElementChild;
    if (!lastRow) return;
    const cleanDisplay = (modelMsg.text || '').replace(/```tasks\s*[\s\S]*?```/g, '').trim();
    const mdDiv = lastRow.querySelector('.markdown-body');
    if (mdDiv) { mdDiv.innerHTML = renderMarkdown(cleanDisplay || t('thinkingNow')); attachCodeBlockHandlers(mdDiv); }
    if (modelMsg.thinking) {
      const thinkBody = lastRow.querySelector('.thinking-body');
      if (!thinkBody) { renderActiveChat(); return; }
      thinkBody.textContent = modelMsg.thinking;
    }
    scrollToBottom();
    renderTokenStats();
  }

  function switchSettingsTab(tabId) {
    document.querySelectorAll('.settings-tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tabId));
    document.querySelectorAll('.settings-pane').forEach((p) => p.classList.toggle('active', p.id === tabId));
  }

  function openSettings(tabId = 'tab-custom') {
    const s = state.settings;
    el.inputApiKey.value = s.apiKey || '';
    el.inputBaseUrl.value = s.baseUrl || DEFAULT_SETTINGS.baseUrl;
    el.inputStreaming.checked = s.streaming !== false;
    el.inputSystemPrompt.value = s.systemPrompt || '';
    el.inputTemperature.value = s.temperature ?? 0.7;
    el.valTemperature.textContent = el.inputTemperature.value;
    el.inputTopP.value = s.topP ?? 0.95;
    el.valTopP.textContent = el.inputTopP.value;
    el.inputMaxTokens.value = s.maxOutputTokens ?? 8192;
    el.inputFontSize.value = s.fontSize ?? 15;
    el.valFontSize.textContent = el.inputFontSize.value;
    el.inputRadius.value = s.borderRadius ?? 20;
    el.valRadius.textContent = el.inputRadius.value;
    el.inputChatWidth.value = s.chatWidth ?? 820;
    el.valChatWidth.textContent = el.inputChatWidth.value;
    el.inputGreeting.value = s.greeting || '';
    el.inputAccentColor.value = s.accentColor || '#a8c7fa';
    el.inputEnterSend.checked = s.enterToSend !== false;
    el.inputShowTokens.checked = s.showTokens !== false;
    el.inputAutoCanvas.checked = Boolean(s.autoCanvas);

    switchSettingsTab(tabId);
    applyCustomization();
    el.settingsModal.classList.remove('hidden');
  }

  async function saveSettings() {
    const s = state.settings;
    const prevKey = s.apiKey;
    s.apiKey = el.inputApiKey.value.trim();
    s.baseUrl = el.inputBaseUrl.value.trim() || DEFAULT_SETTINGS.baseUrl;
    s.streaming = el.inputStreaming.checked;
    s.systemPrompt = el.inputSystemPrompt.value;
    s.temperature = parseFloat(el.inputTemperature.value) || 0.7;
    s.topP = parseFloat(el.inputTopP.value) || 0.95;
    s.maxOutputTokens = parseInt(el.inputMaxTokens.value, 10) || 8192;
    s.fontSize = parseInt(el.inputFontSize.value, 10) || 15;
    s.borderRadius = parseInt(el.inputRadius.value, 10);
    s.chatWidth = parseInt(el.inputChatWidth.value, 10) || 820;
    s.greeting = el.inputGreeting.value;
    s.enterToSend = el.inputEnterSend.checked;
    s.showTokens = el.inputShowTokens.checked;
    s.autoCanvas = el.inputAutoCanvas.checked;

    applyCustomization();
    updateStatusIndicators();
    el.settingsModal.classList.add('hidden');
    await persistData();

    if (s.apiKey && s.apiKey !== prevKey) {
      await refreshModelsFromAPI(true);
      await checkAllModelsAvailability(true);
    }
  }

  async function exportCurrentChat() {
    const chat = getActiveChat();
    if (!chat) return;
    const md = chat.messages.map((m) => `## ${m.role === 'user' ? 'User' : 'Gemini'}\n\n${m.text || ''}`).join('\n\n---\n\n');
    const filename = `${(chat.title || 'gemini-chat').replace(/[^\wа-яА-ЯёЁ-]+/g, '_')}.md`;
    if (window.desktopAPI && window.desktopAPI.isElectron) await window.desktopAPI.saveFile({ defaultName: filename, content: md });
    else downloadBlob(filename, md, 'text/markdown');
  }

  function downloadBlob(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function bindEvents() {
    el.btnToggleSidebar.addEventListener('click', () => { el.sidebar.classList.add('collapsed'); el.btnOpenSidebar.classList.remove('hidden'); });
    el.btnOpenSidebar.addEventListener('click', () => { el.sidebar.classList.remove('collapsed'); el.btnOpenSidebar.classList.add('hidden'); });
    el.chatSearch.addEventListener('input', renderChatList);
    el.btnNewChat.addEventListener('click', createNewChat);

    el.btnSettings.addEventListener('click', () => openSettings('tab-custom'));
    el.btnApiStatus.addEventListener('click', () => openSettings('tab-connection'));
    el.btnCloseSettings.addEventListener('click', () => el.settingsModal.classList.add('hidden'));
    el.btnSaveSettings.addEventListener('click', saveSettings);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => { state.settings.lang = btn.dataset.lang; applyLanguage(); applyCustomization(); persistData(); });
    });

    document.querySelectorAll('.settings-tab').forEach((tab) => tab.addEventListener('click', () => switchSettingsTab(tab.dataset.tab)));
    document.querySelectorAll('.theme-card').forEach((card) => {
      card.addEventListener('click', () => { state.settings.themePreset = card.dataset.preset; state.settings.accentColor = ''; applyCustomization(); });
    });

    el.btnResetTheme.addEventListener('click', () => {
      state.settings.themePreset = 'gemini-dark'; state.settings.accentColor = ''; state.settings.fontSize = 15;
      state.settings.borderRadius = 20; state.settings.chatWidth = 820; state.settings.greeting = '';
      openSettings('tab-custom');
    });

    el.inputAccentColor.addEventListener('input', () => { state.settings.accentColor = el.inputAccentColor.value; applyCustomization(); });
    document.querySelectorAll('.swatch').forEach((sw) => sw.addEventListener('click', () => { state.settings.accentColor = sw.dataset.color; el.inputAccentColor.value = sw.dataset.color; applyCustomization(); }));

    el.inputFontSize.addEventListener('input', () => { el.valFontSize.textContent = el.inputFontSize.value; state.settings.fontSize = parseInt(el.inputFontSize.value, 10); applyCustomization(); });
    el.inputRadius.addEventListener('input', () => { el.valRadius.textContent = el.inputRadius.value; state.settings.borderRadius = parseInt(el.inputRadius.value, 10); applyCustomization(); });
    el.inputChatWidth.addEventListener('input', () => { el.valChatWidth.textContent = el.inputChatWidth.value; state.settings.chatWidth = parseInt(el.inputChatWidth.value, 10); applyCustomization(); });
    el.inputTemperature.addEventListener('input', () => { el.valTemperature.textContent = el.inputTemperature.value; });
    el.inputTopP.addEventListener('input', () => { el.valTopP.textContent = el.inputTopP.value; });

    el.btnToggleKeyVis.addEventListener('click', () => {
      const isPass = el.inputApiKey.type === 'password';
      el.inputApiKey.type = isPass ? 'text' : 'password';
      el.btnToggleKeyVis.textContent = isPass ? t('hide') : t('show');
    });

    el.btnAddCustomModel.addEventListener('click', () => {
      const id = el.inputCustomModelId.value.trim();
      if (!id) return;
      if (!state.settings.customModels.some((m) => m.id === id)) {
        state.settings.customModels.unshift({ id, name: id });
        state.settings.model = id;
        sortModelsList();
        renderModelOptions();
        updateStatusIndicators();
        persistData();
      }
      el.inputCustomModelId.value = '';
    });

    el.btnTokenStats.addEventListener('click', (e) => {
      e.stopPropagation();
      renderTokenStats();
      el.tokenPopover.classList.toggle('hidden');
    });
    el.btnResetTokens.addEventListener('click', () => {
      state.tokenStats = { allTime: 0, today: 0, date: new Date().toISOString().slice(0, 10) };
      renderTokenStats();
      persistData();
    });
    document.addEventListener('click', (e) => {
      if (!el.tokenPopover.contains(e.target) && !el.btnTokenStats.contains(e.target)) el.tokenPopover.classList.add('hidden');
    });
    el.btnModelDropdown.addEventListener('click', (e) => { e.stopPropagation(); el.modelMenu.classList.toggle('hidden'); });
    document.addEventListener('click', (e) => { if (!el.modelMenu.contains(e.target) && !el.btnModelDropdown.contains(e.target)) el.modelMenu.classList.add('hidden'); });

    el.btnCheckModels.addEventListener('click', () => checkAllModelsAvailability(false));
    el.btnRefreshModels.addEventListener('click', () => refreshModelsFromAPI(false));
    el.btnExportChat.addEventListener('click', exportCurrentChat);

    el.btnToggleTasksPanel.addEventListener('click', () => { el.canvasPanel.classList.add('hidden'); el.tasksPanel.classList.toggle('hidden'); el.btnToggleTasksPanel.classList.toggle('active', !el.tasksPanel.classList.contains('hidden')); });
    el.btnCloseTasks.addEventListener('click', () => { el.tasksPanel.classList.add('hidden'); el.btnToggleTasksPanel.classList.remove('active'); });
    el.btnAddTask.addEventListener('click', () => { addTask(el.newTaskInput.value); el.newTaskInput.value = ''; });
    el.newTaskInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { addTask(el.newTaskInput.value); el.newTaskInput.value = ''; } });
    el.btnClearDoneTasks.addEventListener('click', () => { state.tasks = state.tasks.filter((x) => !x.done); renderTasks(); persistData(); });

    el.btnToggleCanvas.addEventListener('click', () => { el.tasksPanel.classList.add('hidden'); el.btnToggleTasksPanel.classList.remove('active'); el.canvasPanel.classList.toggle('hidden'); });
    el.btnCanvasClose.addEventListener('click', () => el.canvasPanel.classList.add('hidden'));
    el.btnCanvasPreview.addEventListener('click', showCanvasPreview);
    el.btnCanvasCode.addEventListener('click', showCanvasCode);
    el.btnCanvasCopy.addEventListener('click', () => { navigator.clipboard.writeText(state.canvasContent || ''); el.btnCanvasCopy.textContent = t('copied'); setTimeout(() => (el.btnCanvasCopy.textContent = t('copy')), 1500); });

    el.promptInput.addEventListener('input', () => { el.promptInput.style.height = 'auto'; el.promptInput.style.height = Math.min(el.promptInput.scrollHeight, 200) + 'px'; });
    el.promptInput.addEventListener('keydown', (e) => {
      const enterSend = state.settings.enterToSend !== false;
      if (enterSend && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
      else if (!enterSend && e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); sendMessage(); }
    });
    el.btnSend.addEventListener('click', sendMessage);

    el.btnToggleProjectMode.addEventListener('click', () => { state.settings.projectMode = !state.settings.projectMode; updateStatusIndicators(); persistData(); });
    el.btnToggleTasksMode.addEventListener('click', () => { state.settings.tasksMode = !state.settings.tasksMode; updateStatusIndicators(); persistData(); });
    el.btnToggleThinking.addEventListener('click', () => { state.settings.thinkingEnabled = !state.settings.thinkingEnabled; updateStatusIndicators(); persistData(); });
    el.btnToggleSearch.addEventListener('click', () => { state.settings.searchGrounding = !state.settings.searchGrounding; updateStatusIndicators(); persistData(); });

    el.btnAttach.addEventListener('click', async () => {
      if (window.desktopAPI && window.desktopAPI.isElectron) {
        const files = await window.desktopAPI.openFiles();
        files.forEach((f) => state.pendingAttachments.push({ name: f.name, mimeType: detectMime(f.name), base64: f.base64, size: f.size }));
        renderAttachmentsPreview();
      } else el.fileInput.click();
    });
    el.fileInput.addEventListener('change', async () => { if (el.fileInput.files.length > 0) { await addBrowserFiles(el.fileInput.files); el.fileInput.value = ''; } });

    let dragDepth = 0;
    document.addEventListener('dragenter', (e) => {
      if (e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files')) {
        e.preventDefault();
        dragDepth++;
        el.dropOverlay.classList.remove('hidden');
      }
    });
    document.addEventListener('dragover', (e) => {
      if (e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files')) e.preventDefault();
    });
    document.addEventListener('dragleave', () => {
      dragDepth = Math.max(0, dragDepth - 1);
      if (dragDepth === 0) el.dropOverlay.classList.add('hidden');
    });
    document.addEventListener('drop', async (e) => {
      e.preventDefault();
      dragDepth = 0;
      el.dropOverlay.classList.add('hidden');
      if (e.dataTransfer?.files?.length) {
        await addBrowserFiles(e.dataTransfer.files);
        el.promptInput.focus();
      }
    });

    el.btnExportAll.addEventListener('click', () => downloadBlob('gemini-backup.json', JSON.stringify({ chats: state.chats, tasks: state.tasks, settings: state.settings }, null, 2), 'application/json'));
    el.btnImportAll.addEventListener('click', () => el.importFileInput.click());
    el.importFileInput.addEventListener('change', async () => {
      const f = el.importFileInput.files[0];
      if (!f) return;
      try {
        const parsed = JSON.parse(await f.text());
        if (Array.isArray(parsed.chats)) state.chats = parsed.chats;
        if (Array.isArray(parsed.tasks)) state.tasks = parsed.tasks;
        renderChatList();
        renderTasks();
        renderActiveChat();
        await persistData();
      } catch { alert('Invalid JSON'); }
      el.importFileInput.value = '';
    });
    el.btnClearAll.addEventListener('click', async () => {
      if (confirm(t('clearHistory') + '?')) { state.chats = []; state.activeChatId = null; renderChatList(); renderActiveChat(); await persistData(); }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && !el.settingsModal.classList.contains('hidden')) el.settingsModal.classList.add('hidden');
      if ((e.ctrlKey || e.metaKey) && e.code === 'Comma') { e.preventDefault(); openSettings('tab-custom'); }
      if ((e.ctrlKey || e.metaKey) && e.code === 'KeyN') { e.preventDefault(); createNewChat(); }
      if ((e.ctrlKey || e.metaKey) && e.code === 'KeyB') {
        e.preventDefault();
        const collapsed = el.sidebar.classList.toggle('collapsed');
        el.btnOpenSidebar.classList.toggle('hidden', !collapsed);
      }
    });

    // Global Ctrl+V paste support for screenshots, images, and copied files
    document.addEventListener('paste', async (e) => {
      const cd = e.clipboardData;
      if (!cd) return;
      const filesToAttach = [];
      if (cd.files && cd.files.length > 0) {
        for (const f of cd.files) filesToAttach.push(f);
      } else if (cd.items) {
        for (const item of cd.items) {
          if (item.kind === 'file') {
            const f = item.getAsFile();
            if (f) filesToAttach.push(f);
          }
        }
      }
      if (filesToAttach.length > 0) {
        e.preventDefault();
        await addBrowserFiles(filesToAttach);
        el.promptInput.focus();
      }
    });
  }

  init();
})();
