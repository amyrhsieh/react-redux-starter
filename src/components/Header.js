import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <header>
    <Nav
      className="justify-content-center"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/events">Events</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/page2">Page 2</Nav.Link>
      </Nav.Item>
    </Nav>
  </header>
);

export default Header;
