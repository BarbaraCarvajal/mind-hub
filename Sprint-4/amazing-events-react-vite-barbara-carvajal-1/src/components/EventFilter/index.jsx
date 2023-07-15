// EventFilter.js
import React, { useState, useEffect, useContext } from 'react';
import StateContext from '../../store/StateContext';

const EventFilter = () => {
  const state = useContext(StateContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(state.eventos.map(event => event.category))];
    setCategories(uniqueCategories);
  }, [state.eventos]);

  const handleCategoryChange = (category) => {
    const updatedCategories = [...state.selectedCategories]; // Crear una copia del estado selectedCategories

    if (updatedCategories.includes(category)) {
      // Si la categoría ya está seleccionada, se elimina de la lista de categorías seleccionadas
      const index = updatedCategories.indexOf(category);
      updatedCategories.splice(index, 1);
    } else {
      // Si la categoría no está seleccionada, se agrega a la lista de categorías seleccionadas
      updatedCategories.push(category);
    }

    state.setSelectedCategories(updatedCategories); // Actualizar el estado selectedCategories
  };

  const handleFilter = () => {
    const filteredEvents = state.eventos.filter(event => state.selectedCategories.includes(event.category));
    state.setFilteredEventos(filteredEvents);
  };

  return (
    <div className="container">
      <h4>Filtro de Eventos por Categoría</h4>
      <div className="btn-group" role="group" aria-label="Filtro de Categorías">
        {categories.map(category => (
          <div className="form-check form-check-inline" key={category}>
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={state.selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="form-check-input"
            />
            <label htmlFor={category} className="form-check-label">{category}</label>
          </div>
        ))}
      </div>
      <button className="btn btn-info" onClick={handleFilter}>Filtrar</button>
      <hr />
    </div>
  );
};

export default EventFilter;
