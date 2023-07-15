import React, { useContext } from 'react';
import EventCard from '../components/EventCard';
import { StateContext } from '../store/StateProvider';

const UpcomingEvents = () => {
  const events = useContext(StateContext);
  const upcomingEvents = events.filter(event => event.date > '2023-03-10');

  return (
    <div>
      <div className="row">
        {upcomingEvents.map(event => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
