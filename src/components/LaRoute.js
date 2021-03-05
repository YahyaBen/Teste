import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './Admin';
import User from './User';

const LaRoute = () => {
    return (
        <div> 
            <a href="www.google.com"> NaveBar</a>
            <Switch>
                <Route path="/User" component={User} />
                <Route path="/Admin" component={Admin} />
            </Switch>
        </div>
    )
}

export default LaRoute
