import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, dataActions } from '../actions';

import TrackList from './track-list';
import RaceList from './race-list';
//import { fetchTracks, fetchDates, fetchRaces } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class HomePage extends React.Component {
    constructor(props){
        super(props);   
    }

    componentDidMount() {
        this.props.dispatch(
            //userActions.getAll(),
            dataActions.fetchTracks()
    );
        //this.props.dispatch(dataActions.fetchTracks());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        console.log(JSON.stringify(user))
        return (
            <div className="">
               
               {user.role != null && user.role.role == "Admin" && <p><Link to="/Admin">Admin Dashboard</Link></p> }
                     
                <h1>Welcome {user.email}!</h1>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <TrackList />
                <RaceList />
  
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
