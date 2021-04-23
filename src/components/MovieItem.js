import React from "react";
import "./MovieItem.css";
const MovieItem = ({
  movieTitle,
  movieDescription,
  posterPath,
  lang,
  releaseDate,
  voteCount,
  voteAvg,
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
        {/* <p className="card-text">{movieDescription}</p>
        <span className="vote-count">{voteCount}</span>
        <span className="vote-avg ml-3">{voteAvg}</span>
        <span className="relesase-date ml-3">{releaseDate}</span> 
        <button className="btn card-title my-0"></button>*/}
      </div>
    </div>
  );
};

export default MovieItem;
