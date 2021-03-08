import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const Admin = (A) => {
    console.log(A);
    //
    console.log(A.match);
    //
    console.log(A.Teste3);
    return (
        <div>
            Bonjour Mr {A.match.params.ID}
            <Link to="/Users">
            <h1> to User </h1>
            </Link>
        </div>
    )
}

export default withRouter(Admin)
