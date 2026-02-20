import { Card, Button } from "react-bootstrap";

function ProjectCard({ title, description }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
