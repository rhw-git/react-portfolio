import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar(props) {
  const {
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    portfolioSelected,
    setPortfolioSelected,
  } = props;
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
            <Nav.Link
              data-testid="about"
              href="#about"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(false);
              }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              data-testid="portfolio"
              href="#portfolio"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(true);
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              data-testid="contact"
              href="#contact"
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              data-testid="resume"
              href="#resume"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(true);
                setPortfolioSelected(false);
              }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
