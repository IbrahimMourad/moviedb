// eslint-disable-next-line
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ moviesList, openPopup }) => {
  const movies = moviesList.map((movie) => {
    return (
      <div className="col-md-4 list-wrap" key={movie.id}>
        <MovieItem
          movieTitle={movie.title}
          movieDescription={movie.overview}
          posterPath={movie.poster_path}
          lang={movie.original_language}
          releaseDate={movie.release_date}
          voteCount={movie.vote_count}
          voteAvg={movie.vote_average}
          openPopup={openPopup}
          movieID={movie.id}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{movies}</div>
    </div>
  );
  //   return null;
};

export default MovieList;
