import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/image.png";


export default function Banner(){
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "MERN Developer", "Software developer" ];
  const period = 1200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="wow fadeIn" datawowduration="1.5s">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Vikash, `} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "MERN Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
<p> A recent BCA graduate with a passion for technology and innovation. My academic journey has equipped me with a diverse skill set in programming and development, including Java, C++, React, Node.js, SQL, and MongoDB. Though I'm new to the professional world, I bring a strong foundation and a keen enthusiasm for coding and problem-solving.</p>
<p> Explore my portfolio to see some of the exciting projects I've worked on and get a glimpse into my technical capabilities. I'm eager to contribute my skills to dynamic and challenging opportunities, and I'm looking forward to connecting with professionals who share my passion for technology.</p>
              <button className="vvd" onClick={()=>console.log("lets connect")}><span style={{color:"black"}}>Let's connect <i class="bi bi-arrow-right-circle-fill"></i></span></button>

          </Col>
          <Col xs={12} md={6} xl={5} className="wow zoomIn" datawowduration="1.5s">
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}