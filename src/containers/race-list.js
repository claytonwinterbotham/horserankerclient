import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateList from '../containers/date-list';
import { selectTrack } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class RaceList extends Component {
    render() {
        if(!this.props.track){
            return <div>Select a track to get started.</div>
        }
        return(
            
            <div>
            <DateList />
            {this.props.track.name} 
            <p>Select a date from the drop down</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectTrack: selectTrack
     }, dispatch);
}

export default connect(mapStateToProps)(RaceList);