import { combineEpics, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

function init() {
  return {
    text: '',
  };
}

const SET_VOICE_TEXT = Symbol('magic/voice-output/set-voice-text');
const CLEAR_VOICE_TEXT = Symbol('magic/voice-output/clear-voice-text');

export const setVoiceText = text => ({ type: SET_VOICE_TEXT, text });
export const clearVoiceText = () => ({ type: CLEAR_VOICE_TEXT });

export default function reducer(state = init(), action = {}) {
  switch (action.type) {
    case SET_VOICE_TEXT:
      return { ...state, text: action.text };
    case CLEAR_VOICE_TEXT:
      return { ...state, text: '' };
    default:
      return state;
  }
}

export const epic = combineEpics(
  action => action.pipe(
    ofType(SET_VOICE_TEXT),
    delay(1500),
    mapTo(clearVoiceText()),
  ),
);
