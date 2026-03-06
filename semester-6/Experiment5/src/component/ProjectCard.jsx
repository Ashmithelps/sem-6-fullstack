import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/appSlice";

function ProjectCard({ title, description }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorited = favorites.includes(title);

  const handleToggle = () => {
    if (isFavorited) {
      dispatch(removeFavorite(title));
    } else {
      dispatch(addFavorite(title));
    }
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          {title}
          {isFavorited && (
            <Badge bg="warning" text="dark" style={{ fontSize: "0.7rem" }}>
              ★ Saved
            </Badge>
          )}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex gap-2">
          <Button variant="dark">View Details</Button>
          <Button
            variant={isFavorited ? "outline-danger" : "outline-secondary"}
            onClick={handleToggle}
          >
            {isFavorited ? "Remove" : "★ Favorite"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;