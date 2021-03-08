import React from 'react'
import {Link} from 'react-router-dom'

const Admin = (props) => {
    console.log( props.match.params);
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
