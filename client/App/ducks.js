import { combineEpics } from 'redux-observable';

import { reducer as widgetReducer, epic as widgetEpic } from './Widget/ducks';

function init() {
  return {
    asleep: false,
    currentPage: 0,
    ...window.config,
  };
}

const CHANGE_PAGE = Symbol('magic/app/change-page');

export const changePage = page => ({ type: CHANGE_PAGE, page });

export default function reducer(state = init(), action = {}) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
}

export const epic = combineEpics();
