const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(app.getPath('userData'), 'gemini-local-data');
const DATA_FILE = path.join(DATA_DIR, 'store.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readStore() {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) {
    return { chats: [], settings: {} };
  }
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return { chats: [], settings: {} };
  }
}

function writeStore(data) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 760,
    minHeight: 540,
    title: 'Gemini',
    backgroundColor: '#131314',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  ipcMain.handle('store:load', () => readStore());

  ipcMain.handle('store:save', (_event, payload) => {
    writeStore(payload);
    return { ok: true, path: DATA_FILE };
  });

  ipcMain.handle('dialog:openFiles', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'Все поддерживаемые', extensions: ['png', 'jpg', 'jpeg', 'webp', 'gif', 'pdf', 'txt', 'md', 'py', 'js', 'ts', 'json', 'csv', 'html', 'css', 'mp3', 'wav', 'mp4'] },
        { name: 'Изображения', extensions: ['png', 'jpg', 'jpeg', 'webp', 'gif'] },
        { name: 'Документы и код', extensions: ['pdf', 'txt', 'md', 'py', 'js', 'ts', 'json', 'csv', 'html', 'css'] },
        { name: 'Все файлы', extensions: ['*'] }
      ]
    });
    if (result.canceled) return [];

    return result.filePaths.map((filePath) => {
      const stat = fs.statSync(filePath);
      const buf = fs.readFileSync(filePath);
      const ext = path.extname(filePath).toLowerCase();
      return {
        name: path.basename(filePath),
        size: stat.size,
        ext,
        base64: buf.toString('base64')
      };
    });
  });

  ipcMain.handle('dialog:saveFile', async (_event, { defaultName, content }) => {
    const result = await dialog.showSaveDialog({
      defaultPath: defaultName || 'gemini-chat.md'
    });
    if (result.canceled || !result.filePath) return { saved: false };
    fs.writeFileSync(result.filePath, content, 'utf-8');
    return { saved: true, filePath: result.filePath };
  });

  ipcMain.handle('shell:openExternal', (_event, url) => {
    if (typeof url === 'string' && (url.startsWith('https://') || url.startsWith('http://'))) {
      shell.openExternal(url);
    }
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
