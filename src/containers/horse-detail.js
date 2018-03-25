import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import _ from "lodash";

class horseDetail extends Component {
    constructor(props){
        super(props);
    }



    renderdetails(){
        if(this.props.detail){
            console.log("horsedetail" + this.props.detail)
            return(
                
                <tr>
                    <td>
                        {this.props.detail.horseid}
                    </td>
                    <td>
                        {this.props.detail.raceid}
                    </td>
                    <td>
                        {this.props.detail.trackid}
                    </td>
                    <td>
                        {this.props.detail.name}
                    </td>
                    <td>
                        {this.props.detail.possummary}
                    </td>
                    <td>
                        {this.props.detail.e2AVGRANK}
                    </td>
                    <td>
                        {this.props.detail.eprank}
                    </td>
                    <td>
                        {this.props.detail.hE2RANK}
                    </td>
                    <td>
                        {this.props.detail.lpavgrank}
                    </td>
                    <td>
                        {this.props.detail.lpRank}
                    </td>
                    <td>
                        {this.props.detail.hlprank}
                    </td>
                    <td>
                        {this.props.detail.lR1RANK}
                    </td>
                    <td>
                        {this.props.detail.lR2RANK}
                    </td>
                    <td>
                        {this.props.detail.backspeedrank}
                    </td>
                    <td>
                        {this.props.detail.aclrank}
                    </td>
                    <td>
                        {this.props.detail.curclassrank}
                    </td>
                    <td>
                        {this.props.detail.primepowerrank}
                    </td>
                    <td>
                        {this.props.detail.pP_ODDS}
                    </td>
                </tr>
            )  
        }      
    }

    render() { 
        if(!this.props.detail){
            return <div>Loading...</div>
        }
        else{
            return(
                <div className="col-sm-12">
                <div className="text-xs-left">
                    <Link to="/horsedata" className="btn btn-primary">
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
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderdetails()}
                            </tbody>        
                        </table>
                </div> 
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        detail: state.horseDetail
    }
}

export default connect(mapStateToProps)(horseDetail);