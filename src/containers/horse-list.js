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



    // renderHorses(){
    //     return _.map(this.state.horses, horse => {
    //         return(
    //             <tr key={horse.horseid}>
    //                 <td>
    //                     {horse.horsenum}
    //                 </td>
    //                 <td>
    //                     {horse.horsetype}
    //                 </td>
    //                 <td>
    //                     {horse.distance}
    //                 </td>
    //                 <td>
    //                     {horse.distance}
    //                 </td>
    //                 <td>
    //                     {horse.ppturf}
    //                 </td>
    //                 <td>
    //                     {horse.chartturf}
    //                 </td>
    //                 <td>
    //                     {horse.offturf}
    //                 </td>
    //             </tr>
    //         )  
    //     });       
    //}

    render() { 
        // if(!this.props.track){
        //     return <div>Select a track and date to get started.</div>
        // }
        // else if(this.props.date && 
        //         this.props.track.trackid == 
        //         this.props.date.trackid){
        //     return(
        //         <div className="col-sm-9">
        //             <h1>{this.props.track.name}</h1>
        //                 <table className="table table-hover table-condensed table-responsive">
        //                     <caption>{this.state.date.date}</caption>
        //                     <thead>
        //                         <tr>
        //                             <th>horse Number</th>
        //                             <th>horse Type</th>
        //                             <th>Distance</th>
        //                             <th>PPTurf</th>
        //                             <th>ChartTurf</th> 
        //                             <th>Offturf</th>                                               
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {this.renderhorses()}
        //                     </tbody>        
        //                 </table>
        //         </div> 
        //     );
        // }else{
        //     if(this.props.date){
        //     console.log(this.props.date.trackid + " " + this.props.track.trackid)
        //     }
            return(
                
                <div><h1>Horse Data!!!!!!</h1></div>
            )
        //}
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