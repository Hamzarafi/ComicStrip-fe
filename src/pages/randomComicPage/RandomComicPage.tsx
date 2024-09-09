import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { backendURL } from "../../config";

const RandomComicPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomComic = async () => {
      try {
        const { data } = await axios.get(`${backendURL}/api/comics/random`);
        navigate(`/${data.num}`);
      } catch (error) {
        console.error("Error fetching random comic:", error);
        navigate(`/error`);
      }
    };
    fetchRandomComic();
  }, []);

  return <Loading />;
};

export default RandomComicPage;
