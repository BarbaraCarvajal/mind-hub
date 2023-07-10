import { useState } from "react"
import Buscador from "./Buscador"
import EventCard from "../EventCard"

const Principal = (props) => {
    const [eventsFiltrados, setEventsFiltrados] = useState(props.events)

    const filtrarEvents = (text) => {
        let eventsFiltradosPorTexto = props.events.filter((event) => event.name === text)

        if (text === "") {
            setEventsFiltrados(props.events)
        } else {
            setEventsFiltrados(eventsFiltradosPorTexto)
        }
    }

    return (
        <>
            <div className="row">
                {eventsFiltrados.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            <Buscador filtrarEvents={filtrarEvents} />
        </>
    )
}

export default Principal
