import React from "react";

const Boton = ({text, onClick})=>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

export default Boton;