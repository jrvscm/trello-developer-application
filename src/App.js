import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/Board';
import BoardInfo from './components/BoardInfo';
import Navbar from './components/Nav';
import ListForm from './components/ListForm';
import { showListForm, showCardForm } from './actions';
import './reset.css';
import './App.css';

class App extends Component {
	onClick(e) {
		this.props.dispatch(showListForm())
	}

  showForm(e) {
    e.target.className = 'hidden';
    const array = this.props.lists;
    let newArray = JSON.parse(JSON.stringify(array));
    newArray[e.target.id].showCardForm = true;
    this.props.dispatch(showCardForm(newArray))
  }

	render() {
  	const boardLists = this.props.lists.map((list, i) =>
     <div key={i} className="card-container">
  		<Board index={i}
        lists={this.props.lists}
        list={list}
  			className="board" 
  			cards={list.cards}
  			title={list.title} 
  		/>
      <button id={i} className={"add-card-btn"} onClick={(e) => this.showForm(e)}>Add a card...</button>
    </div>
    );

    if(this.props.showListForm === true) {
    return (
      <div className="App">
        <Navbar />
      	<BoardInfo />
      	<div className="inner-board-container">
      		{boardLists}

            <div className="new-list-container">
              <ListForm />
            </div>

      	</div>
      </div>
    );
  } else {
    return(
      <div className="App">
        <Navbar />
        <BoardInfo />
        <div className="inner-board-container">
          {boardLists}
        <button className="add-list" onClick={(e) => this.onClick(e)}>Add a list...</button>
        </div>
      </div>
    );
  }
  }
}

const mapStateToProps = (state) => ({
	lists: state.Reducer.lists,
  showListForm: state.Reducer.showListForm
})

export default connect(mapStateToProps)(App);
