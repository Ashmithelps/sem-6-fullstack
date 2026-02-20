import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Projects</h2>

      <Row className="g-4">
        <Col md={4}>
          <ProjectCard
            title="AI Health Predictor"
            desc="ML model predicting heart disease using classification."
          />
        </Col>

        <Col md={4}>
          <ProjectCard
            title="Virtual Herbal Garden"
            desc="Chatbot + plant database system."
          />
        </Col>

        <Col md={4}>
          <ProjectCard
            title="Student Management System"
            desc="SQL based database project."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
