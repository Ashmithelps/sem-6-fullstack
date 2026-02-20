import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero">
      <h1>Hi, I'm Ashmit 👋</h1>
      <p>
        AIML Engineer | Full Stack Developer | React Enthusiast <br />
        I design and build modern, scalable web applications.
      </p>

      <div className="hero-buttons">
        <Button as={Link} to="/projects" variant="light">
          View Projects
        </Button>
        <Button variant="outline-light">
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
