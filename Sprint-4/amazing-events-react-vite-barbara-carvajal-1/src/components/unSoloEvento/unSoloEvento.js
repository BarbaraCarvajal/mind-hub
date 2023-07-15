import axios from "axios";

const unSoloEvento = async (id, setEvento) => { 
  try {
    // Restablecer el evento al estado inicial

    console.log(`Fetching event with ID: ${id}`);
    setEvento({
      _id: 0,
      image: "",
      name: "",
      description: "",
      category: "",
      place: "",
      capacity: 0,
      assistance: 0,
      estimate: 0,
      price: 0,
    });

    const response = await axios.get(`https://mindhub-xj03.onrender.com/api/amazing?_id=${id}`);
    const eventData = response.data.events;

    console.log('Received event data:', eventData);
    
    // Actualiza el estado del evento con los datos obtenidos
    setEvento(eventData);
  } catch (error) {
    console.log('Error:', error);
  }
};

export default unSoloEvento;
