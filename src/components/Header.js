import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Nav
      className="justify-content-center"
      activeKey="/home"
    >
      <Nav.Item>
        <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/events" className="nav-link">Events</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/page2" className="nav-link">Page 2</Link>
      </Nav.Item>
    </Nav>
  </header>
);

export default Header;
