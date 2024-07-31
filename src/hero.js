import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Spline from "@splinetool/react-spline";
import "./styles.css";
import MeImage from "./me.png"; // Replace with your actual image file path
import Logo from "./images/my-logo.png";
import Linkedin from "./images/linkedin.svg";
import Instagram from "./images/instagram.svg";
import Github from "./images/github.svg";
import IconLaptop from "./images/icon-laptop.svg";
import IconYoutube from "./images/youtube.svg";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// Import your page components
import AboutMe from './about.js';
import Skills from './skills.js';
import MyWork from './work.js';
import ContactMe from './contact.js';

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

function Spline1() {
  return (
    <div className="App">
      <CollapsibleExample />
      <div className="Social">
        <div className="social-div"></div>
        <a href="https://www.youtube.com/@JettJinx404">
          <img className="social2" src={IconYoutube} alt="youtube" />
        </a>
        <a href="https://www.instagram.com/maaz_ajaz?igsh=YTZ6ODJzaWEzYnZv&utm_source=qr">
          <img className="social2" src={Instagram} alt="instagram" />
        </a>
      </div>
      <div className="spline1">
        <Spline scene="https://prod.spline.design/pEgQWndVUd4KIEsg/scene.splinecode" />
        <div className="content">
          <h1 className="hero-text">Welcome to My World</h1>
          <p className="hero-para">
            Step into the digital realm of Maaz Ajaz, a passionate BSc Computer Science student from Sharda University.
            Discover the innovative projects, extensive skills, and dedication that drives his journey in the tech world.
            Let's embark on an adventure through creativity & technology.
          </p>
          <a href="maaz_cv.pdf" download="maaz_cv.pdf">
            <button className="download-logo">
              <img src={IconLaptop} alt="download" /> Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Spline1 />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work/project1" element={<MyWork />} />
        <Route path="/work/project2" element={<MyWork />} />
        <Route path="/work/project3" element={<MyWork />} />
        <Route path="/work/internships" element={<MyWork />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}
