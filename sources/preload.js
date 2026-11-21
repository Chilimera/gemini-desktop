const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktopAPI', {
  isElectron: true,
  loadStore: () => ipcRenderer.invoke('store:load'),
  saveStore: (data) => ipcRenderer.invoke('store:save', data),
  openFiles: () => ipcRenderer.invoke('dialog:openFiles'),
  saveFile: (opts) => ipcRenderer.invoke('dialog:saveFile', opts),
  openExternal: (url) => ipcRenderer.invoke('shell:openExternal', url)
});
