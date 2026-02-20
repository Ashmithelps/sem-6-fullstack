import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeToggle() {
  const { dispatch } = useContext(AppContext);

  return (
    <Button
      size="sm"
      className="ms-3"
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
    >
      Toggle Theme
    </Button>
  );
}

export default ThemeToggle;
