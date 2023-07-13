import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import SearchBar from '../components/SearchBar';

const Home = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    applyFiltersAndSearch();
  }, [events, selectedCategories, searchText]);

  const handleFilter = (categories) => {
    setSelectedCategories(categories);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const applyFiltersAndSearch = () => {
    const filteredByCategory = events.filter(event =>
      selectedCategories.length === 0 || selectedCategories.includes(event.category)
    );

    const filteredBySearch = filteredByCategory.filter(event =>
      event.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredEvents(filteredBySearch);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <EventFilter events={events} onFilter={handleFilter} />
      <div className="row">
        {filteredEvents.map(event => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
