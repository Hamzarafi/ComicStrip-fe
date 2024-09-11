import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type propTypes = {
  pageNumber: number;
  latest: boolean;
};

const Pagination = ({ pageNumber, latest }: propTypes) => {
  const navigate = useNavigate();

  return (
    <StyledBox mt={3}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4} textAlign="center">
          <StyledButton
            variant="contained"
            color="primary"
            disabled={pageNumber <= 1}
            onClick={() => navigate(`/${pageNumber - 1}`)}
          >
            Previous
          </StyledButton>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="body1">
            Current page: {pageNumber}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
          <StyledButton
            variant="contained"
            color="primary"
            disabled={latest}
            onClick={() => navigate(`/${pageNumber + 1}`)}
          >
            Next
          </StyledButton>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={() => navigate("/random")}
            sx={{ marginTop: "10px", width: "100%", maxWidth: "300px" }}
          >
            Take me to a Random Comic!
          </StyledButton>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  text-align: center;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  min-width: 150px;
  margin: 10px 0;
  transition: background-color 0.5s ease;
`;

export default Pagination;
