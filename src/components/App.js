import React from "react";
import axios from "axios";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";
import Popup from "./Popup";
class App extends React.Component {
  state = { resultData: [], currentSelected: [], query: "" };

  changeHandler = (e) => {
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  };

  onEnterPress = async (e) => {
    if (e.key === "Enter") {
      const response = await axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=85888d813e23d816e386a1d58a0238c5&language=en-US&query=${this.state.query}&page=1&include_adult=false`);
      this.setState({ resultData: response.data.results });
    }
  };
  openPopup = async (movieID) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=85888d813e23d816e386a1d58a0238c5&language=en-US`
    );
    this.setState({ currentSelected: response.data });

    console.log(this.state.currentSelected);
    console.log(this.state.currentSelected.id, "id");
  };

  closePopup = () => {
    this.setState({ currentSelected: [] });
  };
  render() {
    return (
      <div>
        <header>
          <h1>Movies Database</h1>
        </header>

        <section className="container">
          <SearchBar
            value={this.state.query}
            changeHandler={this.changeHandler}
            onEnterPress={this.onEnterPress}
          />
        </section>
        <MoviesList
          moviesList={this.state.resultData}
          openPopup={this.openPopup}
        />
        {typeof this.state.currentSelected.original_title !== "undefined" ? (
          <Popup
            selectedMovie={this.state.currentSelected}
            closePopup={this.closePopup}
          />
        ) : (
          false
        )}
      </div>
    );
  }
}

export default App;
