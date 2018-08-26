import { Subject } from 'rxjs';
import io from 'socket.io-client';

const socket = io();

let connected = false;

socket.on('connect', () => {
  socket.emit('init-device', { name: window.config.name, mode: window.config.mode });

  let pings = 0;
  function ping() {
    if (pings <= 0) {
      connected = false;
    } else {
      connected = true;
    }
    pings -= 1;
    socket.emit('ping', () => pings = 4);
    window.setTimeout(ping, 5000);
  }
});

socket.on('command', ({ message, sender = null }) => {
  networkCommands.next({ sender, message });
});

export const networkCommands = new Subject();
