import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { dataActions } from '../actions';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import _ from "lodash";

class RaceList extends Component {
    constructor(props){
        super(props);               
    }
   

    render() { 
        const { races, track } = this.props;
        return(
            <div className="">        
                {races.loading && <em>Loading Races...</em>}
                {races.error && <span className="text-danger">ERROR: {races.error}</span>}
                {races.items &&      
                <ReactTable
                    data={races.items}
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
                    defaultPageSize={10}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo, column, instance) => {
                    return {
                    onClick: (e, handleOriginal) => {
                        this.props.dispatch(
                            dataActions.selectRace(rowInfo.original, () => {
                                this.props.dispatch(
                                dataActions.fetchHorses(
                                    rowInfo.original.raceid,
                                    rowInfo.original.trackid,
                                    rowInfo.original.date)
                                )
                                this.props.history.push("/horsedata")
                            })
                        )
                        if (handleOriginal) {
                        handleOriginal()
                        }
                    }
                    }
                    }}/>}
           </div>   
        )
    }
}
function mapStateToProps(state) {
    const { races } = state
    return {
        races,
        track: state.activeTrack 
    }
}

export default withRouter(connect(mapStateToProps)(RaceList));