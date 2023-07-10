import { useState } from "react"
import Buscador from "./Buscador"

const Principal = () => {

    let [personajes, setPersonajes] = useState([{ name: "Harry", apellido: "Potter" },
    { name: "Ron", apellido: "Wesley" },
    { name: "Hermione", apellido: "Gringer" }])

    let [personajesFiltrados, setPersonajesFiltrados] = useState(personajes)

    const filtrarPersonajes = (text) => {
        let personajesFiltradosPorTexto = personajes.filter((personaje) => personaje.name == text)

        if (text == ""){
            setPersonajesFiltrados(personajes)
        }else{
            setPersonajesFiltrados(personajesFiltradosPorTexto)
        }
    }

    return (
        <>
            {personajesFiltrados.map((personaje) => {
                return <div key={personaje.name}>
                    <p>{personaje.name}</p>
                    <p>{personaje.apellido}</p>
                </div>
            })

            }
            <Buscador filtrarPersonajes={filtrarPersonajes} />
        </>
    )
}

export default Principal