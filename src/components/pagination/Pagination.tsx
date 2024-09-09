import { Box, Button, Grid } from "@mui/material";
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
    <StyledBox
      mt={3}
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <StyledButton
        variant="contained"
        disabled={pageNumber <= 1}
        onClick={() => navigate(`/${pageNumber - 1}`)}
      >
        Previous
      </StyledButton>
      <StyledButton
        variant="contained"
        disabled={latest}
        onClick={() => navigate(`/${pageNumber + 1}`)}
      >
        Next
      </StyledButton>
      <StyledButton variant="contained" onClick={() => navigate("/random")}>
        Take me to a Random Comic!
      </StyledButton>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin: 5px;
`;

export default Pagination;
