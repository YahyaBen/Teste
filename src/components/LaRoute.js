import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Admin from './Admin';
import Users from './Users';
import Home from './Home';
import Error from './Error';

const LaRoute = () => {
    const A = "ABCDE"
    const B = "FGHIJ"
    const C = {
        D :"KLMN",
        E : "OPQRS"
    }
    return (
        <div> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Users" component={Users} />
                <Route path="/Admin/:ID"  render={()=><Admin Teste={A} Teste2={B} Teste3={C}/>}/>
                <Route exact path="/Error"  component={Error} />
            </Switch>
        </div>
    )
}

export default LaRoute
