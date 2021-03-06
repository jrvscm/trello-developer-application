import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './Nav.css';
class Navbar extends Component {
  render() {
    return (
      <nav className="nav-container">
      	<button className="boards-btn"><i className="fas fa-columns"></i> Boards</button>
      	<SearchBar />
      	<div className="user-circle">CJ</div>
      </nav>
    );
  }
}

export default Navbar;
