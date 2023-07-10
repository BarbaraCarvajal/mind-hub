
import "./styles/buscador.css"

function Buscador (props){

    let textoDelInput = ""

    return(
        <>
            <div className="container-buscador">
                <label className="label-buscador" htmlFor="">
                    Nombre: 
                    <input type="text" onChange={(evento)=>textoDelInput = evento.target.value}/>
                  
                </label>

                <input onClick={()=>{props.filtrarPersonajes(textoDelInput)}} className="btn-buscador" type="button" value="Buscar" />
            </div>
            
        </>
    )
}

export default Buscador