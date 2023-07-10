import { useState } from "react"
import Buscador from "./Buscador"

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
      {eventsFiltrados.map((event, index) => (
        <div key={index}>
          <p>{event.name}</p>
        </div>
      ))}
      <Buscador filtrarEvents={filtrarEvents} />
    </>
  )
}

export default Principal
