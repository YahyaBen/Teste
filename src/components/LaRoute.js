import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Admin from './Admin';
import Users from './Users';
import Home from './Home';

const LaRoute = () => {
    return (
        <div> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Users/:RZK" component={Users} />
                <Route exact path="/Admin"  component={Admin} />
            </Switch>
        </div>
    )
}

export default LaRoute
