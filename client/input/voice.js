import { Subject } from 'rxjs';

const julius = new Julius(
  'voice/voice.dfa',
  'voice/voice.dict',
  {
    pathToWorker: 'script/worker.js',
  }
);

export const voiceCommands = new Subject();

const config = {};

julius.onrecognition = sentence => {
  voiceCommands.next(sentence);
};
