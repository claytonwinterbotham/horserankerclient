import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTrack, selectDate } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import _ from "lodash";

class HorseDetailPage extends Component {
    constructor(props){
        super(props);
    }



    render() { 
        if(!this.props.horseDetail){
            return <div>Loading...</div>
        }
        else{
            return(

                <div>
                <div className="row">
                    <div className="col-sm-2">    
                        <Link to="/horsedata" className="btn btn-info back-button">
                        Back
                        </Link> 
                    </div>
                </div> 
                <div className="row">
                    <div>  
                <ReactTable
                    data ={[{
                        name: this.props.horseDetail.name,
                        possummary: this.props.horseDetail.possummary,
                        STYLE: this.props.horseDetail.style,
                        PTS: this.props.horseDetail.pts,
                        E1AVGRANK: this.props.horseDetail.e1AVGRANK,
                        E2AVGRANK: this.props.horseDetail.e2AVGRANK,
                        EPRANK: this.props.horseDetail.eprank,
                        HE2RANK: this.props.horseDetail.hE2RANK,
                        lpavgrank: this.props.horseDetail.lpavgrank,
                        lpRank: this.props.horseDetail.lpRank,
                        hlprank: this.props.horseDetail.hlprank,
                        lR1RANK: this.props.horseDetail.lR1RANK,
                        lR2RANK: this.props.horseDetail.lR2RANK,
                        lR3RANK: this.props.horseDetail.lR3RANK,
                        backspeedrank: this.props.horseDetail.backspeedrank,
                        LR1Rank: this.props.horseDetail.lR1RANK,
                        aclrank: this.props.horseDetail.aclrank,
                        curclassrank: this.props.horseDetail.curclassrank,
                        primepowerrank: this.props.horseDetail.primepowerrank,
                        pP_ODDS: this.props.horseDetail.pP_ODDS
                      }]}

                    columns={[{
                        Header:  'Horse Name',
                        accessor: 'name'
                        }, {
                        Header:  'Post',
                        accessor: 'possummary'
                        },{
                        Header:  'RunStyle',
                        accessor: 'STYLE'
                        }, {
                        Header:  'SpPoints',
                        accessor: 'PTS'
                        }, {
                        Header:  'Pace1',
                        accessor: 'E1AVGRANK'
                        },
                        {
                        Header:  'Pace2',
                        accessor: 'E2AVGRANK'
                        },
                        {
                        Header:  'LRPace',
                        accessor: 'EPRANK'
                        }, {
                        Header: 'PaceHx',
                        accessor: 'HE2RANK'
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
                        },{
                        Header:  'LR3Spd',
                        accessor: 'lR3RANK'
                        }, {
                        Header:  'TopSpd',
                        accessor: 'backspeedrank'
                        },
                        {
                        Header:  'LRClassRank',
                        accessor: 'LR1Rank'
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
                        }]}
                    defaultPageSize={1}
                    className="-striped -highlight"
                    showPagination = {false}
                    // getTdProps={(state, rowInfo, column, instance) => {
                    // return {
                    //     onClick: (e, handleOriginal) => {
                    //     console.log('A Td Element was clicked!')
                    //     console.log('it produced this event:', e)
                    //     console.log('It was in this column:', column)
                    //     console.log('It was in this row:', rowInfo)
                    //     console.log('It was in this table instance:', instance)
                    //     if (handleOriginal) {
                    //         handleOriginal()
                    //     }
                    //     }
                    // }
                    // }}
                    />
                    </div>
                </div>
            </div> 
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        horseDetail: state.horseDetail
    }
}

const connectedHorseDetailPage = connect(mapStateToProps)(HorseDetailPage);
export { connectedHorseDetailPage as HorseDetailPage }; 