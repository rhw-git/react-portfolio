import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-4"
      >
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-stretch"
          id="responsive-navbar-nav"
        >
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link data-testid="about" href="#about">
              About Me
            </Nav.Link>
            <Nav.Link data-testid="portfolio" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link data-testid="contact" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link data-testid="resume" href="#resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
