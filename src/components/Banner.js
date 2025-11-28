import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import { useInView } from "react-intersection-observer";
import cloud from "../assets/clouds/cloud.png";
import cloud1 from "../assets/clouds/cloud1.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(120); // 100 WPM = ~120ms per character
  const toRotate = [
    "Aspiring Data Analyst",
    "ML-Driven Analyst",
    "C++ Developer",
  ];
  const typingSpeed = 120; // ~100 WPM
  const deletingSpeed = 40; // Fast, smooth backspace
  const pauseAfterComplete = 1500; // Pause when word is fully typed

  // Intersection Observer for fade-in effect
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Smooth, consistent backspacing
    if (isDeleting) {
      setDelta(deletingSpeed);
    } else {
      setDelta(typingSpeed);
    }

    // When fully typed, pause then start deleting
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseAfterComplete);
    }
    // When fully deleted, move to next word
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    }
  };

  return (
    <section className="banner" id="home">
      <img src={cloud} className="cloud-higher" alt="cloud" />
      <img src={cloud1} className="cloud-lower" alt="cloud" />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div
              ref={textRef}
              className={textInView ? "animate__animated animate__fadeIn" : ""}
            >
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Avishek Dangol, a`}
                <br />{" "}
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I am currently pursuing a degree in Computer Engineering and
                possess a strong passion for leveraging data analytics, machine
                learning, and efficient C++ systems to develop impactful and
                intelligent solutions. My interests lie in transforming raw data
                into actionable insights, designing robust forecasting models,
                and creating scalable tools that address real-world challenges
                effectively.
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div
              ref={imgRef}
              className={imgInView ? "animate__animated animate__fadeIn" : ""}
            >
              <img src={headerImg} className="header" alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
