import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise  from 'redux-promise';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import reducers from './reducers';
import TrackIndex from './containers/track_index';
import HorseList from './containers/horse-list';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="row">
        <Switch>
          <Route path="/horsedata" component={HorseList} />
          <Route path="/" component={TrackIndex} />
        </Switch>
      </div>  
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
