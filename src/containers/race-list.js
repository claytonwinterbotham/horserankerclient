import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class RaceList extends Component {
    constructor(props){
        super(props);
        this.state = {races: null,
                      date: ""  }
    }

componentWillReceiveProps(nextprops){
    if(nextprops.races != this.props.races){
        this.setState({races: nextprops.races})
        this.setState({date: this.props.date})
    }
}


    renderRaces(){
        console.log(this.state.races)
        return _.map(this.state.races, race => {
            return(
                <tr key={race.raceid}>
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
        races: state.races
    }
}

export default connect(mapStateToProps)(RaceList);