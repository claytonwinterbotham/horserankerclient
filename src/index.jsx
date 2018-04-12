import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { store } from './helpers';
import { App } from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.root'));