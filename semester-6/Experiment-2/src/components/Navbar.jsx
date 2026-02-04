import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg,#4f46e5,#22c55e)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            TechNova
          </Typography>

          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}