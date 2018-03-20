import React, { Component } from 'react';
import { connect } from 'react-redux';

class DateList extends Component {
    render() {
        if(!this.props.track){
            return <div>Select a track to get started.</div>
        }
        return(
            <div>{this.props.track.track_name}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack
    }
}

export default connect(mapStateToProps)(DateList);