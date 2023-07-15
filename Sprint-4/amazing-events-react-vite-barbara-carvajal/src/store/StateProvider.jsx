
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        setEvents(response.data.events);
        console.log(response.data.events);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return (
    <StateContext.Provider value={events}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
