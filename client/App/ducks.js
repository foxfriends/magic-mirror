import { combineReducers } from 'redux';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import toml from 'toml';

function init() {
  return {
    currentPage: 0,
    ...window.config,
  };
}

const CHANGE_PAGE = Symbol('magic/app/change-page');

export const changePage = page => ({ action: CHANGE_PAGE, page });

function appReducer(state = init(), action = {}) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  app: appReducer,
})

export const epic = combineEpics();
