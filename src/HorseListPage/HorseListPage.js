import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTrack, selectDate, selectHorse, fetchHorseDetail } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import _ from "lodash";

class HorseListPage extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        if(!this.props.horses){
            return <div>Loading...</div>
        }
        else if(this.props.horses){
            return(
            <div>
                <div className="row">
                    <div className="col-sm-2">    
                        <Link to="/" className="btn btn-info back-button">
                        Back
                        </Link> 
                    </div>
                </div> 
                <div className="row">
                    <div>  
                <ReactTable
                    data={this.props.horses}
                    columns={[{
                        Header:  'Horse Name',
                        accessor: 'name'
                        }, {
                        Header:  'Post',
                        accessor: 'possummary'
                        }, {
                        Header:  'Pace',
                        accessor: 'e2AVGRANK'
                        }, {
                        Header:  'LRPace',
                        accessor: 'eprank'
                        }, {
                        Header: 'PaceHx',
                        accessor: 'hE2RANK'
                        }, {
                        Header: 'PLate', 
                        accessor: 'lpavgrank'
                        }, {
                        Header:  'LRPLate',
                        accessor: 'lpRank'
                        }, {
                        Header:  'LateHx',
                        accessor: 'hlprank'
                        }, {
                        Header:  'LR1Spd',
                        accessor: 'lR1RANK'
                        }, {
                        Header:  'LR2Spd',
                        accessor: 'lR2RANK'
                        }, {
                        Header:  'TopSpd',
                        accessor: 'backspeedrank'
                        }, {
                        Header:  'HxAch',
                        accessor: 'aclrank'
                        }, {
                        Header: 'Form',
                        accessor: 'curclassrank'
                        }, {
                        Header: 'WinProb',
                        accessor: 'primepowerrank'
                        }, {
                        Header: 'ML Odds',
                        accessor: 'pP_ODDS'
                        }, {
                        Header: 'Finish',
                        accessor: 'fin'
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
                        // IMPORTANT! React-Table uses onClick internally to trigger
                        // events like expanding SubComponents and pivots.
                        // By default a custom 'onClick' handler will override this functionality.
                        // If you want to fire the original onClick handler, call the
                        // 'handleOriginal' function.
                        
                        this.props.selectHorse(rowInfo.original, () => {
                                //this.handleClick()
                                this.props.fetchHorseDetail(
                                    rowInfo.original.raceid,
                                    rowInfo.original.horseid)
                                    this.props.history.push("/horsedetail")
                                console.log("this is the selected race " + this.props.horse)
                        })
                        if (handleOriginal) {
                            handleOriginal()
                        }
                        }
                    }
                    }}/>
                    </div>
                </div>
            </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        race: state.activeRace,
        horses: state.horses
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchHorseDetail, 
        selectHorse
     }, dispatch);

}
const connectedHorseListPage = connect(mapStateToProps, mapDispatchToProps)(HorseListPage);
export { connectedHorseListPage as HorseListPage };
