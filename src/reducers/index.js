import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import form from './form';
import theme from './theme';

export * from './app';
export * from './theme';
export * from './form';

export default combineReducers({
  app,
  theme,
  form,
  routing: routerReducer
});
