import React, { useContext } from 'react';
import EventCard from '../components/EventCard';
import { StateContext } from '../store/StateProvider';

const Home = () => {
  const events = useContext(StateContext);

  return (
    <div>
      
      <div className="row">
        {events.map(event => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
