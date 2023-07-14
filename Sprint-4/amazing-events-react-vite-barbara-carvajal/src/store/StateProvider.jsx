import { useState, useEffect } from "react";
import axios from "axios";
import StateContext from "./StateContext";

function StateProvider({ children }) {
  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState({
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

  useEffect(() => {
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        setEventos(response.data.events); // Actualizar el estado 'eventos' con los eventos obtenidos
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const state = {
    eventos: eventos,
    evento: evento,
    setEvento: setEvento, // Agrega la función setEvento al estado
  };

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
