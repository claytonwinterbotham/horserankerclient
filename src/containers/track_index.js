import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrackList from '../containers/track-list';
import RaceList from '../containers/race-list';
import { fetchTracks, fetchDates, fetchRaces } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class TrackIndex extends Component {
    constructor(props){
        super(props); 
        this.props.fetchTracks();  
    }

    renderDates(){
        if(this.props.track){
            this.props.fetchDates(this.props.track.trackid)
        }
    }

    renderRaces(){
        console.log("clown")
        if(this.props.date){
            this.props.fetchRaces(
                this.props.date.trackid,
                  this.props.date.date
            )
            console.log("face")
        }
    }
    
    render() {
        this.renderDates()
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