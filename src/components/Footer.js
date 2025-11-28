import { Container, Row, Col } from "react-bootstrap";
import home from "../assets/img/homepageW.png";
import navIcon1 from "../assets/img/github.png";
import navIcon2 from "../assets/img/linkedin.png";
const scrollToId = (id) => {
  // If scrolling to the top, use window.scrollTo
  if (id === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Original logic for scrolling to an element
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#top");
              }}
            >
              <img
                src={home}
                alt="HomePage - Click to scroll to top"
                style={{
                  width: "50px",
                  height: "50px",
                  marginTop: "60px",
                  cursor: "pointer",
                }}
              />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Avishek-Dangol">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/avishek-dangol/">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
