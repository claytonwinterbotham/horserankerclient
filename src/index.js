import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise  from 'redux-promise';
import {BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import TrackIndex from './containers/track_index'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="row">
        <Route path="/" component={TrackIndex} />
      </div>  
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
