import HeroSection from "../components/HeroSection";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <HeroSection />

      <Container className="mt-5">
        <h2 className="text-center mb-4">Skills</h2>

        <Row>
          <Col md={4}>
            <Card className="p-3 shadow">React JS</Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 shadow">Machine Learning</Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 shadow">Full Stack Development</Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
