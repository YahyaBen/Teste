import React, { useState } from 'react'
import firebase from "../Util/firebase"
import { Link } from 'react-router-dom'
import DateFirebaseNow from './DateFirebaseNow'

const Home = (props) => {


    const [nom, setNom] = useState('')
    const Verification = async () => {
        const db = firebase.firestore()
        const Users = db.collection('/Utilisateurs').doc(nom)
        const doc = await Users.get()
        if (!doc.exists) {
            console.log('Utilisateur non-identifier')
            props.history.push('/Error')
        } else {
            doc.data()
            props.history.push('/Admin/' + doc.id)
        }
    }

    return (
        <div>
            <DateFirebaseNow />

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
