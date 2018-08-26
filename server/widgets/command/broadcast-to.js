module.exports = ctx => {
  const { target } = ctx.params;
  const { body: { message } } = ctx.request;

  ctx.io.to(target).emit('command', { message });

  ctx.response.type = 'plain';
  ctx.response.body = 'Ok';
}
