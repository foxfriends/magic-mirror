module.exports = ctx => {
  const { body: { message } } = ctx.request;

  console.log('broadcasting', message)

  ctx.io.sockets.emit('command', { message });

  ctx.response.type = 'plain';
  ctx.response.body = 'Ok';
}
