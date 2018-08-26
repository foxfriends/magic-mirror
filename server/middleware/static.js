const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');

module.exports = baseURL => async ctx => {
  let targetFile = baseURL + ctx.request.url;
  const stats = await fs.stat(targetFile);
  if (stats.isDirectory()) {
    targetFile = path.join(targetFile, 'index.html');
  }
  ctx.response.type = path.extname(targetFile).slice(1);
  ctx.response.body = await fs.readFile(targetFile);
}
