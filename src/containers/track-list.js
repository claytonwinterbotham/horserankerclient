import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions/index';
import { selectTrack } from '../actions/index';
import { bindActionCreators } from 'redux'; 


class TrackList extends Component {
    constructor(props){
        super(props); 
        this.props.fetchTracks();   
    }

    renderList(){
        return this.props.tracks.map((track) =>{
           
            return (
                
                <li 
                   
                    key={track.trackid}
                    onClick={() => this.props.selectTrack(track)}
                    className="list-group-item">

                    {track.trackid}
                    {track.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps({ tracks }) {
    //Whatever is return will show up as props
    //inside of TrackList
    return { tracks }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        fetchTracks,
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