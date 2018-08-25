module.exports = replacements => async (ctx, next) => {
  await next();
  if (ctx.response.type === 'text/html') {
    ctx.response.body = ctx.response.body.toString().replace(/\/\*\[\s*(\S*)\s*\]\*\//g, (_, text) => replacements[text]);
  }
}
