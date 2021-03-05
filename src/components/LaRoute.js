import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './Admin';
import Users from './Users';

const LaRoute = () => {
    return (
        <div> 
            <a href="www.google.com"> NaveBar </a>
            <Switch>
                <Route path="/Users" component={Users} />
                <Route path="/Admin" component={Admin} />
            </Switch>
        </div>
    )
}

export default LaRoute
