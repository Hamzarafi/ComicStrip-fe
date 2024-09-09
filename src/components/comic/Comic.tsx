import { Box, Container, Grid, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ComicData } from "../../types/types";
import axios from "axios";
import { backendURL } from "../../config";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import { formatTranscript } from "../../Utils/utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type propTypes = {
  comicNumber?: string;
};

const Comic = ({ comicNumber }: propTypes) => {
  const [comic, setComic] = useState<ComicData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchComic = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${backendURL}/api/comics/${comicNumber || ""}`
        );
        setComic(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comic:", error);
        navigate(`/error`);
      }
    };
    fetchComic();
  }, [comicNumber]);

  if (!comic || loading) return <Loading />;

  return (
    <Container>
      <StyledTypography variant="h3">{comic.title}</StyledTypography>
      <Grid item xs={12}>
        <Box
          component="img"
          src={comic.img}
          alt={comic.alt}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "80%", md: "70%" },
            height: "auto",
            margin: "0 auto",
            display: "block",
          }}
        />
      </Grid>
      <Box display="flex" flexDirection={"column"} alignItems={"flex-end"}>
        <Typography variant="body2">Views: {comic.views}</Typography>
        <Typography variant="caption">
          {comic.day}/{comic.month}/{comic.year}
        </Typography>
      </Box>
      <Typography variant="body2">Page: {comic.num}</Typography>

      {comic.transcript && (
        <Box mt={3}>
          <Typography variant="h5">Transcript:</Typography>
          <Box>{formatTranscript(comic.transcript)}</Box>
        </Box>
      )}

      <Pagination pageNumber={comic.num} latest={comic.latest} />
    </Container>
  );
};

const StyledTypography = styled(Typography)`
  text-align: center;
  margin: 10px 0px;
`;

export default Comic;
