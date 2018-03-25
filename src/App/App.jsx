import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';

import HorseList from '../containers/horse-list';
import HorseDetail from '../containers/horse-detail';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

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
        console.log("App C.")
        const { alert } = this.props;
        return(
            <div className="container fluid">
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div className="row">
                        <Switch>
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />    
                            <PrivateRoute path="/horsedetail" component={HorseDetail} />
                            <PrivateRoute path="/horsedata" component={HorseList} />
                            <PrivateRoute exact path="/" component={HomePage} />
                        </Switch>
                    </div>  
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
    
