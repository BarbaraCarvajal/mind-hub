import axios from "axios";

const unSoloEvento = async (id, state) =>{ 
    const peticion = await axios.get(`https://mindhub-xj03.onrender.com/api/amazing?_id=${id}`) 
    console.log(peticion.data.events); }

export { unSoloEvento }

//https://mindhub-xj03.onrender.com/api/amazing?_id=2

