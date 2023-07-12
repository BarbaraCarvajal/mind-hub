import React from 'react';
import { Link } from 'react-router-dom';
import left from '../imagenes/left.png'
import right from '../imagenes/right.png'
import './estilo.css'

const Navigation = () => {
  return (
    <div className="title-container">
      <Link to="/stats">
        <img className="arrow" src={left} alt="Flecha Izquierda" />
      </Link>
      <h2>Home</h2>
      <Link to="/upcoming-events">
        <img className="arrow" src={right} alt="Flecha Derecha" />
      </Link>
    </div>
  );
};

export default Navigation;
