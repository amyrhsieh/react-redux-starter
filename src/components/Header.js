import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.scss';

const Header = () => (
  <header>
    <div>
      <h1>React Redux Demo</h1>
    </div>
    <div className="justify-content-center nav">
      <div className="nav-item">
        <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/events" className="nav-link" activeClassName="active">Events</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
      </div>
    </div>
  </header>
);

export default Header;
