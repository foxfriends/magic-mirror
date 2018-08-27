const { promisify } = require('util');
const compose = require('koa-compose');
const weather = require('weather-js');
const Joi = require('joi');

const { validator } = require('../../middleware');

const handler = async ctx => {
  const { location, degrees = 'C' } = ctx.request.query;
  const result = await promisify(weather.find)({ search: location, degreeType: degrees });
  ctx.response.type = 'json';
  ctx.response.body = JSON.stringify(result);
};

module.exports = compose([
  validator({
    query: {
      location: Joi.string().min(1).required(),
      degrees: Joi.string().valid('C', 'F'),
    },
  }),
  handler,
]);
