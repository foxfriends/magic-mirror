module.exports = prefix => ([event, payload], next) => {
  console.log(`${prefix}: ${event}`, payload);
  return next();
};
