import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDate, fetchRaces} from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class TrackListItem extends Component {
    constructor(props){
        super(props);
    }

    renderListItem(){
        return _.map(this.props.dates, date =>{
            if(date.trackid == this.props.track.trackid){
                return (
                    <li 
                        key={date.date}
                        onClick={() =>{
                            event.stopPropagation();
                            this.props.selectDate(date)
                            this.props.fetchRaces(
                                        date.trackid,
                                        date.date
                            )            
                        }}>
                        {date.date}
                    </li>
                );
            }
        });       
    }

    render() {
        if(this.props.track){
            return (
                <ul className="dropdown-menu" aria-labelledby="trackMenu">
                    {this.renderListItem()}
                </ul> 
            )
        }
        return(
            <ul className="dropdown-menu" aria-labelledby="trackMenu">
                <li>Loading...</li>
            </ul> 
        )
    }
}

function mapStateToProps(state) {
    //Whatever is return will show up as props
    //inside of TrackList
    return { 
        track: state.activeTrack,
        date: state.activeDate,
        dates: state.dates
    }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchRaces, 
        selectDate
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackListItem);