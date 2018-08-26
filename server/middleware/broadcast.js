const { promisify } = require('util');
const router = require('./router');

module.exports = io => {
  const targets = async ctx => {
    const ids = await promisify(io.sockets.clients.bind(io.sockets))()
    ctx.response.type = 'json';
    ctx.response.body = JSON.stringify(ids);
  }

  const broadcastTo = ctx => {
    const { target } = ctx.params;
    const { body: { message } } = ctx.request;

    io.to(target).emit('command', { message });

    ctx.response.type = 'plain';
    ctx.response.body = 'Ok';
  }

  const broadcast = ctx => {
    const { body: { message } } = ctx.request;

    console.log('broadcasting', message)

    io.sockets.emit('command', { message });

    ctx.response.type = 'plain';
    ctx.response.body = 'Ok';
  }

  return router()
    .route('GET', '/targets', targets)
    .route('POST', '/:target', broadcastTo)
    .route('POST', '', broadcast)
};
