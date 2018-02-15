import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {
  render() {
    return (
    <div className="search">
      	<input type="text" />
      	<button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
    </div>
    );
  }
}

export default SearchBar;