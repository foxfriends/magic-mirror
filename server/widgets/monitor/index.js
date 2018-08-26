const router = require('../../middleware/router');

module.exports = () => router()
  .route('GET', '/devices', require('./list-devices'));
