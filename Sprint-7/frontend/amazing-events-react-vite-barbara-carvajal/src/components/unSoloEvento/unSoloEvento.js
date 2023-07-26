import axios from "axios";

const unSoloEvento = async (id, state) =>{ 
    //const peticion = await axios.get(`https://mindhub-xj03.onrender.com/api/amazing?_id=${id}`) 
    const peticion = await axios.get(`http://localhost:9095/api/eventos/?_id=${id}`) 
    console.log(peticion.data.events); }

export { unSoloEvento }

//https://mindhub-xj03.onrender.com/api/amazing?_id=2
//http://localhost:9095/api/eventos/64c0178b2a72342f19ebd9b6

