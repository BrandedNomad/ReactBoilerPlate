import React from 'react';
import {BrowserRouter,Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import DashboardPage from "../components/DashboardPage";
import LoginPage from "../components/LoginPage";
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

//swapped BrowserRouter for custom Router with history module

const AppRouter =()=>{
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true}/>
                    <PrivateRoute path="/dashboard" component={DashboardPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter

