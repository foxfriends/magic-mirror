const router = require('../../middleware/router');

module.exports = () => router()
  .route('GET', '/', require('./check-weather'));
