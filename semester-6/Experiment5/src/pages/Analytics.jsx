import { Container, Card, Button, Badge, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useContext } from "react";
import { clearFavorites, removeFavorite } from "../redux/slices/appSlice";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const { user } = useContext(AppContext);

  const stats = useMemo(() => {
    return {
      total: favorites.length,
      hasAI: favorites.filter((f) =>
        f.toLowerCase().includes("ai") || f.toLowerCase().includes("ml")
      ).length,
      others: favorites.filter((f) =>
        !f.toLowerCase().includes("ai") && !f.toLowerCase().includes("ml")
      ).length,
    };
  }, [favorites]);

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Analytics Dashboard</h2>
      <p className="text-center text-muted mb-4">
        Logged in as: <strong>{user.name}</strong> — {user.role}
      </p>

      <Row className="mb-4 g-3">
        <Col md={4}>
          <Card className="text-center p-3 shadow-sm">
            <h3 style={{ color: "#5f6ad4" }}>{stats.total}</h3>
            <p className="mb-0">Total Favorites</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center p-3 shadow-sm">
            <h3 style={{ color: "#7a4eb5" }}>{stats.hasAI}</h3>
            <p className="mb-0">AI / ML Projects</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center p-3 shadow-sm">
            <h3 style={{ color: "#4e9bb5" }}>{stats.others}</h3>
            <p className="mb-0">Other Projects</p>
          </Card>
        </Col>
      </Row>

      <Card className="p-4 shadow">
        <h5 className="mb-3">Saved Projects</h5>
        {favorites.length === 0 ? (
          <p className="text-muted">No favorites yet. Go to Projects and save some!</p>
        ) : (
          <ul className="list-unstyled">
            {favorites.map((item, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center mb-2 p-2"
                style={{ borderRadius: "8px", background: "#f1f3f5" }}
              >
                <span>
                  <Badge bg="secondary" className="me-2">{index + 1}</Badge>
                  {item}
                </span>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => dispatch(removeFavorite(item))}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
        {favorites.length > 0 && (
          <Button
            variant="danger"
            className="mt-2"
            onClick={() => dispatch(clearFavorites())}
          >
            Clear All Favorites
          </Button>
        )}
      </Card>
    </Container>
  );
}

export default Analytics;