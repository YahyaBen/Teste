import { React } from 'react'

const DateFirebaseNow = () => {
    //// Main timer
    const time = async () => {
        // const url = "http://recrutement.notoriety-group.com/date.php"
        // const response = await fetch(url)
        // const data = await response.json()
        // console.log(data);
        // const date = new Date(data*1000)
        // console.log(date.toGMTString());

        const fetchPromise = fetch("http://recrutement.notoriety-group.com/date.php").then(status => status.status).then(status => status+200).then(status => status-1);
        fetchPromise.then(response => {
            console.log(response);
        });

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

    }




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
