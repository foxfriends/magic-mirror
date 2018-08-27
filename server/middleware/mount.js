const Router = require('koa-router');

module.exports = function (method, route, middleware) {
  if (arguments.length === 1) {
    return module.exports(undefined, undefined, ...arguments);
  }
  if (arguments.length === 2) {
    return module.exports(undefined, ...arguments);
  }

  if (typeof method === 'string') {
    method = method.toUpperCase();
  }

  if (typeof route === 'string') {
    route = '/' + route.trim()
      .replace(/^\/*/, '')
      .replace(/\/*$/, '');
  }

  const routeMatches = path => path.startsWith(route + '/') || path === route;

  return async (ctx, next) => {
    if (routeMatches(ctx.path) && (!method || ctx.request.method === method)) {
      ctx.path = `${ctx.path}`.slice(route.length) || '/';
      await middleware(ctx, next);
      ctx.path = route + ctx.path;
    } else {
      await next();
    }
  };
};
