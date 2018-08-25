
const http = require('http');
const Koa = require('koa');

require('./require-extensions');
const { static, inject } = require('./middleware');

const PORT = 1829;

const app = new Koa();
app.use(inject({
  config: JSON.stringify(require('../magic.toml')),
}));
app.use(static('./public_html'));

const server = http.createServer(app.callback());
server.listen(PORT);

module.exports = {
  server,
  url: `http://localhost:${PORT}`,
};
