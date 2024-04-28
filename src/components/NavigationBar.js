import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="nav-links">
      <Link to="/contact" className="custom-button">İletişim</Link>
      <Link to="/ticket-inquiry" className="custom-button">Bilet Sorgulama</Link>
    </nav>
  );
};

export default NavigationBar;
