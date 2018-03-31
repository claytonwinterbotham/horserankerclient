import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, dataActions } from '../actions';

//import { fetchTracks, fetchDates, fetchRaces } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class RolesPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id:this.props.location.state.user_id,
            user_email: this.props.location.state.user_email,

        }
    }

    componentDidMount() {
        this.props.dispatch(
            userActions.getAllRoles() 
        )

        this.props.dispatch(
            userActions.getAllUserRoles(this.state.user_email)
        )
        
    }

    render() {
        const { roles, userRoles } = this.props;
        return (
            <div>
                <div className="">
                <h3>Admin Dashboard | Role Assignment for {this.state.user_email} </h3>
                {roles.loading && <em>Loading Roles...</em>}
                {roles.error && <span className="text-danger">ERROR: {roles.error}</span>}
                {roles.items && <em>Current Roles</em> &&
                    <ul>
                        {roles.items.map((role) =>
                            <li key={role.id}
                            onClick={() =>{
                                this.props.dispatch(
                                    userActions.assignRoles(this.state.user_email, role.roleName, () =>{
                                        this.props.dispatch(
                                            userActions.getAllUserRoles(this.state.user_email)
                                        )
                                    })
                                )

                                

                                this.setState({
                                    roleAdded: true
                                })
                            }}>
                                {role.roleName}
                            </li>
                        )}
                    </ul>
                }
                </div>
                <div className="">
                {userRoles.loading && <em>Loading Roles...</em>}
                {userRoles.error && <span className="text-danger">ERROR: {userRoles.error}</span>}
                {userRoles.items == 0 && <span className="text-warning">No Roles Are Assigned</span>}
                {userRoles.items && <em>Current Roles</em> &&
                    <ul>
                        {userRoles.items.map((userRole) =>
                        
                            <li key={userRole.id}>
                                {userRole.roleName}
                            </li>
                        )}
                    </ul>
                }
                </div>
                <p>
                    <Link to="/Admin">Back</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { roles, userRoles } = state;
    return {
        roles,
        userRoles
    };
}

const connectedRolesPage = connect(mapStateToProps)(RolesPage);
export { connectedRolesPage as RolesPage};
