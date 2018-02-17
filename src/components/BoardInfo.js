import React, { Component } from 'react';
import './BoardInfo.css';
class BoardInfo extends Component {

  render() {
    return (
    <div>
      <ul className="board-info">
      	<li><h2 className="board-name">Hire Chris board</h2></li>
      	<li className="border-right border-left"><a href="http://www.chrisjarvisdev.com/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
      	<li><a href="https://github.com/jrvscm" target="_blank" rel="noopener noreferrer">Github</a></li>
      	<li className="border-left"><a href="https://github.com/jrvscm/trello-developer-application/blob/master/README.md" target="blank">Cover Letter</a></li>
        <li className="border-left"><a href="https://angel.co/christopher-michael-jarvis" target="_blank" rel="noopener noreferrer"><i className="fab fa-angellist"></i></a></li>
        <li className="border-left"><a href="https://www.linkedin.com/in/chris-jarvis-dev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
    );
  }
}

export default BoardInfo
