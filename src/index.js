import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import {App} from './App';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
// import 'dist/semantic.min.css';
//onTouchTap

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      target
    );
  });
  window.store = store;
}
