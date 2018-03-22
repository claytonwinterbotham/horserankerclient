import React, { Component } from 'react';
import TrackList from '../containers/track-list';
import RaceList from '../containers/race-list';

class TrackIndex extends Component {
    render() {
        return (
            <div>
                <TrackList />
                <RaceList />
            </div>    
        );
    }
}

export default TrackIndex;