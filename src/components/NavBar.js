import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import home from "../assets/img/homepage.png";
import navIcon1 from "../assets/img/github.png";
import navIcon2 from "../assets/img/linkedin.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Smooth scroll helper
const scrollToId = (id) => {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
const useIntersectionObserver = (selector) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector(selector);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the target enters or leaves the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // trigger when 10% of the footer is visible
      }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [selector]);

  return isVisible;
};
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const footerVisible = useIntersectionObserver(".footer");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    scrollToId(`#${value}`); // smooth scroll
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={`${scrolled ? "scrolled" : ""} ${
          footerVisible ? "hidden-by-footer" : ""
        }`}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={home}
              alt="HomePage"
              style={{ width: "50px", height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as="button"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                as="button"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Avishek-Dangol">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/avishek-dangol/">
                  <img src={navIcon2} alt="" />
                </a>
              </div>

              <button className="vvd" onClick={() => scrollToId("#connect")}>
                <span>Let’s Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
