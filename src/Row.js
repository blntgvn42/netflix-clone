import React, {useEffect, useState} from 'react';

import axios from "./axios";

import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const BASE_URL = "https://image.tmdb.org/t/p/original";

const Row = ({title, fetchUrl, isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const videoOptions = {
    width: "100%",
    height: "400",
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log(trailerUrl)
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className={"row"}>
      <h2 className={"row__title"}>{title}</h2>
      <div className={"row__posters"}>
        {movies.map(movie => (
          <img
            alt={movie.title}
            key={movie.poster_path}
            onClick={() => handleClick(movie)}
            src={`${BASE_URL}/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            className={`row__poster${isLargeRow ? " row__poster-large" : ''}`}/>
        ))}
      </div>

      {trailerUrl && <div style={{color: 'white'}}>{trailerUrl !== "" ?
        <YouTube videoId={trailerUrl} opts={videoOptions}/> : 'No Trailer Found'}</div>}
    </div>
  );
}
export default Row;