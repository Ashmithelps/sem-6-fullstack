import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <Container>
        <h1 className="display-3 fw-bold mb-3">
          Hi, I'm Ashmit 👋
        </h1>

        <p className="lead mb-4">
          AIML Engineer | Full Stack Developer | React Enthusiast <br />
          I design and build modern, scalable web applications.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button
            as={Link}
            to="/projects"
            variant="light"
            size="lg"
          >
            View Projects
          </Button>

          <Button
            href="mailto:yourmail@gmail.com"
            variant="outline-light"
            size="lg"
          >
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
