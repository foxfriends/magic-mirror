const Joi = require('joi');

module.exports = ({ query, params, body }) => async (ctx, next) => {
  if (query) {
    const { error } = Joi.validate(ctx.request.query, query);
    if (error) {
      ctx.throw(400, error.details.map(detail => detail.message).join(', '));
    }
  }

  if (params) {
    const { error } = Joi.validate(ctx.request.params, params);
    if (error) {
      ctx.throw(400, error.details.map(detail => detail.message).join(', '));
    }
  }

  if (body) {
    const { error } = Joi.validate(ctx.request.body, body);
    if (error) {
      ctx.throw(400, error.details.map(detail => detail.message).join(', '));
    }
  }

  await next();
};
