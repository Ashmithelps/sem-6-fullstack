import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box textAlign="center" py={12}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(90deg,#4f46e5,#22c55e)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Build Faster
      </Typography>

      <Typography color="gray" mt={2}>
        Modern solutions for modern startups
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 4,
          background: "linear-gradient(90deg,#4f46e5,#22c55e)",
        }}
      >
        Get Started
      </Button>
    </Box>
  );
}