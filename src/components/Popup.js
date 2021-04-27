import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Popup.css";

const Popup = ({ selectedMovie, closePopup }) => {
  return (
    <section className="popup">
      <Container className="content">
        <a href={selectedMovie.homepage} target="blank">
          {selectedMovie.original_title}
          <span className="mx-3">{selectedMovie.release_date.slice(0, 4)}</span>
        </a>
        <p className="rating">Rating: {selectedMovie.vote_average}</p>
        <div className="plot">
          <Row>
            <Col md="4">
              <img
                src={`https://image.tmdb.org/t/p/w200/${selectedMovie.poster_path}`}
                alt={selectedMovie.original_title}
              />
            </Col>
            <Col md="8">
              <p>{selectedMovie.overview}</p>
            </Col>
          </Row>
          <div className="text-right">
            <Button variant="danger" onClick={() => closePopup()}>
              Close
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Popup;
