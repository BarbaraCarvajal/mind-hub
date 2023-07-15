
// Event.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StateContext from '../store/StateContext';
import unSoloEvento from '../components/unSoloEvento/unSoloEvento';

const Event = () => {
  const { id } = useParams();
  const state = useContext(StateContext);

  useEffect(() => {
    unSoloEvento(id, state.setEvento);
  }, [id, state.setEvento]);

  return (
    <div className="container">
      <div className="card" style={{ backgroundColor: '#e2f1ff' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={state.evento.image} className="card-img img-thumbnail" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{state.evento.name}</h1>
              <p className="card-text">{state.evento.description}</p>
              <p className="card-text">Categoría: {state.evento.category}</p>
              <p className="card-text">Lugar: {state.evento.place}</p>
              <p className="card-text">Capacidad: {state.evento.capacity}</p>
              <p className="card-text">Asistencia: {state.evento.assistance}</p>
              <p className="card-text">Precio: ${state.evento.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;