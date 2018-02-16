import React, { Component } from 'react';
import Card from './Card';
import NewCard from './NewCard';
import './Board.css';

class Board extends Component {
  render() {
  const cards = this.props.cards.map((card, i) =>
  	<li key={i} i={i} className="card-li">
  	   <Card text={card.text} />
  	</li>
  ) 
    return(
      <div>
        <h2 className="card-title">{this.props.title}</h2>
          <ul className="cards">
            {cards}
          </ul>
          <NewCard list={this.props.list} lists={this.props.lists} />
      </div>
      )
    }
  }

export default Board
