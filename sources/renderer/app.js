(() => {
  const DEFAULT_MODELS = [
    { id: 'gemini-4-hydrogen', name: 'Gemini 4 Hydrogen' },
    { id: 'gemini-4-neon', name: 'Gemini 4 Neon' },
    { id: 'gemini-4-argon', name: 'Gemini 4 Argon' },
    { id: 'gemini-4-carbon', name: 'Gemini 4 Carbon' },
    { id: 'gemini-3.8-flash', name: 'Gemini 3.8 Flash' }
  ];

  const DEFAULT_SETTINGS = {
    apiKey: '',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    model: 'gemini-4-hydrogen',
    systemPrompt: '',
    temperature: 0.7,
    maxOutputTokens: 8192,
    theme: 'dark',
    thinkingEnabled: true,
    searchGrounding: false,
    customModels: DEFAULT_MODELS
  };

  let state = {
    chats: [],
    activeChatId: null,
    settings: { ...DEFAULT_SETTINGS },
    pendingAttachments: [],
    isStreaming: false,
    abortController: null,
    canvasMode: 'code',
    canvasContent: '',
    canvasLang: 'text'
  };

  // DOM helpers
  const $ = (id) => document.getElementById(id);
  const el = {
    sidebar: $('sidebar'),
    btnToggleSidebar: $('btn-toggle-sidebar'),
    btnOpenSidebar: $('btn-open-sidebar'),
    chatSearch: $('chat-search'),
    btnNewChat: $('btn-new-chat'),
    pinnedSection: $('pinned-section'),
    pinnedList: $('pinned-list'),
    recentList: $('recent-list'),
    emptyHistory: $('empty-history'),
    btnThemeToggle: $('btn-theme-toggle'),
    themeLabel: $('theme-label'),
    btnSettings: $('btn-settings'),
    btnModelDropdown: $('btn-model-dropdown'),
    currentModelLabel: $('current-model-label'),
    modelMenu: $('model-menu'),
    modelOptions: $('model-options'),
    btnRefreshModels: $('btn-refresh-models'),
    btnApiStatus: $('btn-api-status'),
    apiStatusText: $('api-status-text'),
    btnExportChat: $('btn-export-chat'),
    btnToggleCanvas: $('btn-toggle-canvas'),
    chatArea: $('chat-area'),
    welcomeView: $('welcome-view'),
    messagesContainer: $('messages-container'),
    dropOverlay: $('drop-overlay'),
    attachmentsPreview: $('attachments-preview'),
    promptInput: $('prompt-input'),
    fileInput: $('file-input'),
    btnAttach: $('btn-attach'),
    btnToggleThinking: $('btn-toggle-thinking'),
    btnToggleSearch: $('btn-toggle-search'),
    btnSend: $('btn-send'),
    iconSend: $('icon-send'),
    iconStop: $('icon-stop'),
    canvasPanel: $('canvas-panel'),
    canvasTitle: $('canvas-title'),
    canvasLangBadge: $('canvas-lang-badge'),
    canvasCodeView: $('canvas-code-view'),
    canvasPreviewFrame: $('canvas-preview-frame'),
    btnCanvasPreview: $('btn-canvas-preview'),
    btnCanvasCode: $('btn-canvas-code'),
    btnCanvasCopy: $('btn-canvas-copy'),
    btnCanvasClose: $('btn-canvas-close'),
    settingsModal: $('settings-modal'),
    btnCloseSettings: $('btn-close-settings'),
    inputApiKey: $('input-api-key'),
    btnToggleKeyVis: $('btn-toggle-key-vis'),
    inputBaseUrl: $('input-base-url'),
    inputSystemPrompt: $('input-system-prompt'),
    inputTemperature: $('input-temperature'),
    valTemperature: $('val-temperature'),
    inputMaxTokens: $('input-max-tokens'),
    btnExportAll: $('btn-export-all'),
    btnClearAll: $('btn-clear-all'),
    btnSaveSettings: $('btn-save-settings')
  };

  // Persistence adapter (Electron -> Python local server -> localStorage)
  async function loadPersistedData() {
    if (window.desktopAPI && window.desktopAPI.isElectron) {
      return await window.desktopAPI.loadStore();
    }
    try {
      const res = await fetch('/api/store', { cache: 'no-store' });
      if (res.ok) return await res.json();
    } catch (_) {}
    try {
      const raw = localStorage.getItem('gemini_desktop_store');
      return raw ? JSON.parse(raw) : { chats: [], settings: {} };
    } catch {
      return { chats: [], settings: {} };
    }
  }

  async function persistData() {
    const payload = {
      chats: state.chats,
      settings: state.settings
    };
    if (window.desktopAPI && window.desktopAPI.isElectron) {
      await window.desktopAPI.saveStore(payload);
      return;
    }
    try {
      const res = await fetch('/api/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) return;
    } catch (_) {}
    try {
      localStorage.setItem('gemini_desktop_store', JSON.stringify(payload));
    } catch (_) {}
  }

  // Initialization
  async function init() {
    const saved = await loadPersistedData();
    state.chats = Array.isArray(saved.chats) ? saved.chats : [];
    state.settings = { ...DEFAULT_SETTINGS, ...(saved.settings || {}) };
    if (!Array.isArray(state.settings.customModels) || state.settings.customModels.length === 0) {
      state.settings.customModels = DEFAULT_MODELS;
    }

    applyTheme(state.settings.theme);
    renderModelOptions();
    updateStatusIndicators();
    renderChatList();
    renderActiveChat();
    bindEvents();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    el.themeLabel.textContent = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
  }

  function updateStatusIndicators() {
    const hasKey = Boolean(state.settings.apiKey && state.settings.apiKey.trim());
    el.btnApiStatus.classList.toggle('ready', hasKey);
    el.apiStatusText.textContent = hasKey ? 'API подключён' : 'Нет API-ключа';

    const currentModel = state.settings.customModels.find((m) => m.id === state.settings.model);
    el.currentModelLabel.textContent = currentModel ? currentModel.name : state.settings.model;

    el.btnToggleThinking.classList.toggle('active', Boolean(state.settings.thinkingEnabled));
    el.btnToggleSearch.classList.toggle('active', Boolean(state.settings.searchGrounding));
  }

  function renderModelOptions() {
    el.modelOptions.innerHTML = '';
    state.settings.customModels.forEach((m) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'model-option' + (m.id === state.settings.model ? ' selected' : '');
      btn.innerHTML = `
        <span class="model-option-name">${escapeHtml(m.name)}</span>
        <span class="model-option-id">${escapeHtml(m.id)}</span>
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

  async function refreshModelsFromAPI() {
    const apiKey = state.settings.apiKey.trim();
    if (!apiKey) {
      openSettings();
      return;
    }
    el.btnRefreshModels.textContent = 'Загрузка...';
    try {
      const base = state.settings.baseUrl.replace(/\/+$/, '');
      const res = await fetch(`${base}/models?key=${encodeURIComponent(apiKey)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const models = (data.models || [])
        .filter((m) => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes('generateContent'))
        .map((m) => ({
          id: m.name.replace(/^models\//, ''),
          name: m.displayName || m.name.replace(/^models\//, '')
        }));
      if (models.length > 0) {
        state.settings.customModels = models;
        if (!models.some((m) => m.id === state.settings.model)) {
          state.settings.model = models[0].id;
        }
        renderModelOptions();
        updateStatusIndicators();
        await persistData();
      }
    } catch (err) {
      alert('Не удалось загрузить модели: ' + err.message);
    } finally {
      el.btnRefreshModels.textContent = 'Обновить из API';
    }
  }

  // Chat list management
  function getActiveChat() {
    return state.chats.find((c) => c.id === state.activeChatId) || null;
  }

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
    titleSpan.textContent = chat.title || 'Новый чат';
    titleSpan.title = chat.title || 'Новый чат';

    const actions = document.createElement('div');
    actions.className = 'chat-item-actions';

    const pinBtn = document.createElement('button');
    pinBtn.className = 'mini-btn';
    pinBtn.textContent = chat.pinned ? '★' : '☆';
    pinBtn.title = chat.pinned ? 'Открепить' : 'Закрепить';
    pinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      chat.pinned = !chat.pinned;
      renderChatList();
      persistData();
    });

    const renameBtn = document.createElement('button');
    renameBtn.className = 'mini-btn';
    renameBtn.textContent = '✎';
    renameBtn.title = 'Переименовать';
    renameBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const next = prompt('Название чата:', chat.title || '');
      if (next !== null && next.trim()) {
        chat.title = next.trim();
        renderChatList();
        persistData();
      }
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'mini-btn';
    delBtn.textContent = '🗑';
    delBtn.title = 'Удалить';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.chats = state.chats.filter((x) => x.id !== chat.id);
      if (state.activeChatId === chat.id) {
        state.activeChatId = null;
      }
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

  // Rendering messages
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

    chat.messages.forEach((msg, idx) => {
      el.messagesContainer.appendChild(buildMessageRow(msg, idx, chat.messages.length - 1));
    });
    scrollToBottom();
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
            img.alt = att.name;
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

    // Model message
    const modelWrap = document.createElement('div');
    modelWrap.className = 'model-row';

    const isLastStreaming = state.isStreaming && idx === lastIdx;
    const avatar = document.createElement('div');
    avatar.className = 'model-avatar' + (isLastStreaming ? ' spinning' : '');
    avatar.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="#4285f4" d="M12 1C12 7.07 7.07 12 1 12C7.07 12 12 16.93 12 23C12 16.93 16.93 12 23 12C16.93 12 12 7.07 12 1Z" />
      </svg>
    `;

    const content = document.createElement('div');
    content.className = 'model-content';

    if (msg.thinking) {
      const thinkBox = document.createElement('div');
      thinkBox.className = 'thinking-box';
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'thinking-toggle';
      toggle.innerHTML = '<span>Показать ход мыслей</span><span>▾</span>';
      const body = document.createElement('div');
      body.className = 'thinking-body hidden';
      body.textContent = msg.thinking;
      toggle.addEventListener('click', () => {
        body.classList.toggle('hidden');
      });
      thinkBox.append(toggle, body);
      content.appendChild(thinkBox);
    }

    const mdDiv = document.createElement('div');
    mdDiv.className = 'markdown-body';
    mdDiv.innerHTML = renderMarkdown(msg.text || (isLastStreaming ? 'Думаю...' : ''));
    attachCodeBlockHandlers(mdDiv);
    content.appendChild(mdDiv);

    if (!isLastStreaming) {
      const actions = document.createElement('div');
      actions.className = 'msg-actions';

      const copyBtn = document.createElement('button');
      copyBtn.className = 'msg-action-btn';
      copyBtn.textContent = 'Копировать';
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(msg.text || '');
        copyBtn.textContent = 'Скопировано ✓';
        setTimeout(() => (copyBtn.textContent = 'Копировать'), 1500);
      });

      const regenBtn = document.createElement('button');
      regenBtn.className = 'msg-action-btn';
      regenBtn.textContent = 'Повторить';
      regenBtn.addEventListener('click', () => regenerateFrom(idx));

      actions.append(copyBtn, regenBtn);
      content.appendChild(actions);
    }

    modelWrap.append(avatar, content);
    row.appendChild(modelWrap);
    return row;
  }

  function scrollToBottom() {
    el.messagesContainer.scrollTop = el.messagesContainer.scrollHeight;
  }

  // Self-contained Markdown renderer (XSS-safe, offline-ready)
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderMarkdown(raw) {
    if (!raw) return '';
    const codeBlocks = [];
    let text = raw.replace(/```([a-zA-Z0-9_+-]*)\n([\s\S]*?)```/g, (_m, lang, code) => {
      const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
      codeBlocks.push({ lang: lang || 'text', code: code.replace(/\n$/, '') });
      return token;
    });

    text = escapeHtml(text);

    // Tables
    text = text.replace(/((?:^\|.+\|\n?)+)/gm, (block) => {
      const rows = block.trim().split('\n').filter((r) => r.trim());
      if (rows.length < 2 || !/^\|[\s:-|]+\|$/.test(rows[1].trim())) return block;
      const parseRow = (r) => r.trim().slice(1, -1).split('|').map((c) => c.trim());
      const headers = parseRow(rows[0]);
      const bodyRows = rows.slice(2).map(parseRow);
      let html = '<table><thead><tr>' + headers.map((h) => `<th>${formatInline(h)}</th>`).join('') + '</tr></thead><tbody>';
      bodyRows.forEach((cols) => {
        html += '<tr>' + cols.map((c) => `<td>${formatInline(c)}</td>`).join('') + '</tr>';
      });
      return html + '</tbody></table>';
    });

    // Headings
    text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    text = text.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    text = text.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Blockquotes
    text = text.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

    // Lists
    text = text.replace(/(?:^(?:- |\* )(.+)\n?)+/gm, (m) => {
      const items = m.trim().split('\n').map((l) => `<li>${formatInline(l.replace(/^(?:- |\* )/, ''))}</li>`).join('');
      return `<ul>${items}</ul>`;
    });
    text = text.replace(/(?:^\d+\. (.+)\n?)+/gm, (m) => {
      const items = m.trim().split('\n').map((l) => `<li>${formatInline(l.replace(/^\d+\. /, ''))}</li>`).join('');
      return `<ol>${items}</ol>`;
    });

    // Paragraphs
    const blocks = text.split(/\n{2,}/).map((part) => {
      const t = part.trim();
      if (!t) return '';
      if (/^<(h1|h2|h3|ul|ol|table|blockquote)|^@@CODEBLOCK_/.test(t)) return t;
      return `<p>${formatInline(t).replace(/\n/g, '<br>')}</p>`;
    });

    let out = blocks.join('\n');
    codeBlocks.forEach((cb, i) => {
      const encoded = encodeURIComponent(cb.code);
      const html = `
        <div class="code-block-wrap">
          <div class="code-block-header">
            <span>${escapeHtml(cb.lang)}</span>
            <div class="code-block-actions">
              <button class="text-btn btn-open-canvas" data-lang="${escapeHtml(cb.lang)}" data-code="${encoded}">Открыть в Canvas</button>
              <button class="text-btn btn-copy-code" data-code="${encoded}">Копировать</button>
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
    return s
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  }

  function attachCodeBlockHandlers(container) {
    container.querySelectorAll('.btn-copy-code').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = decodeURIComponent(btn.dataset.code || '');
        navigator.clipboard.writeText(code);
        btn.textContent = 'Скопировано ✓';
        setTimeout(() => (btn.textContent = 'Копировать'), 1500);
      });
    });

    container.querySelectorAll('.btn-open-canvas').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = decodeURIComponent(btn.dataset.code || '');
        const lang = btn.dataset.lang || 'text';
        openCanvas(code, lang);
      });
    });
  }

  // Canvas panel
  function openCanvas(code, lang) {
    state.canvasContent = code;
    state.canvasLang = lang.toLowerCase();
    el.canvasPanel.classList.remove('hidden');
    el.canvasLangBadge.textContent = state.canvasLang;
    el.canvasCodeView.querySelector('code').textContent = code;

    const isPreviewable = state.canvasLang === 'html' || state.canvasLang === 'svg';
    el.btnCanvasPreview.classList.toggle('hidden', !isPreviewable);
    el.btnCanvasCode.classList.toggle('hidden', !isPreviewable);

    if (isPreviewable) {
      showCanvasPreview();
    } else {
      showCanvasCode();
    }
  }

  function showCanvasPreview() {
    el.canvasCodeView.classList.add('hidden');
    el.canvasPreviewFrame.classList.remove('hidden');
    el.canvasPreviewFrame.srcdoc = state.canvasContent;
  }

  function showCanvasCode() {
    el.canvasPreviewFrame.classList.add('hidden');
    el.canvasCodeView.classList.remove('hidden');
  }

  // File attachments
  function detectMime(name, fallbackType) {
    if (fallbackType) return fallbackType;
    const ext = name.split('.').pop().toLowerCase();
    const map = {
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      webp: 'image/webp',
      gif: 'image/gif',
      pdf: 'application/pdf',
      mp3: 'audio/mp3',
      wav: 'audio/wav',
      mp4: 'video/mp4',
      txt: 'text/plain',
      md: 'text/markdown',
      csv: 'text/csv',
      json: 'application/json',
      py: 'text/x-python',
      js: 'text/javascript',
      html: 'text/html',
      css: 'text/css'
    };
    return map[ext] || 'text/plain';
  }

  function isBinaryInlineMime(mime) {
    return (
      mime.startsWith('image/') ||
      mime.startsWith('audio/') ||
      mime.startsWith('video/') ||
      mime === 'application/pdf'
    );
  }

  async function addBrowserFiles(fileList) {
    for (const file of fileList) {
      const buf = await file.arrayBuffer();
      const base64 = arrayBufferToBase64(buf);
      const mimeType = detectMime(file.name, file.type);
      state.pendingAttachments.push({ name: file.name, mimeType, base64, size: file.size });
    }
    renderAttachmentsPreview();
  }

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  function renderAttachmentsPreview() {
    el.attachmentsPreview.innerHTML = '';
    if (state.pendingAttachments.length === 0) {
      el.attachmentsPreview.classList.add('hidden');
      return;
    }
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
      name.textContent = att.name;
      const rm = document.createElement('button');
      rm.className = 'preview-remove';
      rm.textContent = '×';
      rm.addEventListener('click', () => {
        state.pendingAttachments.splice(idx, 1);
        renderAttachmentsPreview();
      });
      item.append(name, rm);
      el.attachmentsPreview.appendChild(item);
    });
  }

  // Gemini API Request & Streaming
  async function sendMessage() {
    if (state.isStreaming) {
      stopGeneration();
      return;
    }

    const text = el.promptInput.value.trim();
    if (!text && state.pendingAttachments.length === 0) return;

    if (!state.settings.apiKey.trim()) {
      openSettings();
      return;
    }

    let chat = getActiveChat();
    if (!chat) {
      chat = {
        id: 'chat_' + Date.now(),
        title: (text || 'Новый чат').slice(0, 48),
        pinned: false,
        updatedAt: Date.now(),
        messages: []
      };
      state.chats.unshift(chat);
      state.activeChatId = chat.id;
    }

    const userMsg = {
      role: 'user',
      text,
      attachments: [...state.pendingAttachments]
    };
    chat.messages.push(userMsg);
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
    if (state.abortController) {
      state.abortController.abort();
      state.abortController = null;
    }
    state.isStreaming = false;
    updateSendButton();
    renderActiveChat();
    persistData();
  }

  function updateSendButton() {
    el.iconSend.classList.toggle('hidden', state.isStreaming);
    el.iconStop.classList.toggle('hidden', !state.isStreaming);
    el.btnSend.title = state.isStreaming ? 'Остановить генерацию' : 'Отправить (Enter)';
  }

  function buildApiContents(messages) {
    return messages.map((m) => {
      if (m.role === 'user') {
        const parts = [];
        if (Array.isArray(m.attachments)) {
          m.attachments.forEach((att) => {
            if (isBinaryInlineMime(att.mimeType)) {
              parts.push({ inlineData: { mimeType: att.mimeType, data: att.base64 } });
            } else {
              try {
                const decoded = decodeURIComponent(escape(atob(att.base64)));
                parts.push({ text: `\n[Файл: ${att.name}]\n\`\`\`\n${decoded}\n\`\`\`\n` });
              } catch {
                parts.push({ inlineData: { mimeType: 'text/plain', data: att.base64 } });
              }
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
    const modelMsg = { role: 'model', text: '', thinking: '', thoughtSignature: null };
    chat.messages.push(modelMsg);

    state.isStreaming = true;
    state.abortController = new AbortController();
    updateSendButton();
    renderActiveChat();

    const base = state.settings.baseUrl.replace(/\/+$/, '');
    const url = `${base}/models/${encodeURIComponent(state.settings.model)}:streamGenerateContent?alt=sse&key=${encodeURIComponent(state.settings.apiKey.trim())}`;

    const body = {
      contents: buildApiContents(chat.messages.slice(0, -1)),
      generationConfig: {
        temperature: Number(state.settings.temperature),
        maxOutputTokens: Number(state.settings.maxOutputTokens)
      }
    };

    if (state.settings.systemPrompt && state.settings.systemPrompt.trim()) {
      body.systemInstruction = { parts: [{ text: state.settings.systemPrompt.trim() }] };
    }

    if (state.settings.thinkingEnabled) {
      body.generationConfig.thinkingConfig = { includeThoughts: true };
    }

    if (state.settings.searchGrounding) {
      body.tools = [{ google_search: {} }];
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: state.abortController.signal
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }

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
              if (p.thought === true && p.text) {
                modelMsg.thinking += p.text;
              } else if (p.text) {
                modelMsg.text += p.text;
              }
            }
            updateLastModelBubble(modelMsg);
          } catch (_) {}
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        modelMsg.text += `\n\n**Ошибка запроса к API:** ${err.message}`;
      }
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
    const mdDiv = lastRow.querySelector('.markdown-body');
    if (mdDiv) {
      mdDiv.innerHTML = renderMarkdown(modelMsg.text || 'Думаю...');
      attachCodeBlockHandlers(mdDiv);
    }
    if (modelMsg.thinking) {
      let thinkBody = lastRow.querySelector('.thinking-body');
      if (!thinkBody) {
        renderActiveChat();
        return;
      }
      thinkBody.textContent = modelMsg.thinking;
    }
    scrollToBottom();
  }

  // Settings & Export
  function openSettings() {
    el.inputApiKey.value = state.settings.apiKey || '';
    el.inputBaseUrl.value = state.settings.baseUrl || DEFAULT_SETTINGS.baseUrl;
    el.inputSystemPrompt.value = state.settings.systemPrompt || '';
    el.inputTemperature.value = state.settings.temperature ?? 0.7;
    el.valTemperature.textContent = el.inputTemperature.value;
    el.inputMaxTokens.value = state.settings.maxOutputTokens ?? 8192;
    el.settingsModal.classList.remove('hidden');
  }

  async function saveSettings() {
    state.settings.apiKey = el.inputApiKey.value.trim();
    state.settings.baseUrl = el.inputBaseUrl.value.trim() || DEFAULT_SETTINGS.baseUrl;
    state.settings.systemPrompt = el.inputSystemPrompt.value;
    state.settings.temperature = parseFloat(el.inputTemperature.value) || 0.7;
    state.settings.maxOutputTokens = parseInt(el.inputMaxTokens.value, 10) || 8192;
    el.settingsModal.classList.add('hidden');
    updateStatusIndicators();
    await persistData();
  }

  async function exportCurrentChat() {
    const chat = getActiveChat();
    if (!chat) return;
    const md = chat.messages
      .map((m) => `## ${m.role === 'user' ? 'Пользователь' : 'Gemini'}\n\n${m.text || ''}`)
      .join('\n\n---\n\n');
    const filename = `${(chat.title || 'gemini-chat').replace(/[^\wа-яА-ЯёЁ-]+/g, '_')}.md`;

    if (window.desktopAPI && window.desktopAPI.isElectron) {
      await window.desktopAPI.saveFile({ defaultName: filename, content: md });
    } else {
      downloadBlob(filename, md, 'text/markdown');
    }
  }

  function downloadBlob(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // Events
  function bindEvents() {
    el.btnToggleSidebar.addEventListener('click', () => {
      el.sidebar.classList.add('collapsed');
      el.btnOpenSidebar.classList.remove('hidden');
    });

    el.btnOpenSidebar.addEventListener('click', () => {
      el.sidebar.classList.remove('collapsed');
      el.btnOpenSidebar.classList.add('hidden');
    });

    el.chatSearch.addEventListener('input', renderChatList);
    el.btnNewChat.addEventListener('click', createNewChat);

    el.btnThemeToggle.addEventListener('click', () => {
      state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
      applyTheme(state.settings.theme);
      persistData();
    });

    el.btnSettings.addEventListener('click', openSettings);
    el.btnApiStatus.addEventListener('click', openSettings);
    el.btnCloseSettings.addEventListener('click', () => el.settingsModal.classList.add('hidden'));
    el.btnSaveSettings.addEventListener('click', saveSettings);
    el.inputTemperature.addEventListener('input', () => {
      el.valTemperature.textContent = el.inputTemperature.value;
    });

    el.btnToggleKeyVis.addEventListener('click', () => {
      const isPass = el.inputApiKey.type === 'password';
      el.inputApiKey.type = isPass ? 'text' : 'password';
      el.btnToggleKeyVis.textContent = isPass ? 'Скрыть' : 'Показать';
    });

    el.btnModelDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      el.modelMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!el.modelMenu.contains(e.target) && !el.btnModelDropdown.contains(e.target)) {
        el.modelMenu.classList.add('hidden');
      }
    });

    el.btnRefreshModels.addEventListener('click', refreshModelsFromAPI);
    el.btnExportChat.addEventListener('click', exportCurrentChat);

    el.btnToggleCanvas.addEventListener('click', () => {
      el.canvasPanel.classList.toggle('hidden');
    });
    el.btnCanvasClose.addEventListener('click', () => el.canvasPanel.classList.add('hidden'));
    el.btnCanvasPreview.addEventListener('click', showCanvasPreview);
    el.btnCanvasCode.addEventListener('click', showCanvasCode);
    el.btnCanvasCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(state.canvasContent || '');
      el.btnCanvasCopy.textContent = 'Скопировано ✓';
      setTimeout(() => (el.btnCanvasCopy.textContent = 'Копировать'), 1500);
    });

    document.querySelectorAll('.suggestion-card').forEach((card) => {
      card.addEventListener('click', () => {
        el.promptInput.value = card.dataset.prompt || '';
        el.promptInput.focus();
        sendMessage();
      });
    });

    el.promptInput.addEventListener('input', () => {
      el.promptInput.style.height = 'auto';
      el.promptInput.style.height = Math.min(el.promptInput.scrollHeight, 200) + 'px';
    });

    el.promptInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    el.btnSend.addEventListener('click', sendMessage);

    el.btnToggleThinking.addEventListener('click', () => {
      state.settings.thinkingEnabled = !state.settings.thinkingEnabled;
      updateStatusIndicators();
      persistData();
    });

    el.btnToggleSearch.addEventListener('click', () => {
      state.settings.searchGrounding = !state.settings.searchGrounding;
      updateStatusIndicators();
      persistData();
    });

    el.btnAttach.addEventListener('click', async () => {
      if (window.desktopAPI && window.desktopAPI.isElectron) {
        const files = await window.desktopAPI.openFiles();
        files.forEach((f) => {
          state.pendingAttachments.push({
            name: f.name,
            mimeType: detectMime(f.name),
            base64: f.base64,
            size: f.size
          });
        });
        renderAttachmentsPreview();
      } else {
        el.fileInput.click();
      }
    });

    el.fileInput.addEventListener('change', async () => {
      if (el.fileInput.files.length > 0) {
        await addBrowserFiles(el.fileInput.files);
        el.fileInput.value = '';
      }
    });

    // Drag & drop
    el.chatArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      el.dropOverlay.classList.remove('hidden');
    });
    el.chatArea.addEventListener('dragleave', (e) => {
      if (!el.chatArea.contains(e.relatedTarget)) {
        el.dropOverlay.classList.add('hidden');
      }
    });
    el.chatArea.addEventListener('drop', async (e) => {
      e.preventDefault();
      el.dropOverlay.classList.add('hidden');
      if (e.dataTransfer?.files?.length) {
        await addBrowserFiles(e.dataTransfer.files);
      }
    });

    el.btnExportAll.addEventListener('click', () => {
      downloadBlob('gemini-desktop-backup.json', JSON.stringify({ chats: state.chats }, null, 2), 'application/json');
    });

    el.btnClearAll.addEventListener('click', async () => {
      if (confirm('Удалить всю локальную историю чатов?')) {
        state.chats = [];
        state.activeChatId = null;
        renderChatList();
        renderActiveChat();
        await persistData();
      }
    });
  }

  init();
})();
