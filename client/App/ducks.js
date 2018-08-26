import { combineEpics } from 'redux-observable';

function init() {
  return {
    asleep: false,
    currentPage: 0,
    ...window.config,
  };
}

const NEXT_PAGE = Symbol('magic/app/next-page');
const PREVIOUS_PAGE = Symbol('magic/app/previous-page');
const WAKE = Symbol('magic/app/wake');
const SLEEP = Symbol('magic/app/sleep');

export const nextPage = () => ({ type: NEXT_PAGE });
export const previousPage = () => ({ type: PREVIOUS_PAGE });
export const sleep = () => ({ SLEEP });
export const wake = () => ({ WAKE });

export default function reducer(state = init(), action = {}) {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, currentPage: Math.min(state.pages.length - 1, state.currentPage + 1) };
    case PREVIOUS_PAGE:
      return { ...state, currentPage: Math.max(0, state.currentPage - 1) };
    case SLEEP:
      return { ...state, asleep: true };
    case WAKE:
      return { ...state, asleep: false };
    default:
      return state;
  }
}

export const epic = combineEpics();
