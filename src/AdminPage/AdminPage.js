import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, dataActions } from '../actions';

//import { fetchTracks, fetchDates, fetchRaces } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class AdminPage extends React.Component {
    constructor(props){
        super(props);   
    }

    componentDidMount() {
        this.props.dispatch(
            userActions.getAll(),
        )
         
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        console.log(JSON.stringify(user))
        return (
            <div className="">
                <h3>Admin Dashboard {user.email}!</h3>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <div>
                        {users.items.map((user, index) =>
                            <div key={user.id} className="card" style={{width: 25 +"rem"}}>
                                <div className="card-body">
                                <h5 className="card-title">{user.email}</h5>
                                <Link to={{ 
                                     pathname: '/roles', 
                                     state: {
                                     user_id: user.id,
                                     user_email: user.email 
                                     } }} className="card-link">Assign Roles</Link>
                                </div>
                            </div>
                        )}
                    </div>
                }
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
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

const connectedAdminPage = connect(mapStateToProps)(AdminPage);
export { connectedAdminPage as AdminPage };
