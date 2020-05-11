// Modules
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Containers
import Home from 'containers/Home/Home';
import NotFound from 'containers/NotFound/NotFound';

function Routers() {
    return (
        <Switch>
            <Redirect exact path='/' to='/home' />
            <Route exact path='/home' component={Home} />
            <Route exact path='*' component={NotFound} />
        </Switch>
    );
}

export default Routers;
