/* Modules */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Containers
import Home from '../containers/home/home';

export default function MyRouter() {
    return (
        <Switch>
            <Route exact path='/' children={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={Home} />
            <Route exact>
                <Redirect to='/home' />
            </Route>
        </Switch>
    );
}
