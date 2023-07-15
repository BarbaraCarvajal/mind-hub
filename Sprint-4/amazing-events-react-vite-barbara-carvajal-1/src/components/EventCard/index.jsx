// EventCard.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';
import StateContext from '../../store/StateContext';

const EventCard = () => {
  const { filteredEventos } = useContext(StateContext);
  const [renderedEventos, setRenderedEventos] = useState([]);

  useEffect(() => {
    setRenderedEventos(filteredEventos);
    console.log('Rendered eventos:', renderedEventos);
  }, [filteredEventos]);
  

  useEffect(() => {
    console.log('Rendered eventos:', renderedEventos);
  }, [renderedEventos]);

  return (
    renderedEventos.map(evento => (
      <div className="col-md-3" key={evento._id}>
        <div className="card event-card mb-4">
          <small className="text-muted">{evento.date}</small>
          <img src={evento.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{evento.name}</h5>
            <p className="card-text">{evento.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{evento.category}</small>
              <h6 className="text-muted">${evento.price}</h6>
              <Link to={`/events/${evento._id}`} className="btn btn-info">Ver más</Link>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default EventCard;
