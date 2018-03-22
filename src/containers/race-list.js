import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class RaceList extends Component {
    constructor(props){
        super(props);
    }

    renderRaces(){
        return _.map(this.props.races, race => {
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
        else{
            return(
                <div className="col-sm-9">
                    <h1>{this.props.track.name}</h1>
                        <table className="table table-hover table-condensed table-responsive">
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
        }
    }
}

function mapStateToProps(state) {
    return {
        track: state.activeTrack,
        races: state.races
    }
}

export default connect(mapStateToProps)(RaceList);