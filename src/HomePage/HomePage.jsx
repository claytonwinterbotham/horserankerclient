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
                <h1>Welcome {user.token.value.token}!</h1>
                {/* <p>You're logged in with React and ASP.NET Core 2.0!!</p> */}
                {/* <h3>All registered users:</h3> */}
                {/* {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                } */}
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
