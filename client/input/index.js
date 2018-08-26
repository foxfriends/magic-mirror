import { merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { voiceCommands } from './voice';
import { networkCommands } from './network';

export const listenFor = (pattern) => merge(
  voiceCommands.pipe(
    filter(() => window.config.voice),
    map(message => ({ source: 'voice', sender: null, message })),
  ),
  networkCommands.pipe(
    map(({ sender, message }) => ({ source: 'network', sender, message })),
  ),
).pipe(
  filter(({ message }) => pattern.test(message)),
  map(({ message, ...command }) => ({ ...command, message, matches: pattern.exec(message) })),
);

export const source = (...sources) => filter(({ source }) => sources.includes(source));
source.voice = () => source('voice');
source.network = () => source('network');
