const http = require('http');
const socketIO = require('socket.io');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

require('./require-extensions');
const socketHandler = require('./socket-handler');
const { logger, inject, static, broadcast, mount } = require('./middleware');

const app = new Koa();
const server = http.createServer(app.callback());
const io = socketIO(server);

io.on('connection', socketHandler(io));

app
  .use(logger('HTTP Request'))
  .use(bodyparser())
  .use(inject({ config: JSON.stringify(require('../magic.toml')) }))
  .use(mount('/broadcast', broadcast(io)))
  .use(static('./public_html'));

server;

module.exports = server;
