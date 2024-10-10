import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shipvitas",
      description: "Helped Shipvitas users to make progress lanes and improved UI access for the shipping productivity tool by adding new features.",
      imgUrl: projImg1,
    },
    {
      title: "Lane Exchange",
      description: "Worked on FullStack development at Y Combinator, contributing to Shiptivity.",
      imgUrl: projImg2,
    },
    {
      title: "Full Stack Web Development",
      description: "Collaborated on various projects and gained experience in FullStack development with DevTown.",
      imgUrl: projImg3,
    },
    {
      title: "Frontend Development",
      description: "Developed and maintained websites and created web applications at CODSOFT.",
      imgUrl: projImg4,
    },
    {
      title: "RangVikas",
      description: "Won 1st prize for a full-stack website at Rang Utasu 24, with a cash prize of ₹2000.",
      imgUrl: projImg5,
    },
    {
      title: "Pixel Perfect",
      description: "Won 1st prize for replicating a website at Anna University Coimbatore, earning a cash prize of ₹1000.",
      imgUrl: projImg6,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on, showcasing my experience in Full Stack and Frontend development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                               
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Stay tuned for updates on new projects!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
