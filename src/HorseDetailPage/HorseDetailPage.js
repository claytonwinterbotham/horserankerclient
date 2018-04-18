import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'; 
import ReactTable from 'react-table'
import {Header} from '../Components/Header';
import ReactTooltip from 'react-tooltip';

class HorseDetailPage extends Component {
    constructor(props){
        super(props);
    }

    render() { 
       const { horse, user } = this.props
        return(
            <div className=" horse-detail-content container-fluid"> 
            <Header />
            <p className="welcome-message">Welcome {user.email}!</p>   
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
                        Header:  <span>Horse<br/>Name</span>,
                        accessor: 'name'
                        }, {
                        Header:  <span data-tip='Position in the Starting Gate, relative to the Rail'>Post<ReactTooltip /></span>,
                        accessor: 'possummary',
                        Cell: (row) => {
                            return <div><img height={34} src={require('../images/horsenumbers/' + row.value + '.png')}/></div>
                            console.log(JSON.stringify("Row original" + row.value))
                          },
                        },{
                        Header:  <span data-tip="E for Early Speed, P for Pressing, S for Sustained, come from behind">Run<br/>Style<ReactTooltip /></span>,
                        accessor: 'STYLE'
                        }, {
                        Header: <span data-tip="Points for being in  or near the lead in four most recent races (Quirin Points)">Speed<br/>Points<ReactTooltip /></span>,    
                        accessor: 'PTS'
                        }, {
                        Header:  <span data-tip="Average Speed in running to the First Call (usually quarter mile) E2 Brisnet">Average<br/>Pace 1<ReactTooltip /></span>,
                        accessor: 'E1AVGRANK'
                        },
                        {
                        Header:  <span data-tip="Average Speed in running to the Second Call (usually half mile) E2 Brisnet">Average<br/>Pace 2<ReactTooltip /></span>,
                        accessor: 'E2AVGRANK'
                        },
                        {
                        Header:  <span data-tip="Rank of E2 rating for most recent race">Pace 2<br/>Last Race<ReactTooltip /></span>,
                        accessor: 'EPRANK'
                        }, {
                        Header: <span data-tip="Rank of most recent E2, compared to previous 10 races">Pace 2 Rank from<br/>Past Ten Races<ReactTooltip /></span>,
                        accessor: 'HE2RANK'
                        }, {
                        Header: <span data-tip="Average Speed for last quarter of a mile Brisnet Late">Average<br/>Late Pace<ReactTooltip /></span>, 
                        accessor: 'lpavgrank'
                        }, {
                        Header:  <span data-tip="Rating of Late Speed in most recent race">Last Race<br/>Late Pace<ReactTooltip /></span>,
                        accessor: 'lpRank'
                        }, {
                        Header: <span data-tip="Rank of most recent Late Pace compared to previous 10 races">Late Pace Rank<br/>Past Ten<ReactTooltip /></span>,
                        accessor: 'hlprank'
                        }, {
                        Header:  <span data-tip="Rank of Speed rating for most recent race">Last Race<br/>Speed Rank<ReactTooltip /></span>,
                        accessor: 'lR1RANK'
                        }, {
                        Header:  <span data-tip="Rank of Speed rating for Two races ago">Two Races Ago<br/>Speed Rank<ReactTooltip /></span>,
                        accessor: 'lR2RANK'
                        },{
                        Header:  <span data-tip="Rank of Speed rating for Three races ago">Three Races Ago<br/>Speed Rank<ReactTooltip /></span>,
                        accessor: 'lR3RANK'
                        }, {
                        Header:  <span data-tip="Rank of Best Speed figure from past 10 races on this surface/distance">Rank Top Speed/<br/>Past 10<ReactTooltip /></span>,
                        accessor: 'backspeedrank'
                        },
                        {
                        Header:  <span data-tip="Rank of the Average Class of the horses for most recent three races">Average Class<br/>Level Rank<ReactTooltip /></span>,
                        accessor: 'LR1Rank'
                        }, {
                        Header:  <span data-tip="Rank of Best Class Level of Good Performance">Competitive<br/>Level Rank<ReactTooltip /></span>,
                        accessor: 'aclrank'
                        }, {
                        Header: <span data-tip="Rank of Current Class Level in Brisnet for this distance surface">Current Form<br/>Ranking<ReactTooltip /></span>,
                        accessor: 'curclassrank'
                        }, {
                        Header: <span data-tip="Rank of Brisnet Prime Power Figure">Power<br/>Rating Rank<ReactTooltip /></span>,
                        accessor: 'primepowerrank'
                        }, {
                        Header: <span data-tip="Morning line odds.">Morning<br/>Line Odds<ReactTooltip /></span>,
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
    const {authentication } = state;
    const { user } = authentication;
    const { horse } = state;
    return {
        horse,
        user
    }
}

const connectedHorseDetailPage = connect(mapStateToProps)(HorseDetailPage);
export { connectedHorseDetailPage as HorseDetailPage }; 