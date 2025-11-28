import { Container, Row, Col, Carousel } from "react-bootstrap";
import projImg1 from "../assets/img/DataForcasting.png";
import projImg2 from "../assets/img/SnakeGame.png";
import projImg3 from "../assets/img/PersonalPortfolio.png";
import arrowLeft from "../assets/img/arrow1.svg";
import arrowRight from "../assets/img/arrow2.svg";
import sunnyMist from "../assets/img/sunnyMist.png";

const ProjectCard = ({ description, imgUrl, gitHubUrl }) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} alt="Project" />
      <div className="proj-txtx">
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
          {/* Only display the description in the hover overlay */}
          <span>{description}</span>
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Data Forecasting",
      description:
        "A ML-integrated Data Forecasting and Analysis tool to forcast Stock and Crypto Currency prices.",
      imgUrl: projImg1,
      gitHubUrl: "https://github.com/Avishek-Dangol/DataForecasting",
    },
    {
      title: "Java Snake Game",
      description: "A classic Snake Game implemented using Java.",
      imgUrl: projImg2,
      gitHubUrl: "https://github.com/Avishek-Dangol/snake-game-java",
    },
    {
      title: "Personal Portfolio Website",
      description: "Design & Development of this personal portfolio.",
      imgUrl: projImg3,
      gitHubUrl: "https://github.com/Avishek-Dangol/Personal-Portfolio",
    },
  ];

  return (
    <section className="project" id="projects">
      <img src={sunnyMist} alt="morning mist" className="project-mist" />
      <Container>
        <Row>
          <Col size={12}>
            <div className="project-content-wrapper">
              <h2>My Projects</h2>
              <p>
                Here are some of the projects I've worked on. Hover over the
                image to see the description and click to view the GitHub
                repository.
              </p>
              <Carousel
                indicators={true}
                interval={null}
                controls={true}
                prevIcon={
                  <img
                    src={arrowLeft}
                    alt="Previous"
                    className="carousel-arrow"
                  />
                }
                nextIcon={
                  <img src={arrowRight} alt="Next" className="carousel-arrow" />
                }
              >
                {projects.map((project, index) => (
                  <Carousel.Item key={index}>
                    {/* Display the project title centered above the image */}
                    <div className="project-title-display">
                      <h3>{project.title}</h3>
                    </div>

                    <Row className="justify-content-center">
                      <Col xs={12} md={8} lg={6}>
                        {/* Pass remaining props to ProjectCard */}
                        <ProjectCard
                          description={project.description}
                          imgUrl={project.imgUrl}
                          gitHubUrl={project.gitHubUrl}
                        />
                      </Col>
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
