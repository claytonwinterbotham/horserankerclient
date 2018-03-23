import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { selectTrack, selectDate, selectRace, fetchHorses } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class RaceList extends Component {
    constructor(props){
        super(props);
        this.state = {races: null,
                      date: ""  }  
        this.handleClick = this.handleClick.bind(this);                      
    }

componentWillReceiveProps(nextprops){
    if(nextprops.races != this.props.races){
        this.setState({races: nextprops.races})
        this.setState({date: this.props.date})
    }
}
    handleClick(){
        if(this.props.race){
            this.props.fetchHorses(
                this.props.raceid,
                this.props.track.trackid,
                this.props.date.date, () =>{

                    this.props.history.push("/horsedata")
                })
                console.log("race" + this.props.race)
        }
    }

    renderRaces(){
        console.log(this.state.races)
        return _.map(this.state.races, race => {
            return(
                <tr key={race.raceid}
                        onClick={() =>{
                            this.props.selectRace(race)
                            this.handleClick
                        }
                            
                        }>
                    <td>
                        {race.racenum}
                    </td>
                    <td>
                        {race.racetype}
                    </td>
                    <td>
                        {race.distance}
                    </td>
                    <td>
                        {race.distance}
                    </td>
                    <td>
                        {race.ppturf}
                    </td>
                    <td>
                        {race.chartturf}
                    </td>
                    <td>
                        {race.offturf}
                    </td> 
                </tr>
            )  
        });       
    }

    render() { 
        if(!this.props.track){
            return <div>Select a track and date to get started.</div>
        }
        else if(this.props.date && 
                this.props.track.trackid == 
                this.props.date.trackid){
            return(
                <div className="col-sm-9">
                    <h1>{this.props.track.name}</h1>
                        <table className="table table-hover table-condensed table-responsive">
                            <caption>{this.state.date.date}</caption>
                            <thead>
                                <tr>
                                    <th>Race Number</th>
                                    <th>Race Type</th>
                                    <th>Distance</th>
                                    <th>PPTurf</th>
                                    <th>ChartTurf</th> 
                                    <th>Offturf</th>                                               
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRaces()}
                            </tbody>        
                        </table>
                </div> 
            );
        }else{
            if(this.props.date){
            console.log(this.props.date.trackid + " " + this.props.track.trackid)
            }
            return(
                <div>Please choose a date</div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack,
        date: state.activeDate,
        race: state.activeRace,
        races: state.races
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchHorses, 
        selectRace
     }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RaceList));