import { Container, Row, Col, Card, Badge, ProgressBar, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useContext, useState } from "react";
import { clearFavorites } from "../redux/slices/appSlice";
import { AppContext } from "../context/AppContext";

const ALL_PROJECTS = [
  { title: "AI Health Predictor", category: "AI/ML", status: "Completed" },
  { title: "Virtual Herbal Garden", category: "Full Stack", status: "Completed" },
  { title: "Student Management System", category: "Database", status: "In Progress" },
];

function Reports() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const { user } = useContext(AppContext);
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const reportSummary = useMemo(() => {
    const favorited = ALL_PROJECTS.filter((p) => favorites.includes(p.title));
    const completed = ALL_PROJECTS.filter((p) => p.status === "Completed").length;
    const inProgress = ALL_PROJECTS.filter((p) => p.status === "In Progress").length;
    const completionPct = Math.round((completed / ALL_PROJECTS.length) * 100);
    return { favorited, completed, inProgress, completionPct };
  }, [favorites]);

  const categories = ["All", "AI/ML", "Full Stack", "Database"];

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-2">Project Reports</h2>
      <p className="text-center text-muted mb-4">
        Portfolio overview for <strong>{user.name}</strong> · {user.role}
      </p>

      <Row className="mb-4 g-3">
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm h-100">
            <h3 style={{ color: "#5f6ad4" }}>{ALL_PROJECTS.length}</h3>
            <p className="mb-0 text-muted">Total Projects</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm h-100">
            <h3 style={{ color: "#28a745" }}>{reportSummary.completed}</h3>
            <p className="mb-0 text-muted">Completed</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm h-100">
            <h3 style={{ color: "#fd7e14" }}>{reportSummary.inProgress}</h3>
            <p className="mb-0 text-muted">In Progress</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm h-100">
            <h3 style={{ color: "#7a4eb5" }}>{favorites.length}</h3>
            <p className="mb-0 text-muted">Favorited</p>
          </Card>
        </Col>
      </Row>

      <Card className="p-4 shadow mb-4">
        <h5 className="mb-3">Overall Completion</h5>
        <ProgressBar
          now={reportSummary.completionPct}
          label={`${reportSummary.completionPct}%`}
          style={{ height: "22px", borderRadius: "10px" }}
          variant="success"
        />
      </Card>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={filter === cat ? "dark" : "outline-secondary"}
            onClick={() => setFilter(cat)}
            style={{ borderRadius: "20px" }}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Card className="p-4 shadow mb-4">
        <h5 className="mb-3">Project Breakdown</h5>
        {filteredProjects.map((project, idx) => {
          const isFav = favorites.includes(project.title);
          return (
            <div
              key={idx}
              className="d-flex justify-content-between align-items-center mb-3 p-3"
              style={{ background: "#f8f9fa", borderRadius: "12px" }}
            >
              <div>
                <strong>{project.title}</strong>
                {isFav && (
                  <Badge bg="warning" text="dark" className="ms-2" style={{ fontSize: "0.7rem" }}>
                    ★ Favorited
                  </Badge>
                )}
                <div>
                  <small className="text-muted">{project.category}</small>
                </div>
              </div>
              <Badge
                bg={project.status === "Completed" ? "success" : "warning"}
                text={project.status === "Completed" ? "white" : "dark"}
                style={{ padding: "8px 12px", borderRadius: "20px" }}
              >
                {project.status}
              </Badge>
            </div>
          );
        })}
      </Card>

      <Card className="p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Favorited Projects</h5>
          {favorites.length > 0 && (
            <Button size="sm" variant="outline-danger" onClick={() => dispatch(clearFavorites())}>
              Clear All
            </Button>
          )}
        </div>
        {reportSummary.favorited.length === 0 ? (
          <p className="text-muted mb-0">No projects favorited yet. Visit Projects page to add some!</p>
        ) : (
          reportSummary.favorited.map((p, i) => (
            <div
              key={i}
              className="mb-2 p-2"
              style={{ background: "#fff9e6", borderRadius: "8px", border: "1px solid #ffe082" }}
            >
              <strong>{p.title}</strong>
              <span className="ms-2 text-muted" style={{ fontSize: "0.85rem" }}>({p.category})</span>
            </div>
          ))
        )}
      </Card>
    </Container>
  );
}

export default Reports;