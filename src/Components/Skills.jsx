import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
export default function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx" style={{margin:"10px"}}>
                        <h2>
                            Skills
                        </h2>
                        <p>As a recent BCA graduate, I’ve developed a strong foundation in various programming technologies through rigorous coursework and self-initiated projects. Although I’m new to the professional industry, my hands-on experience with personal projects has allowed me to explore and apply a diverse set of skills, from front-end development to back-end programming.</p>

<p>This section highlights the core technologies I’ve worked with, showcasing my ability to create functional and innovative solutions. Each skill has been honed through practical application, demonstrating my readiness to take on new challenges and contribute effectively to future opportunities.</p>
                    </div>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                        <div className="item">
                            <img src={meter3} alt="item"/>
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="item"/>
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="item"/>
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="item"/>
                            <h5>C++</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="item"/>
                            <h5>Nodejs</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="item"/>
                            <h5>SQL</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="item"/>
                            <h5>MongoDB</h5>
                        </div>
                    </Carousel>

                    </Col>
                </Row>
            </Container>
        </section>
      )

}