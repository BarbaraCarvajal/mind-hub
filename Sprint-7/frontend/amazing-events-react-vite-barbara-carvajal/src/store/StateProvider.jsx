import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



// Creamos un contexto para almacenar y compartir el estado
const StateContext = createContext();

// Componente StateProvider que envuelve a los componentes hijos
const StateProvider = ({ children }) => {
  // Definimos el estado inicial como un arreglo vacío para los eventos
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    // Hacemos una solicitud GET utilizando axios para obtener los datos de la API
    axios.get('http://localhost:9095/api/eventos/')
      .then(response => {
        // Actualizamos el estado con los eventos obtenidos de la respuesta
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);
  

  // Retornamos el contexto proveedor con el valor establecido como el estado de los eventos
  return (
    <StateContext.Provider value={events}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
