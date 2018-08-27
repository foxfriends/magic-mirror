import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mapTo, map } from 'rxjs/operators';

import { nextPage, previousPage } from './App/ducks';
import { setVoiceText } from './App/VoiceOutput/ducks';
import App from './App';
import store from './store';

import { listenFor, source } from './input';

import './index.css';
import './assets/fonts/weather-icons.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);

listenFor(/(previous page|go left)/i)
  .pipe(
    source.voice(),
    mapTo(previousPage()),
  )
  .subscribe(::store.dispatch);
listenFor(/(next page|go right)/i)
  .pipe(
    source.voice(),
    mapTo(nextPage()),
  )
  .subscribe(::store.dispatch);

listenFor(/^(?!_NOISE_).*/)
  .pipe(
    source.voice(),
    map(({ message }) => setVoiceText(message)),
  )
  .subscribe(::store.dispatch);

listenFor(/.*/).subscribe(::console.log);
