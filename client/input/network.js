import { Subject } from 'rxjs';
import io from 'socket.io-client';

const socket = io();
socket.on('command', ({ message, sender = null }) => {
  networkCommands.next({ sender, message });
});

export const networkCommands = new Subject();
