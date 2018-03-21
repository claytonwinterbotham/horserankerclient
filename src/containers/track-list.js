import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks, fetchDates, selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 


class TrackList extends Component {
    constructor(props){
        super(props); 
        this.props.fetchTracks();   
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
    
    renderList(){
        return this.props.tracks.map((track) =>{
           
            return (

                <div 
                    className="dropdown" 
                    key={track.trackid}
                    onClick={() =>{
                         
                         this.props.selectTrack(track)
                         this.props.fetchDates(track.trackid)}
                    }>

                <button className="btn btn-default dropdown-toggle" type="button" id="trackMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {track.trackid}
                    {track.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="trackMenu">
                   {this.renderListItem()}
                </ul>
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
    //Whatever is return will show up as props
    //inside of TrackList
    return { 
        tracks: state.tracks,
        track: state.activeTrack,
        dates: state.dates
    }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        fetchTracks,
        fetchDates,
        selectDate,
        selectTrack: selectTrack
     }, dispatch);
}

// //Anything returned from this function will end up as props
// //on the TrackList container
// function mapDispatchToProps(dispatch) {
//     //Whenever selectTrack is called, the result should be
//     //passed to all our reducers
//     return bindActionCreators({ selectTrack: selectTrack }, dispatch)
// }

// Promote TrackList from a component to a container - it needs to know about this new dispatch method, selectTrack
// Make it available as a prop

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);