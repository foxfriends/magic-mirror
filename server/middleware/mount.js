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
    if (routeMatches(ctx.request.url) && (!method || ctx.request.method === method)) {
      ctx.request.url = ctx.request.url.slice(route.length);
      await middleware(ctx, next);
      ctx.request.url = route + ctx.request.url;
    } else {
      await next();
    }
  };
};
