import React from "react";
import Nav from "./Nav";


const Header = (props)=>{
    return(
        <>
            <h1>{props.titulo ? props.titulo : "Personajes Harry Potter 🧹🧙🏻‍♂️"}</h1>
            <Nav/>
        
        </>
    )
}

export default Header