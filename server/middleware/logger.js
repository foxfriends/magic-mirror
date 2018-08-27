module.exports = prefix => async (ctx, next) => {
  const { path } = ctx;
  const start = Date.now();
  await next();
  const end = Date.now();
  console.log(`${prefix}: [${ctx.method}] ${path} (${end - start}ms)`);
  if (Object.entries(ctx.request.query).length) {
    console.log(''.padStart(' ', prefix.length) + 'Query:', ctx.request.query);
  }
  if (Object.entries(ctx.request.body).length) {
    console.log(''.padStart(' ', prefix.length) + 'Body:', ctx.request.body);
  }
};
