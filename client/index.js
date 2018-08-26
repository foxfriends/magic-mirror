import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mapTo } from 'rxjs/operators';

import { nextPage, previousPage } from './App/ducks';
import App from './App';
import store from './store';

import { listenFor } from './input';

import './index.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);

listenFor(/(previous page|go left)/i).pipe(mapTo(previousPage())).subscribe(::store.dispatch);
listenFor(/(next page|go right)/i).pipe(mapTo(nextPage())).subscribe(::store.dispatch);
listenFor(/.*/).subscribe(::console.log);
