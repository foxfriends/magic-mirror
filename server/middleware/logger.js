module.exports = prefix => async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  console.log(`${prefix}: [${ctx.method}] ${ctx.url} (${end - start}ms)`);
};
