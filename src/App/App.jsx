import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { AdminPage } from '../AdminPage';
import { HorseListPage } from '../HorseListPage';
import { HorseDetailPage } from '../HorseDetailPage';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute, NotFound } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AboutPage } from '../AboutPage';
import { hashHistory } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return(
            <div>
                <Router history={history}>
                        <Switch>
                            <PrivateRoute path="/About" component={AboutPage} />
                            <PrivateRoute path="/Admin" component={AdminPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />   
                            <PrivateRoute path="/horsedetail" component={HorseDetailPage} />
                            <PrivateRoute path="/horsedata" component={HorseListPage} />
                            <PrivateRoute path="/" component={HomePage} />
                        </Switch>
                </Router>
            </div>    
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
    
