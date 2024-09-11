import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ComicPage from "./pages/comicPage/ComicPage";
import RandomComicPage from "./pages/randomComicPage/RandomComicPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#056e83",
    },
    secondary: {
      main: "#0ea4c6",
    },
  },
});

function App() {
  return (
    <MainContainer className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/random" element={<RandomComicPage />} />
            <Route path="/:comicNumber" element={<ComicPage />} />
            <Route path="/" element={<ComicPage />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: linear-gradient(36deg, rgba(215,215,215,1) 0%, rgba(244,244,244,1) 47%, rgba(96,132,140,1) 100%);
  min-height: 100vh;
`;

export default App;
