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
        this.state = {races: this.props.races,
                      selected: null
                    }                            
    }
    renderRaces(){
        // if(this.props.races){
        // this.data = this.props.races
        // console.log("in the racelist" + this.props.races)
        // this.columns = [{
        //     Header: 'Racenum',
        //     accessor: 'racenum'
        //   }, {
        //     Header: 'Racetype',
        //     accessor: 'racetype',  
        //   }, {
        //     Header: 'Distance',
        //     accessor: 'distance',  
        //   }, {
        //     Header: 'PPturf', 
        //     accessor: 'ppturf'
        //   }, {
        //     Header: 'Chartturf',
        //     accessor: 'chartturf'
        //   }, {
        //     Header: 'Offturf', 
        //     accessor: 'offturf'
        //   }]
        // }
    //     return _.map(this.props.races, race => {
    //         return(
    //             <tr key={race.raceid}
    //                 onClick={() => {
    //                     this.props.selectRace(race, () => {
    //                         //this.handleClick()
    //                         this.props.fetchHorses(
    //                             race.raceid,
    //                             this.props.track.trackid,
    //                             this.props.date.date)
    //                             this.props.history.push("/horsedata")
    //                         console.log("this is the selected race " + this.props.race)
    //                     })
    //                     }}>
    //                 <td>
    //                     {race.racenum}
    //                 </td>
    //                 <td>
    //                     {race.racetype}
    //                 </td>
    //                 <td>
    //                     {race.distance}
    //                 </td>
    //                 <td>
    //                     {race.distance}
    //                 </td>
    //                 <td>
    //                     {race.ppturf}
    //                 </td>
    //                 <td>
    //                     {race.chartturf}
    //                 </td>
    //                 <td>
    //                     {race.offturf}
    //                 </td> 
    //             </tr>
    //         )  
    //     });       
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
                   defaultPageSize={10}
                   className="-striped -highlight"
                   getTdProps={(state, rowInfo, column, instance) => {
                    return {
                      onClick: (e, handleOriginal) => {
                        console.log('A Td Element was clicked!')
                        console.log('it produced this event:', e)
                        console.log('It was in this column:', column)
                        console.log('It was in this row:', rowInfo)
                        console.log('It was in this table instance:', instance)
                        console.log("raceid" + rowInfo.original.raceid + " " + "track" + rowInfo.original.trackid)
                        // IMPORTANT! React-Table uses onClick internally to trigger
                        // events like expanding SubComponents and pivots.
                        // By default a custom 'onClick' handler will override this functionality.
                        // If you want to fire the original onClick handler, call the
                        // 'handleOriginal' function.
                        this.props.fetchHorses(
                            rowInfo.original.raceid,
                            rowInfo.original.trackid,
                            rowInfo.original.date)
                            this.props.history.push("/horsedata")
                        if (handleOriginal) {
                          handleOriginal()
                        }
                      }
                    }
                  }}/>
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