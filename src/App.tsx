import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import ComicPage from "./pages/comicPage/ComicPage";
import RandomComicPage from "./pages/randomComicPage/RandomComicPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/random" element={<RandomComicPage />} />
          <Route path="/:comicNumber" element={<ComicPage />} />
          <Route path="/" element={<ComicPage />} />

          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
