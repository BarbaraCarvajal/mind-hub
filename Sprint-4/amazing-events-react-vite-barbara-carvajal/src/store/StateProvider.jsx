import {useState} from "react";
import StateContext from "./StateContext";


const StateProvider = () => {

    //que tipos de variables-estados podrá tener nuestra app
    const initialState = {
        eventos: [],
        evento: {
            image: "",
            name: "",
            description: "",
            category: "",
            place: "",
            capacity: 0,
            assistance: 0,
            price: 0,
        }
    }

    return (
        <StateContext.Provider value={}>


        </StateContext.Provider>
    )
}
