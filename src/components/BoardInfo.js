import React, { Component } from 'react';
import './BoardInfo.css';
class BoardInfo extends Component {
  render() {
    return (
      <ul className="board-info">
      	<li><h2 className="board-name">Hire Chris board</h2></li>
      	<li className="border-right border-left">Portfolio</li>
      	<li>Github</li>
      	<li className="border-left">Cover Letter</li>
      </ul>
    );
  }
}

export default BoardInfo;
