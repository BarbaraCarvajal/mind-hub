import React from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="col-md-3">
      <div className="card event-card mb-4">
        <img src={event.image} className="card-img-top" alt={event.name} />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">{event.category}</span>
            <span className="text-muted">${event.price}</span>
            <Link to={`/events/${event._id}`} className="btn btn-info">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;




/* import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';
import { StateContext } from "../../store/StateProvider";

const EventCard = ({ event }) => {
  const events = useContext(StateContext);

  return (
    <div className="col-md-3">
      <div className="card event-card mb-4" key={event._id}>
        <img src={event.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{event.category}</small>
            <h6 className="text-muted">${event.price}</h6>
            <Link to={`/events/${event._id}`} className="btn btn-info">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
 */