import * as React from 'react';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const julius = new Julius(
  'voice/voice.dfa',
  'voice/voice.dict',
  {
    pathToWorker: 'script/worker.js',
  }
);

const sentences = new Subject();

const config = {};

julius.onrecognition = sentence => {
  sentences.next(sentence);
};

export const listenFor = pattern => sentences.pipe(
  filter(::pattern.test),
  map(::pattern.exec),
);
