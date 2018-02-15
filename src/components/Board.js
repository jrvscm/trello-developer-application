import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

class Board extends Component {

	onClick(e) {
	
	}

  	render() {
  		let cards = this.props.cards.map((card, i) =>
  		<li key={i} i={i} className="card-li">
  			<Card text={card.text} />
  		</li>
  	)

    return (
      <div className="card-container">
      	<h2 className="card-title">{this.props.title}</h2>
      		<ul className="cards">
      			{cards}
            <li><button className="save-card-btn hidden" onClick={(e) => this.onSave(e)}>Save</button></li>
      		</ul>
      	<button className="add-card-btn"  onClick={(e) => this.onClick(e)}>Add a card...</button>
      </div>
    );
  }
}

export default Board;
