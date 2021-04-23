import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-wrap">
        <input
          className="search-box"
          type="text"
          value={this.props.value}
          onChange={this.props.changeHandler}
          onKeyPress={this.props.onEnterPress}
          placeholder="Seach for movie ..."
        />
      </div>
    );
  }
}

export default SearchBar;
