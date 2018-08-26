const { logger } = require('./middleware');

const devices = new Map();

module.exports = io => {
  return socket => {
    socket.use(logger(`WS (${socket.id})`));

    socket.on('disconnect', () => devices.delete(`${socket.id}`));
    socket.on('init-device', ({ name, mode }) => devices.set(`${socket.id}`, { name, mode, id: `${socket.id}` }));

    socket.on('command', ({message, target}) => {
      if (target) {
        io.to(target).emit('command', { message, sender: `${devices.get(`${socket.id}`).name}` });
      } else {
        io.sockets.emit('command', { message, sender: `${devices.get(`${socket.id}`).name}` });
      }
    });
  };
};

module.exports.devices = devices;
