
import "./styles/buscador.css"

function Buscador(props) {

    let textoDelInput = ""

    return (
        <>
            <div className="container-buscador">
                <form>
                    <label className="label-buscador" htmlFor="">
                        Nombre:
                        <input type="text" onChange={(event)=> textoDelInput = event.target.value}/>
                    </label>
                </form>
                <input onClick={() => { props.filtrarEvents(textoDelInput) }} className="btn-buscador" type="button" value="Buscar" />

            </div>

        </>
    )
}

export default Buscador