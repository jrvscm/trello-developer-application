import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCardForm, updateCurrentClicked } from '../actions';
import Card from './Card';
import NewCard from './NewCard';
import './Board.css';

class Board extends Component {

  showForm(e) {
    const array = this.props.lists;
    let newArray = JSON.parse(JSON.stringify(array));
      newArray[this.props.i].showCardForm = true;
      this.props.dispatch(showCardForm(newArray))
      this.props.dispatch(updateCurrentClicked(this.props.i))
  }


  render() {
  const cards = this.props.cards.map((card, i) =>
  	<li key={i} i={i} className="card-li">
  	   <Card text={card.text} />
  	</li>
  ) 

    if(this.props.list.showCardForm === false) {
    return(
      <div>
        <h2 className="card-title">{this.props.title}</h2>
          <ul className="cards">
            {cards}
          </ul>
          <button id={this.props.i} className={"add-card-btn"} onClick={(e) => this.showForm(e)}>Add a card...</button>
      </div>
      )
    } 
    else {
    return(
      <div>
        <h2 className="card-title">{this.props.title}</h2>
          <ul className="cards">
            {cards}
          </ul>
          <NewCard 
            cardindex={`card ${this.props.i}`}
            list={this.props.list} 
            lists={this.props.lists} 
            currentboard={this.props.currentboard} 
          />
      </div>
        )
      }
    }
  }
const mapStateToProps = (state) => ({
  currentboard: state.Reducer.currAddCardClickedBtn
})

export default connect(mapStateToProps) (Board)
