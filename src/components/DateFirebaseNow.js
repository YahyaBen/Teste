import { React } from 'react'

const DateFirebaseNow = () => {
    //// Main timer
    const time = async () => {
        const url = "http://recrutement.notoriety-group.com/date.php"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        const date = new Date(data*1000)
        console.log(date.toGMTString());
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
