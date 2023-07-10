import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="col-md-3">
      <div className="card" key={event.id}>
        <img src={event.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{event.category}</small>
            <h6 className="text-muted">${event.price}</h6>
            <button className="btn btn-primary">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
