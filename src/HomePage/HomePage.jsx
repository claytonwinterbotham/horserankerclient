import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, dataActions } from '../actions';
import {Header} from './Header';
import TrackList from './track-list';
import RaceList from './race-list';
import { bindActionCreators } from 'redux'; 

class HomePage extends React.Component {
    constructor(props){
        super(props);   
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        console.log(JSON.stringify(user))
        return (
            <div id="home" className="home-content container-fluid">
                    <Header />
                <div className="row main-content">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 track-list">
                        <TrackList />
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                        <RaceList />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        track: state.activeTrack,
        date: state.activeDate,
        race: state.activeRace,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
