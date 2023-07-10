import React from 'react';
import Principal from '../components/Principal';

const Home = (props) => {
  const { events } = props;

  return (
    <>
      <h1>Home 🏚️</h1>
      {events ? <Principal events={events} /> : <p>Cargando eventos...</p>}
    </>
  );
};

export default Home;
