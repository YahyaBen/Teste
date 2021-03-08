import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Admin from './Admin';
import Users from './Users';
import Home from './Home';
import Error from './Error';

const LaRoute = () => {
    return (
        <div> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Users" component={Users} />
                <Route path="/Admin/:ID"  component={Admin} />
                <Route exact path="/Error"  component={Error} />
            </Switch>
        </div>
    )
}

export default LaRoute
