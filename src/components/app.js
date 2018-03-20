import React, { Component } from 'react';
import TrackList from '../containers/track-list';
import RaceList from '../containers/race-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <TrackList />
        <RaceList />
      </div>
    );
  }
}
