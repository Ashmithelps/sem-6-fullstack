import { Card, CardContent, Typography, Grid } from "@mui/material";

const data = [
  { title: "Fast", desc: "Lightning fast performance" },
  { title: "Secure", desc: "Enterprise level security" },
  { title: "Scalable", desc: "Grow without limits" },
];

export default function CardComponent() {
  return (
    <Grid container spacing={4} justifyContent="center">
      {data.map((item, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card
            sx={{
              height: "100%",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 0 20px #4f46e5",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography color="gray">{item.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}