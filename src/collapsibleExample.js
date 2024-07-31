import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "./images/my-logo.png";
import IconYoutube from "./images/youtube.svg";
import Instagram from "./images/instagram.svg";
import Linkedin from "./images/linkedin.svg";
import Github from "./images/github.svg";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="my-logo" src={Logo} alt="my-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/skills">My Skills</Nav.Link>
            <NavDropdown title="My Works" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/work/project1">Project 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work/project2">Project 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work/project3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/work/internships">My Internships</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="My Socials" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.youtube.com/@JettJinx404">
                <img className="social2" src={IconYoutube} alt="youtube" /> Youtube
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/maaz_ajaz?igsh=YTZ6ODJzaWEzYnZv&utm_source=qr">
                <img className="social2" src={Instagram} alt="instagram" /> Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/maazajaz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <img className="social2" src={Linkedin} alt="linkedin" /> LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/Ethan-maaz">
                <img className="social2" src={Github} alt="github" /> Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
