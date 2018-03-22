import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks, fetchDates, selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 


class TrackListItem extends Component {
    constructor(props){
        super(props);
    }

    renderListItem(){
        return this.props.dates.map((date) =>{
            return (
                <li
                    key={date.date}
                    onClick={() =>{
                    this.props.selectDate(this.props.track.trackid, date.date)}}>
                    <a href="#">{date.date}</a>
                </li>
            );
        });       
    }
    
    render() {
        return (
            
            <ul className="dropdown-menu" aria-labelledby="trackMenu">
                {this.renderListItem()}
            </ul> 
        )
    }
}

function mapStateToProps(state) {
    //Whatever is return will show up as props
    //inside of TrackList
    return { 
        track: state.activeTrack,
        dates: state.dates
    }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        selectDate
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackListItem);