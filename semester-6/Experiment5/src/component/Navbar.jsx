import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function NavigationBar({ darkMode, setDarkMode }) {
  const { user } = useContext(AppContext);

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          {user.name}'s Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
            <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={() => setDarkMode(!darkMode)}
              className="ms-3"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;