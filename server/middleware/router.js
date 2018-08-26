const Route = require('route-parser');

module.exports = () => {
  const routes = {};
  const middleware = async (ctx, next) => {
    const routesForMethod = (routes[ctx.request.method.toUpperCase()] || new Map());
    for (const [route, handler] of routesForMethod) {
      const match = route.match(ctx.request.url);
      console.log(route, match);
      if (match) {
        ctx.request.params = Object.assign({}, ctx.request.params || {}, match);
        await handler(ctx, next);
        return;
      }
    }
    await next();
  }

  middleware.route = (method, path, handler) => {
    routes[method.toUpperCase()] = routes[method.toUpperCase()] || new Map();
    routes[method.toUpperCase()].set(new Route(path), handler);
    return middleware;
  }

  return middleware;
};
