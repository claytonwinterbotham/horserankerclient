import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class horseList extends Component {
    constructor(props){
        super(props);
    }



    renderHorses(){
        if(this.props.horses){
        return _.map(this.props.horses, horse => {
            return(
                
                <tr key={horse.horseid}>
                    <td>
                        {horse.horseid}
                    </td>
                    <td>
                        {horse.raceid}
                    </td>
                    <td>
                        {horse.trackid}
                    </td>
                    <td>
                        {horse.name}
                    </td>
                    <td>
                        {horse.possummary}
                    </td>
                    <td>
                        {horse.e2AVGRANK}
                    </td>
                    <td>
                        {horse.eprank}
                    </td>
                    <td>
                        {horse.hE2RANK}
                    </td>
                    <td>
                        {horse.lpavgrank}
                    </td>
                    <td>
                        {horse.lpRank}
                    </td>
                    <td>
                        {horse.hlprank}
                    </td>
                    <td>
                        {horse.lR1RANK}
                    </td>
                    <td>
                        {horse.lR2RANK}
                    </td>
                    <td>
                        {horse.backspeedrank}
                    </td>
                    <td>
                        {horse.aclrank}
                    </td>
                    <td>
                        {horse.curclassrank}
                    </td>
                    <td>
                        {horse.primepowerrank}
                    </td>
                    <td>
                        {horse.pP_ODDS}
                    </td>
                    <td>
                        {horse.fin}
                    </td>
                </tr>
            )  
        }); 
    }      
    }

    render() { 
        if(!this.props.horses){
            return <div>Loading...</div>
        }
        else{
            return(
                <div className="col-sm-12">
                <div className="text-xs-left">
                    <Link to="/" className="btn btn-primary">
                    Back
                    </Link>
                </div>
                    {/* <h1>{this.props.track.name}</h1> */}
                        <table className="table table-hover table-responsive">
                            {/* <caption>{this.state.date.date}</caption> */}
                            <thead>
                                <tr>
                                    <th>horse id</th>
                                    <th>race id</th>
                                    <th>track id </th>
                                    <th>Name</th>
                                    <th> possummary</th>
                                    <th>e2avgrank</th>
                                    <th>
                                       eprank
                                    </th>
                                    <th>
                                       he2rank
                                    </th>
                                    <th>
                                       lpavgrank
                                    </th>
                                    <th>
                                       lprank
                                    </th>
                                    <th>
                                       hlprank
                                    </th>
                                    <th>
                                       lr1rank
                                    </th>
                                    <th>
                                       lr2rank
                                    </th>
                                    <th>
                                       backspeedrank
                                    </th>
                                    <th>
                                       aclrank
                                    </th>
                                    <th>
                                       curclassrank
                                    </th>
                                    <th>
                                       primepowerrank
                                    </th>
                                    <th>
                                       pp_odds
                                    </th>
                                    <th>
                                       finish
                                    </th>                                                 
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderHorses()}
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
        date: state.activeDate,
        horses: state.horses
    }
}

export default connect(mapStateToProps)(horseList);