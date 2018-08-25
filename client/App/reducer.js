import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import appReducer, { epic as appEpic } from './ducks';
import { reducer as widgetReducer, epic as widgetEpic } from './Widget/reducer';

export const reducer = combineReducers({
  widget: widgetReducer,
  app: appReducer,
})

export const epic = combineEpics(appEpic, widgetEpic);
