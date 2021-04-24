import React from "react";
import "./MovieItem.css";
const MovieItem = ({
  movieTitle,
  posterPath,

  openPopup,
  movieID,
}) => {
  return (
    <div className="movie-box">
      <img
        src={`https://image.tmdb.org/t/p/w400/${posterPath}`}
        onClick={() => openPopup(movieID)}
        className=""
        alt={movieTitle}
      />
      <div className="movie-title">
        <p>{movieTitle}</p>
      </div>
    </div>
  );
};

export default MovieItem;
