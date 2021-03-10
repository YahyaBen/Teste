import { React } from 'react'
import axios from 'axios'
import firebase from '../Util/firebase'
const DateFirebaseNow = () => {
    //// Main timer
    const time = async () => {        

        const NotorietyTime = "http://recrutement.notoriety-group.com/date.php"
        const ParisTime = "http://worldtimeapi.org/api/timezone/Europe/Paris.json"
        ////////////////////////////////// FETCH
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////
        // const NotorietyTime = fetch("http://recrutement.notoriety-group.com/date.php")
        // const ParisTime = fetch("http://worldtimeapi.org/api/timezone/Europe/Paris.json")
        // NotorietyTime.then(Data=> Data.json()).then(Data=> {
        //     const date = new Date(Data*1000)
        //     firebase.firestore().collection('/DateTest').add({
        //         DateDeTeste : date
        //     })
        // })
        // .catch(
        //    ParisTime.then(Data=> Data.json()).then(Data=> {
        //     const date = new Date(Data.unixtime*1000)
        //     firebase.firestore().collection('/DateTestZ').add({
        //         DateDeTeste : date
        //     })
        // }).catch(err => console.log( "Les deux liens marche plus !",err))
        // )
        // }
        ////////////////////////////////// AXIOS
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////
        axios.get(NotorietyTime).then(Data=> {
                const date = new Date(Data.data*1000)
                firebase.firestore().collection('/DateTestAxios').add({
                    DateDeTesteAxios : date
                })
            })}

        // const url = "http://recrutement.notoriety-group.com/date.php"
        // const response = await fetch(url)
        // const data = await response.json()
        // console.log(data);
        // const date = new Date(data*1000)
        // console.log(date.toGMTString());

        // const fetchPromise = fetch("http://worldtimeapi.org/api/timezone/Europe/Paris.json").then(status => status.json()).then(statuts).catch(err => console.log(err));
        // fetchPromise.then(response => {
        //     console.log(response);
        // });

        // const statuts = response => {
        //     if(response >= 200 && response.statuts <300){
        //         return Promise.resolve(response)
        //     }
        //     return Promise.reject(new Error(response.statuts.Text))
        // }
        // const json = response => response.json()
        // await fetch('http://worldtimeapi.org/api/timezone/Europe/Paris.json')
        // .then(statuts)
        // .then(json)
        // .then(data => console.log(data))
        // .catch(error => console.log('Failed : ', error))

    // //// Back-up
    // const time = async () => {
    //     const url = "http://worldtimeapi.org/api/timezone/Europe/Paris.json"
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     console.log(data);
    //     const date = new Date(data.unixtime*1000)
    //     console.log(date.toGMTString());
    // }

    return (
        <>
            <button onClick={time}>Clic</button>
        </>
    )
}

export default DateFirebaseNow
