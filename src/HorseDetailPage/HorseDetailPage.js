import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import {Header} from '../Components/Header';

class HorseDetailPage extends Component {
    constructor(props){
        super(props);
    }

    render() { 
       const { horse } = this.props
        return(
            <div className=" horse-detail-content container-fluid"> 
            <Header />   
            <div className="row">
                <div className="col-sm-2">    
                    <Link to="/horsedata" className="btn btn-info back-button">
                    Back
                    </Link> 
                </div>
            </div> 
            <div className="row">
                <div className="col-sm-12 loading">
                {horse.loading && <em>Loading Horse...</em>}
                {horse.error && <span className="text-danger">ERROR: {horse.error}</span>}
                {horse.items &&      
                    <ReactTable
                    data ={[{
                        name: horse.items.name,
                        possummary: horse.items.possummary,
                        STYLE: horse.items.style,
                        PTS: horse.items.pts,
                        E1AVGRANK: horse.items.e1AVGRANK,
                        E2AVGRANK: horse.items.e2AVGRANK,
                        EPRANK: horse.items.eprank,
                        HE2RANK: horse.items.hE2RANK,
                        lpavgrank: horse.items.lpavgrank,
                        lpRank: horse.items.lpRank,
                        hlprank: horse.items.hlprank,
                        lR1RANK: horse.items.lR1RANK,
                        lR2RANK: horse.items.lR2RANK,
                        lR3RANK: horse.items.lR3RANK,
                        backspeedrank: horse.items.backspeedrank,
                        LR1Rank: horse.items.lR1RANK,
                        aclrank: horse.items.aclrank,
                        curclassrank: horse.items.curclassrank,
                        primepowerrank: horse.items.primepowerrank,
                        pP_ODDS: horse.items.pP_ODDS
                    }]}

                    columns={[{
                        Header:  'Horse Name',
                        accessor: 'name'
                        }, {
                        Header:  'Post',
                        accessor: 'possummary',
                        Cell: (row) => {
                            return <div><img height={34} src={require('../images/horsenumbers/' + row.value + '.png')}/></div>
                            console.log(JSON.stringify("Row original" + row.value))
                          },
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
                    />}
                </div>
            </div>
        </div> 
        )
        }
    }

function mapStateToProps(state) {
    const { horse } = state;
    return {
        horse
    }
}

const connectedHorseDetailPage = connect(mapStateToProps)(HorseDetailPage);
export { connectedHorseDetailPage as HorseDetailPage }; 