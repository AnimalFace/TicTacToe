import React from 'react';
import { ajax } from 'jquery';
import Styles from './Styles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'x',
      board: [[null, null, null],[null, null, null],[null, null, null]],
      winner: null
    };
    this.renderSpot = this.renderSpot.bind(this);
  }

  componentDidMount() {

  }

  renderSpot(coordinate, board, turn) {
    let newBoard = JSON.parse(JSON.stringify(board));
    if (board[coordinate[0]][coordinate[1]] === null) {
      newBoard[coordinate[0]][coordinate[1]] = turn;
      this.setState({
        board: newBoard
      })
      if (turn === 'x') {
        this.setState({turn: 'o'})
      }
      if (turn === 'o') {
        this.setState({turn: 'x'})
      }
    }
  }

  render() {
    const { turn, board, winner } = this.state;

    return (
      <Styles>
        Tic Tac Toe
      </Styles>
    );
  }
}

export default App;
