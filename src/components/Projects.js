import { Container, Row, Col, Carousel } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const projects = [
    {
      title: "Project Alpha",
      description: "E-commerce Website Design",
      /*imgUrl: projImg3,*/
      githubUrl: "https://github.com/yourusername/project-alpha",
      // Custom content for a cleaner look
      customContent: "Project Alpha: E-commerce Website",
    },
    {
      title: "Project Beta",
      description: "Mobile App Development",
      /*imgUrl: projImg3,*/
      githubUrl: "https://github.com/yourusername/project-beta",
      customContent: "Project Beta: Mobile Application",
    },
    {
      title: "Project Gamma",
      description: "Data Visualization Tool",
      /*imgUrl: projImg3,*/
      githubUrl: "https://github.com/yourusername/project-gamma",
      customContent: "Project Gamma: Data Visualization",
    },
  ];

  // Inline styles for the carousel content to mimic the dark, centralized look
  const carouselContentStyle = {
    minHeight: "400px", // Set a minimum height for the carousel area
    display: "flex",
    alignItems: "center", // Vertically center the content
    justifyContent: "center", // Horizontally center the content
    backgroundColor: "#383838", // Dark gray background for the slide area
    color: "#CCCCCC", // Light gray text color
    padding: "50px 0",
  };

  return (
    // Applied a darker background to the whole section for the dark mode feel
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div ref={ref}>
              <div
                className={inView ? "animate__animated animate__fadeIn" : ""}
              >
                <h2 style={{ color: "#FFFFFF" }}>Projects</h2>
                <p style={{ color: "#AAAAAA" }}>
                  Click on any project slide to view the source code on GitHub.
                </p>

                {/* --- Carousel Implementation --- */}
                <Carousel
                  indicators={true}
                  controls={true}
                  id="projects-carousel"
                  className={
                    inView ? "animate__animated animate__slideInUp" : ""
                  }
                  interval={null}
                >
                  {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                      {/* The style is applied here to the content area */}
                      <div style={carouselContentStyle}>
                        <Row className="justify-content-center w-100">
                          <Col xs={12} className="text-center">
                            {/* Anchor tag wraps the custom ProjectCard display */}
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              // Style the link to remove text decoration and make it block-level
                              style={{
                                textDecoration: "none",
                                display: "block",
                                color: "inherit",
                              }}
                            >
                              {/* Option 1: Display simple centered text like your image (First slide) */}
                              <h3 style={{ fontSize: "3rem", fontWeight: 300 }}>
                                {project.customContent}
                              </h3>
                              <span
                                style={{
                                  display: "inline-block",
                                  backgroundColor: "black",
                                  color: "white",
                                  padding: "5px 10px",
                                  marginBottom: "20px",
                                }}
                              >
                                Placeholder
                              </span>
                            </a>
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design element"
      ></img>
    </section>
  );
};
