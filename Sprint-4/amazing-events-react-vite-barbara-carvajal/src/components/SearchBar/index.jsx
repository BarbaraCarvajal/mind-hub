import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="container">
      <h4>Buscar Eventos</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese un término de búsqueda"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn btn-info" onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
