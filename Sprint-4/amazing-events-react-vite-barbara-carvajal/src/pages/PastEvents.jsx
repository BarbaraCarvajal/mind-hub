import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import axios from 'axios';

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        const filteredEvents = response.data.events.filter(event => event.date < '2023-03-10');
        setPastEvents(filteredEvents);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return (
    <div>
      <h1>Past Events</h1>
      <div className="row">
        {pastEvents.map(event => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
