import { Container, Row, Col } from "react-bootstrap";
import home from "../assets/img/homepage.png";
import navIcon1 from "../assets/img/github.png";
import navIcon2 from "../assets/img/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={home} alt="HomePage" />
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
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
