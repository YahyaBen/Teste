import React, { useState } from 'react'
import firebase from "../Util/firebase"
import { Link} from 'react-router-dom'

const Home = () => {
    const [nom, setNom] = useState('')
    const Verification = async () => {
        const db = firebase.firestore()
        const Users  = db.collection('/Utilisateurs').doc(nom)
        const doc = await Users.get()
        if (!doc.exists) {
            console.log('Utilisateur non-identifier')
        } else {
            doc.data()

        }
        console.log(doc.data())
    }
    return (
        <div>
            <h1> Home </h1>
            <label>Entrer votre ID </label>
            <input type="text"
                id="UserID"
                value={nom}
                onChange={(e) => setNom(e.target.value)} />
            <button onClick={Verification}>Go !</button>
            <Link to="/Users" ><h2>To Users</h2> </Link>
            <Link to="/Admin"><h2>To Admin</h2> </Link>
        </div>
    )
}

export default Home
