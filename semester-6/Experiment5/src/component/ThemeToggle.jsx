import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button size="sm" className="ms-3" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
}

export default ThemeToggle;