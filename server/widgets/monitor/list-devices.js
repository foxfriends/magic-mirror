module.exports = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = JSON.stringify([...ctx.devices.values()]);
}
