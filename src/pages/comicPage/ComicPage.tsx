import React from "react";
import { useParams } from "react-router-dom";
import Comic from "../../components/comic/Comic";

const ComicPage = () => {
  const { comicNumber } = useParams<{ comicNumber: string }>();

  return <Comic comicNumber={comicNumber} />;
};

export default ComicPage;
