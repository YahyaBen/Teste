import React from 'react'
import firebase from "../Util/firebase"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";


const Users = () => {
    const [Utilisateurs, setUtilisateurs] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("Utilisateurs")
            .where('Type',"==",1)
            .onSnapshot((users) => {
                setUtilisateurs(users.docs);
            });
    }, []);

    return (
        <div>
            <Link to="/Admin">
                <h1> to Admin </h1>
            </Link>
            <p>
                {Utilisateurs.forEach((User) => {
                        console.log("Name : "+User.data().Name)
                        console.log("Pause : "+User.data().IsPause)
                        console.log("Pause : "+User.data().NumeroPause)
                        console.log("Groupe  : "+User.data().Groupe)
                        console.log("Type : "+User.data().Type)
                })}
            </p>
        </div>
    )
}

export default Users
