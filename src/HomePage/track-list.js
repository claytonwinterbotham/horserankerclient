import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataActions } from '../actions';
import { bindActionCreators } from 'redux'; 
import TrackListItem from './track-list-item';
import _ from "lodash";

class TrackList extends Component {
    constructor(props){
        super(props); 
    }

    componentDidMount() {
        this.props.dispatch(

            dataActions.fetchTracks()
    );
    }

    renderList(){
        const { tracks } = this.props;
        let className = "dropdown"
         if(tracks){
          className += " menu-active";
        return tracks.items.map(track =>{
            return (
                <div 
                    className={className}
                    key={track.trackid}
                    onClick={() =>{
                        this.props.dispatch(
                            dataActions.selectTrack(track),
                            );
                        this.props.dispatch(
                            dataActions.fetchDates(track.trackid)
                            );    
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
        const { tracks } = this.props;
        return (
            <div className="btn-group-vertical list-group col-sm-3" role="group" aria-label="...">
                {tracks.loading && <em>Loading tracks...</em>}
                {tracks.error && <span className="text-danger">ERROR: {tracks.error}</span>}
                {tracks.items && this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { tracks } = state;
    return {
        //track: state.activeTrack,
        tracks
    }; 
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         fetchDates, 
//         selectTrack
//      }, dispatch);
// }

export default connect(mapStateToProps)(TrackList);