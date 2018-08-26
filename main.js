const { app, BrowserWindow } = require('electron');
const server = require('./server');

const PORT = 1892;

app.on('ready', () => {
  server.listen(PORT);
  console.log(`Starting server at 0.0.0.0:${PORT}`)
  let window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
    },
  });
  window.setFullScreen(true);
  window.loadURL(`http://localhost:${PORT}/index.html`);
  window.on('closed', () => window = null);
});

app.on('window-all-closed', () => {
  server.close();
  app.quit();
});
