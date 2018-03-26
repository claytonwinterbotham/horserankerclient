import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { selectTrack, selectDate, selectRace, fetchHorses } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import _ from "lodash";

class RaceList extends Component {
    constructor(props){
        super(props);
        this.state = {races: this.props.races}                            
    }
   
    render() { 
        const { races } = this.state;
        if(!this.props.track){
            return <div>Select a track and date to get started.</div>
        }
         else if(this.props.date &&
                 this.props.races &&     
                 this.props.track.trackid == 
                 this.props.date.trackid){
            return(
               
                
                <ReactTable
                 data={this.props.races}
                 columns={[{
                    Header: 'Racenum',
                    accessor: 'racenum'
                  }, {
                    Header: 'Racetype',
                    accessor: 'racetype',  
                  }, {
                    Header: 'Distance',
                    accessor: 'distance',  
                  }, {
                    Header: 'PPturf', 
                    accessor: 'ppturf'
                  }, {
                    Header: 'Chartturf',
                    accessor: 'chartturf'
                  }, {
                    Header: 'Offturf', 
                    accessor: 'offturf'
                   }] }
                />
            )
        }
         return(
             <div>Please choose a date</div>
         )
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack,
        date: state.activeDate,
        race: state.activeRace,
        races: state.races,
        horses: state.horses
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchHorses, 
        selectRace
     }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RaceList));