import { combineReducers } from 'redux';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, delay, take, mapTo, tap } from 'rxjs/operators';

function init() {
  return {
    time: new Date(),
  };
}

const START_CLOCK = Symbol('magic/widget/start-clock');
const SET_TIME = Symbol('magic/widget/set-time');

const setTime = () => ({ type: SET_TIME });
export const startClock = () => ({ type: START_CLOCK });

export default function reducer(state = init(), action = {}) {
  switch (action.type) {
    case SET_TIME:
      return { ...state, time: new Date() };
    default:
      return state;
  }
}

export const epic = combineEpics(
  action => action.pipe(
    ofType(START_CLOCK),
    take(1),
    mapTo(setTime()),
  ),
  action => action.pipe(
    ofType(SET_TIME),
    delay(1000),
  )
);
