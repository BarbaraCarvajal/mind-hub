import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import left from '../imagenes/left.png'
import right from '../imagenes/right.png'
import './estilo.css'

const Navigation = () => {
  const location = useLocation();

  const getPageName = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'Home';
      case '/events/:id':
        return 'Event';
      case '/past-events':
        return 'Past Events';
      case '/upcoming-events':
        return 'Upcoming Events';
      case '/estadisticas':
        return 'Statistics';
      case '/contacto':
        return 'Contact';
      case '/events/:id':
        return 'Event';
      case '/login':
        return 'Login';
      case '/register':
        return 'Register';
      default:
        return '';
    }
  };

  return (
    <div className="title-container">
      <Link to="/past-events">
        <img className="arrow" src={left} alt="Flecha Izquierda" />
      </Link>
      <h2>{getPageName()}</h2>
      <Link to="/upcoming-events">
        <img className="arrow" src={right} alt="Flecha Derecha" />
      </Link>
    </div>
  );
};

export default Navigation;
