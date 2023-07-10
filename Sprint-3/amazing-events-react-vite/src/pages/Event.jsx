import { useParams } from "react-router-dom"


const Event = ()=>{

    let params = useParams()
    console.log(params)


    return(
        <>
            <h2>Evento con el id {params.id}</h2>
            <p>Lugar bla bla</p>
        </>
    )
}

export default Event