import React, { useState, useEffect } from 'react';

const EventFilter = ({ events, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(events.map(event => event.category))];
    setCategories(uniqueCategories);
  }, [events]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleFilter = () => {
    onFilter(selectedCategories);
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
              checked={selectedCategories.includes(category)}
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
