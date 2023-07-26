import React, { useContext, useState } from 'react';
import { StateContext } from '../../store/StateProvider';
import './estilo.css';
import EventCard from '../EventCard';


function EventFilter() {

  const events = useContext(StateContext);
  console.log(events)
  const categories = [...new Set(events.map(event => event.category))];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredEvents = events.filter(event => {
    if (selectedCategories.length === 0) {
      return event.name.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return (
        selectedCategories.includes(event.category) &&
        event.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Realiza acciones adicionales si es necesario al enviar el formulario de búsqueda
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-check form-check-inline">
            {categories.map(category => (
              <div key={category} className="form-check-inline">
                <input
                  type="checkbox"
                  id={category}
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="form-check-input"
                />
                <label htmlFor={category} className="form-check-label">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleFormSubmit} className="d-flex">
            <div className="form-group col-md-10">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Buscar evento"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-info m-1">Buscar</button>
          </form>
        </div>
      </div>

      <hr />

      {filteredEvents.length === 0 && <p>No existen eventos que coincidan con la búsqueda 😿</p>}
      <div className="row">
        {filteredEvents.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventFilter;
 