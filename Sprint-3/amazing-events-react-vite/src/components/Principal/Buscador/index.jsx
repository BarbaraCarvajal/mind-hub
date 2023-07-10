
import { useRef } from "react"
import "./styles/buscador.css"
import { useEffect } from "react"

function Buscador(props) {

    //let textoDelInput = ""

    let inputTexto = useRef()

    useEffect(()=>{
        console.log(inputTexto.current.value);
    },[])


    return (
        <>
            <div className="container-buscador">
                <form>
                    <label className="label-buscador" htmlFor="">
                        Buscar por nombre:
                        <input type="text" ref ={inputTexto}/>
                    </label>
                </form>
                <input onClick={() => { props.filtrarEvents(inputTexto.current.value) }} className="btn-buscador" type="button" value="Buscar" />

            </div>

        </>
    )
}

export default Buscador