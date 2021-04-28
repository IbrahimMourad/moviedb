import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddMovie.css";
class AddMovie extends Component {
  state = {
    movieName: "",
    title: "",
    posterURL: "",
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={(e) => e.preventDefault()} className="mt-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie Name"
              name="movieName"
              value={this.state.movieName}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Movie Title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Poster URL"
              name="posterURL"
              value={this.state.posterURL}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={this.renderAddedMovie}
          >
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddMovie;
