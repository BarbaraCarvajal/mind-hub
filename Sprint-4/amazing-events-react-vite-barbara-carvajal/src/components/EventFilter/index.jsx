import React, { useContext, useState } from 'react';
import { StateContext } from '../../store/StateProvider';

function EventFilter() {
  const events = useContext(StateContext);
  const categories = [...new Set(events.map(event => event.category))];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredEvents = events.filter(event => {
    if (selectedCategories.length === 0) {
      return true; // No categories selected, show all events
    }
    return selectedCategories.includes(event.category);
  });

  return (
    <div className="container">
      <h2>Filter Events by Category:</h2>
      <div className="form-check">
        {categories.map(category => (
          <div key={category} className="form-check">
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

      <h2>Filtered Events:</h2>
      {filteredEvents.length === 0 && <p>No events found for the selected categories.</p>}
      {filteredEvents.map(event => (
        <div key={event._id} className="card">
          <img src={event.image} className="card-img-top" alt="Event" />
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">Category: {event.category}</p>
            <p className="card-text">{event.description}</p>
            <p className="card-text">Price: ${event.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventFilter;
