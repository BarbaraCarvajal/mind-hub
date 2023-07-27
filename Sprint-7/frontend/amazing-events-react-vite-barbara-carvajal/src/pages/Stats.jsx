import TableStats from "../components/TablesStats/TableStats"
import TableUpcoming from "../components/TablesStats/TableUpcoming"
import TablePast from "../components/TablesStats/TablePast"
import axios from 'axios'
import { useEffect, useState } from 'react'

function Stats(props) {
    const URL = "http://localhost:9095/api/eventos"
    let [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(URL).then(response => {
            setEvents(response.data);
        })
    }, [])

  
    let eventsPast = events.filter(event => event.hasOwnProperty("assistance"))
    let eventsUpcoming = events.filter(event => event.hasOwnProperty("estimate"))
    console.log("eventsPast", eventsPast)
    console.log("eventsUpcoming", eventsUpcoming)
    return (
        <>
            <div className="container">
                    <TableStats events={eventsPast}></TableStats>
                    <TableUpcoming events={eventsUpcoming}></TableUpcoming>
                    <TablePast events={eventsPast}></TablePast>
            </div>
        </>
    )
}

export default Stats