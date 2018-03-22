import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class TrackListItem extends Component {
    constructor(props){
        super(props);
    }

    renderListItem(){
        return _.map(this.props.dates, date =>{
            return (
                <li
                    key={date.date}
                    onClick={() =>{
                        this.props.selectDate(date)
                    }}>
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
        date: state.activeDate,
        dates: state.dates
    }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        selectDate
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackListItem);