const http = require('http');
const socketIO = require('socket.io');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

require('./require-extensions');
const sockets = require('./sockets');
const { logger, inject, static, mount } = require('./middleware');
const { command, monitor } = require('./widgets');

const app = new Koa();
const server = http.createServer(app.callback());
const io = socketIO(server);

io.on('connection', sockets(io));

app.context.io = io;
app.context.devices = sockets.devices;

app
  .use(logger('HTTP'))
  .use(bodyparser())
  .use(inject({ config: JSON.stringify(require('../magic.toml')) }))
  .use(mount('/command', command()))
  .use(mount('/monitor', monitor()))
  .use(static('./public_html'));

module.exports = server;
