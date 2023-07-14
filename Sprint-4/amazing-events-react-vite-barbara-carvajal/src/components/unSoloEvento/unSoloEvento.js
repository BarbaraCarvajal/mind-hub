import axios from "axios";

const unSoloEvento = async (id, state) => { 
  try {
    const response = await axios.get(`https://mindhub-xj03.onrender.com/api/amazing?_id=${id}`);
    const eventData = response.data.events;
    
    // Actualiza el estado del evento con los datos obtenidos
    state.setEvento(eventData);
  } catch (error) {
    console.log('Error:', error);
  }
};

export default unSoloEvento;
