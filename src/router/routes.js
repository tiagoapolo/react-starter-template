/* Modules */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getAuth } from '../utils/token';

// Containers
import Signup from '../containers/signup/signup';
import Login from '../containers/login/login';
import Main from '../containers/main/main';

export default function MyRouter() {
    return (
        <Switch>
            <Route exact path='/' children={() => <Redirect to='/login' />} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            {getAuth() ? <Route exact path='/main' component={Main} /> : <Redirect to='/login' />}
            <Route exact>
                <Redirect to='/login' />
            </Route>
        </Switch>
    );
}
