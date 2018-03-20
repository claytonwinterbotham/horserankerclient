import React, { Component } from 'react';
import TrackList from '../containers/track-list';
import DateList from '../containers/date-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <TrackList />
        <DateList />
      </div>
    );
  }
}
