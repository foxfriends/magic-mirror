const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

module.exports = baseURL => async ctx => {
  ctx.response.type = path.extname(ctx.request.url).slice(1);
  ctx.response.body = await promisify(fs.readFile)(baseURL + ctx.request.url);
}
