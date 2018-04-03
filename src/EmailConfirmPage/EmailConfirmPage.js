import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class EmailConfirmPage extends React.Component {
    constructor(props) {
        super(props);

      
    }

    render() {
        return (
                <div className="col-md-6">
                    <h2>Thanks for confirming your Email</h2>
                    <h3>Go to login page: <Link to="/login">Login</Link> </h3>
                </div>
        );
    }
}

const connectedEmailConfirmPage = connect()(EmailConfirmPage);
export { connectedEmailConfirmPage as EmailConfirmPage }; 