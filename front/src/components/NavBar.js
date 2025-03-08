import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";
import erdemPDF from '../assets/resume/erdemozkan.pdf';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = erdemPDF;
    link.download = "erdemozkan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Router>
      <Navbar expand="md" className={scroll ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink('contact')}>Get In Touch</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/erdem-%C3%B6zkan-585094232/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="icon1"></img></a>
                <a href="https://www.instagram.com/erdem_zkan/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="icon3"></img></a>
              </div>
              <button className="vvd" onClick={onButtonClick}><span>Download Resume</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </Router>
  );
}