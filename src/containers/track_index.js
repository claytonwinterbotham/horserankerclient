import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrackList from '../containers/track-list';
import RaceList from '../containers/race-list';
import { fetchTracks, fetchDates, fetchRaces } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class TrackIndex extends Component {
    constructor(props){
        super(props); 
        this.props.fetchTracks();  
    }

    renderRaces(){
        if(this.props.date){
            this.props.fetchRaces(
                this.props.date.trackid,
                  this.props.date.date
            )
        }
    }
    
    render() {
        this.renderRaces()
        return (
            <div>
                <TrackList />
                <RaceList />
            </div>    
        );
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack,
        date: state.activeDate,
        race: state.activeRace,
    }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        fetchTracks,
        fetchDates,
        fetchRaces
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);