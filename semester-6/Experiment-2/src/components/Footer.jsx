import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      textAlign="center"
      py={3}
      mt={10}
      sx={{ color: "gray", borderTop: "1px solid #333" }}
    >
      <Typography>© 2026 TechNova</Typography>
    </Box>
  );
}