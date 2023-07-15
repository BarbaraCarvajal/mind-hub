// StateProvider.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import StateContext from "./StateContext";

function StateProvider({ children }) {
  const [eventos, setEventos] = useState([]);
  const [filteredEventos, setFilteredEventos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
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
        const allEvents = response.data.events;
        setEventos(allEvents);
        setFilteredEventos(allEvents);
        const uniqueCategories = [...new Set(allEvents.map(event => event.category))];
        setCategorias(uniqueCategories);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredEventos(eventos.filter(evento => selectedCategories.includes(evento.category)));
    } else {
      setFilteredEventos(eventos);
    }
  }, [selectedCategories, eventos]);

  const state = {
    eventos: eventos,
    setEventos: setEventos,
    filteredEventos: filteredEventos,
    setFilteredEventos: setFilteredEventos,
    categorias: categorias,
    selectedCategories: selectedCategories,
    setSelectedCategories: setSelectedCategories,
    evento: evento,
    setEvento: setEvento,
  };

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
