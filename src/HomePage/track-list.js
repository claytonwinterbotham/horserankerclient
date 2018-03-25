import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTrack, fetchDates } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import TrackListItem from './track-list-item';
import _ from "lodash";

class TrackList extends Component {
    constructor(props){
        super(props); 
    }

    renderList(){
        let className = "dropdown"
         if(this.props.tracks){
          className += " menu-active";
        return _.map(this.props.tracks, track =>{
            return (
                <div 
                    className={className}
                    key={track.trackid}
                    onClick={() =>{
                        this.props.selectTrack(track)
                        this.props.fetchDates(track.trackid)
                    }
                    }>

                <button className="btn btn-default dropdown-toggle" type="button" id="trackMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {track.name}
                </button>
                    <TrackListItem/>
                </div>
            );
        });
    }
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
        track: state.activeTrack,
        tracks: state.tracks
    }; 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchDates, 
        selectTrack
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);