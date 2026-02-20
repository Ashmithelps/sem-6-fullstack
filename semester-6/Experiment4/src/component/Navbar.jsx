import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar({ darkMode, setDarkMode }) {
  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Portfolio
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>

          <Button
            variant={darkMode ? "light" : "dark"}
            onClick={() => setDarkMode(!darkMode)}
            className="ms-3"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
