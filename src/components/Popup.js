import React from "react";

import "./Popup.css";

const Popup = ({ selectedMovie, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <a href={selectedMovie.homepage} target="blank">
          {selectedMovie.original_title}
          <span className="mx-3">{selectedMovie.release_date.slice(0, 4)}</span>
        </a>
        <p className="rating">Rating: {selectedMovie.vote_average}</p>
        <div className="plot">
          <img
            src={`https://image.tmdb.org/t/p/w200/${selectedMovie.poster_path}`}
            alt={selectedMovie.original_title}
          />
          <p>{selectedMovie.overview}</p>
        </div>
        <button className=" close" onClick={() => closePopup()}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
