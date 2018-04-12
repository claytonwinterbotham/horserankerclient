import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.Component {
    constructor(props){
        super(props);   
    }

    render(){
        const {user} = this.props
        return (
            <div className="row">
                <div className=" col-12 page-header">
                <h1 className="logo">Horse Ranker</h1>
                <p className="welcome-message">Welcome {user.email}!</p>
                <Link className="logout-btn text-right" to="/login">Logout</Link>
                </div>
            </div>
        
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };

