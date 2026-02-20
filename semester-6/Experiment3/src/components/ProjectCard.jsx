import { Card, Button } from "react-bootstrap";

function ProjectCard({ title, desc }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="dark">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
