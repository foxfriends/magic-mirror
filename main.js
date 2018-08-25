const { app, BrowserWindow } = require('electron');
const { server, url } = require('./server');

app.on('ready', () => {
  let window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
    },
  });
  window.setFullScreen(true);
  window.loadURL(`${url}/index.html`);
  window.on('closed', () => window = null);
});

app.on('window-all-closed', () => {
  server.close();
  app.quit();
});
