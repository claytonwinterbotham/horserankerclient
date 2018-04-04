import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataActions } from '../actions';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import _ from "lodash";

class HorseListPage extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        const {horses} = this.props
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
                <div className="col-sm-12">
                    {horses.loading && <em>Loading Horses...</em>}
                    {horses.error && <span className="text-danger">ERROR: {horses.error}</span>}
                    {horses.items &&      
                    <ReactTable
                    data={horses.items}
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
                        
                            this.props.dispatch(
                                dataActions.selectHorse(rowInfo.original, () => {

                                    this.props.dispatch(
                                        dataActions.fetchHorseDetail(
                                            rowInfo.original.raceid,
                                            rowInfo.original.horseid)
                                    )
                                    this.props.history.push("/horsedetail")
                                })
                            )      
                        if (handleOriginal) {
                            handleOriginal()
                        }
                        }
                    }
                    }}/>}
                    </div>
                </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { horses } = state
    return {
        horses
    }
}

const connectedHorseListPage = connect(mapStateToProps)(HorseListPage);
export { connectedHorseListPage as HorseListPage };
