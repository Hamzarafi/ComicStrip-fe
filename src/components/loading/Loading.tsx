import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <CircularProgress size={60} thickness={4} />
      <Box mt={2}>
        <Typography variant="h6" color="textSecondary">
          Loading...
        </Typography>
      </Box>
    </Container>
  );
};

export default Loading;
