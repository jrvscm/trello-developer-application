import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
  render() {
    return (
      <div className="card-inner-container">
      	<p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
