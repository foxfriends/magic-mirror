const { logger } = require('./middleware');

module.exports = io => socket => {
  socket.use(logger(`Socket ${socket.id}`));

  socket.on('command', (message, target) => {
    if (target) {
      io.to(target).emit('command', { message, sender: `${socket.id}` });
    } else {
      io.sockets.emit('command', { message, sender: `${socket.id}` });
    }
  });
};
