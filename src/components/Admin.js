import React from 'react'
import {Link} from 'react-router-dom'

const Admin = (props) => {
    console.log( props.history);
    console.log( "//");
    console.log( props.match);
    console.log( "//");
    console.log( props.location);
    return (
        <div>
            Bonjour Mr {props.match.params.ID}
            <Link to="/Users">
            <h1> to User </h1>
            </Link>
        </div>
    )
}

export default Admin
