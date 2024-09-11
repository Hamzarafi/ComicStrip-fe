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
    <Container maxWidth="md" sx={{ padding: '20px' }}>
      <StyledTypography fontFamily={"fantasy"} color="#034b5c" variant="h3" sx={{ fontWeight: 600 }}>{comic.title}</StyledTypography>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={comic.img}
          alt={comic.alt}
          p={1}
          sx={{
            backgroundColor: '#FFF',
            width: { xs: '100%', md: 'auto' },
            maxWidth: '600px',
            height: 'auto',
            margin: '0 auto',
            borderRadius: '8px',
            boxShadow: '0px 15px 18px rgba(0, 0, 0, 0.3)'
          }}
        />
        <Typography variant="body1" sx={{ marginTop: '16px', color: '#555' }}>
          {comic.alt}
        </Typography>
      </Container>
      <Box display="flex" flexDirection={"column"} alignItems={"flex-end"}>
        <Typography variant="body2" gutterBottom>Views: {comic.views}</Typography>
        <Typography variant="caption" sx={{ color: '#888' }}>
          Published on {comic.day}/{comic.month}/{comic.year}
        </Typography>
      </Box>
    
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
