import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import globalReducer, { epic as globalEpic } from './ducks';

export const reducer = combineReducers({
  global: globalReducer,
});

export const epic = combineEpics(globalEpic);
