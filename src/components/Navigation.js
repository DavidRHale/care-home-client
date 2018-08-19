import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="teal lighten-3">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Care Home</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/residents">Residents</Link></li>
        <li><Link to="/">Rooms</Link></li>
      </ul>
    </div>
  </nav>
);
