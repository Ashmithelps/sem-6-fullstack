import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../component/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />

      <div className="skills-section">
        <Container>
          <h2>Skills</h2>
          <Row>
            <Col md={4}>
              <div className="skill-box">React JS</div>
            </Col>
            <Col md={4}>
              <div className="skill-box">Machine Learning</div>
            </Col>
            <Col md={4}>
              <div className="skill-box">Full Stack Development</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
