module.exports = prefix => async (packet, next) => {
  console.log(packet);
  return next();
};
