import { merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { voiceCommands } from './voice';
import { networkCommands } from './network';

export const listenFor = (pattern, requiredSource = null, requiredSender = null) => merge(
  voiceCommands.pipe(map(message => ({ source: 'voice', sender: null, message }))),
  networkCommands.pipe(map(({ sender, message }) => ({ source: 'network', sender, message }))),
).pipe(
  filter(({ message }) => pattern.test(message)),
  filter(({ source }) => requiredSource === null || source === requiredSource),
  filter(({ sender }) => requiredSender === null || sender === requiredSender),
  map(({ message, ...command }) => ({ ...command, message, matches: pattern.exec(message) })),
);
