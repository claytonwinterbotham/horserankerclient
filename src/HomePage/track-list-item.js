import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataActions } from '../actions';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class TrackListItem extends Component {

    constructor(props){
        super(props);
    }

 
    renderListItem(){
        const { dates } = this.props;
        return dates.items.map(date =>{
                return (
                    <span
                        key={date.date}
                        onClick={() =>{
                            this.props.dispatch(
                                dataActions.selectDate(date),
                                );
                            this.props.dispatch(
                                dataActions.fetchRaces(date.trackid,
                                                           date.date)
                                );    
                        }}>
                        {date.date}
                    </span>
                );
            })
        }    
    render() {
        const { dates } = this.props;
        return (
            <div id={"collapse" + this.props.trackid} data-parent="#accordion" className="collapse" role="tabpanel" aria-labelledby={"heading" + this.props.trackid}>
            <div className="card-block">
                {dates.loading && <em>Loading dates...</em>}
                {dates.error && <span className="text-danger">ERROR: {dates.error}</span>}
                {dates.items && this.renderListItem()}
            </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
    const { dates } = state
    
    return { 
        dates,
        track: state.activeTrack
    };
}

export default connect(mapStateToProps)(TrackListItem);