import React from 'react';
import imagenInstagram from '../imagenes/instagram.png';
import imagenFacebook from '../imagenes/facebook.png';
import imagenWsp from '../imagenes/wsp.png';
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={imagenInstagram} alt="Icono 1" />
      <img src={imagenFacebook} alt="Icono 2" />
      <img src={imagenWsp} alt="Icono 3" />
    </footer>
  );
};

export default Footer;
