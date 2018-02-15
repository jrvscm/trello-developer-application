import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/Board';
import BoardInfo from './components/BoardInfo';
import './reset.css';
import './App.css';

class App extends Component {

	render() {

  	const boardLists = this.props.lists.map((list, i) =>
  		<Board
  			className="board" 
  			cards={list.cards}
  			title={list.title} 
  		/>
    );

    return (
      <div className="App">
      	<BoardInfo />
      	<div className="inner-board-container">
      		{boardLists}
      	</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	lists: state.Reducer.lists
})

export default connect(mapStateToProps)(App);
