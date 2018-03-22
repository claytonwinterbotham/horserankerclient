import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks, fetchDates, selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import TrackListItem from '../containers/track-list-item';


class TrackList extends Component {
    constructor(props){
        super(props); 
        this.props.fetchTracks();  
    }
    
    renderList(){
        return this.props.tracks.map((track) =>{
            return (

                <div 
                    className="dropdown" 
                    key={track.trackid}
                    onClick={() =>{
                        this.props.fetchDates(track.trackid)
                        this.props.selectTrack(track)}
                    }>

                <button className="btn btn-default dropdown-toggle" type="button" id="trackMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {track.name}
                </button>
                    <TrackListItem/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="btn-group-vertical list-group col-sm-3" role="group" aria-label="...">
                {this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state) {

    return { 
        tracks: state.tracks,
        track: state.activeTrack,
        dates: state.dates
    }; 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        fetchTracks,
        fetchDates,
        selectDate,
        selectTrack: selectTrack
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);