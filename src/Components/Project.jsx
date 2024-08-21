import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project-img4.jpeg";
import projImg2 from "../assets/img/Project-img6.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio",
      description: "A personal portfolio using HTML,CSS,JavaScript and React.",
      imgUrl: projImg1,
    },
    {
      title: "DishDash",
      description: "A receipe app using React and a public receipe API.",
      imgUrl: projImg2,
    },
  
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility> */}
              {/* {({ isVisible }) => */}
              <div >
                <h2>Projects</h2>
                <p>Welcome to my Projects section, where innovation meets execution. Here, you’ll find a curated selection of my most significant work, showcasing my ability to bring ideas to life through thoughtful design, meticulous development, and strategic problem-solving.</p>

<p>Each project is a testament to my expertise in [Web Development, React Development], reflecting my commitment to delivering high-quality solutions tailored to meet specific needs. From concept to completion, these projects highlight my journey through challenges, creativity, and technical mastery.

Explore these case studies to see how I’ve applied my skills in real-world scenarios, pushing the boundaries of what’s possible and driving impactful results.</p>
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
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}

















