import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const Home = () => {
  const [events, setEvents] = useState([]); // Estado para almacenar los eventos
  const [filteredEvents, setFilteredEvents] = useState([]); // Estado para almacenar los eventos filtrados
  const [selectedCategories, setSelectedCategories] = useState([]); // Estado para almacenar las categorías seleccionadas
  const [searchText, setSearchText] = useState(''); // Estado para almacenar el texto de búsqueda

  useEffect(() => {
    // Obtener los eventos al cargar el componente
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        setEvents(response.data.events); // Actualizar el estado 'events' con los eventos obtenidos
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    applyFiltersAndSearch(); // Aplicar filtros y búsqueda cuando cambien los estados 'events', 'selectedCategories' o 'searchText'
  }, [events, selectedCategories, searchText]);

  const handleFilter = (categories) => {
    setSelectedCategories(categories); // Actualizar el estado 'selectedCategories' con las categorías seleccionadas
  };

  const handleSearch = (text) => {
    setSearchText(text); // Actualizar el estado 'searchText' con el texto de búsqueda
  };

  const applyFiltersAndSearch = () => {
    const filteredByCategory = events.filter(event =>
      selectedCategories.length === 0 || selectedCategories.includes(event.category)
    ); // Filtrar los eventos por categoría seleccionada

    const filteredBySearch = filteredByCategory.filter(event =>
      event.name.toLowerCase().includes(searchText.toLowerCase())
    ); // Filtrar los eventos por texto de búsqueda

    setFilteredEvents(filteredBySearch); // Actualizar el estado 'filteredEvents' con los eventos filtrados
  };

  return (
    <div>
      {/* Componente de barra de búsqueda */}
      <SearchBar onSearch={handleSearch} />

      {/* Componente de filtro de eventos */}
      <EventFilter events={events} onFilter={handleFilter} />

      <div className="row">
        {/* Componente de tarjeta de evento para cada evento filtrado */}
        {filteredEvents.map(event => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
