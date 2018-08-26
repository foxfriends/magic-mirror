const router = require('../../middleware/router');

module.exports = () => router()
  .route('POST', '/:target', require('./broadcast-to'))
  .route('POST', '', require('./broadcast'));
