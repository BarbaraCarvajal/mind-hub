import React from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="col-md-3">
      <div className="card event-card mb-4" key={event._id}>
        <small className="text-muted">{event.date}</small>
        <img src={event.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{event.category}</small>
            <h6 className="text-muted">${event.price}</h6>
            <Link to={`/events/${event._id}`} className="btn btn-info">Ver más</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
