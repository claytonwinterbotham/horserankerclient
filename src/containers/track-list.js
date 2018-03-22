import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTrack } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import TrackListItem from '../containers/track-list-item';
import _ from "lodash";

class TrackList extends Component {
    constructor(props){
        super(props); 
    }

    renderList(){
        return _.map(this.props.tracks, track =>{
            return (

                <div 
                    className="dropdown" 
                    key={track.trackid}
                    onClick={() =>{
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
        track: state.activeTrack,
        tracks: state.tracks
    }; 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        selectTrack
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);