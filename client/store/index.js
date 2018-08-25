import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer, epic } from '../App/ducks';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware),
);

epicMiddleware.run(epic);

export default store;
