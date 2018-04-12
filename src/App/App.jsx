import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { AdminPage } from '../AdminPage';
import { HorseListPage } from '../HorseListPage';
import { HorseDetailPage } from '../HorseDetailPage';
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
        const { alert } = this.props;
        return(
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                        <Switch>
                            <PrivateRoute path="/Admin" component={AdminPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />   
                            <PrivateRoute path="/horsedetail" component={HorseDetailPage} />
                            <PrivateRoute path="/horsedata" component={HorseListPage} />
                            <PrivateRoute exact path="/" component={HomePage} />
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
    
