import React, { useContext } from 'react';
import { StateContext } from '../store/StateProvider';
import EventFilter from '../components/EventFilter';

const Home = () => {
  const events = useContext(StateContext);

  return (
    <div>
      <EventFilter />
    </div>
  );
};

export default Home;
