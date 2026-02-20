import { Container, Card, Button } from "react-bootstrap";
import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const { state, dispatch } = useContext(AppContext);

  const totalFavorites = useMemo(() => {
    return state.favorites.length;
  }, [state.favorites]);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Analytics Dashboard</h2>

      <Card className="p-4 shadow">
        <h4>Total Favorite Projects: {totalFavorites}</h4>

        <ul>
          {state.favorites.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Button
          variant="danger"
          onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}
        >
          Clear All
        </Button>
      </Card>
    </Container>
  );
}

export default Analytics;
