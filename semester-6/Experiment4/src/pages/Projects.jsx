import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../component/ProjectCard";

function Projects() {
  return (
    <div className="projects-section">
      <Container>
        <h2>My Projects</h2>
        <Row>
          <Col md={4}>
            <ProjectCard
              title="AI Health Predictor"
              description="ML model predicting heart disease using classification."
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              title="Virtual Herbal Garden"
              description="Chatbot + plant database system."
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              title="Student Management System"
              description="SQL based database project."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
