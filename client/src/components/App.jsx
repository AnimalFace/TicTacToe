import React from 'react';
import { ajax } from 'jquery';
import Styles from './Styles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      // board: [['X', 'X', 'X'], ['X', 'X', 'X'], ['X', 'X', 'X']],
      board: [[null, null, null], [null, null, null], [null, null, null]],
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
      if (turn === 'X') {
        this.setState({ turn: 'O' })
      }
      if (turn === 'O') {
        this.setState({ turn: 'X' })
      }
    }
  }

  render() {
    const { board, turn, winner } = this.state;

    return (
      <Styles>
        <h2>Tic Tac Toe</h2>
        <div>{`Player ${turn}'s turn`}</div>
        <div className="boardRow">
          <div className="boardSpace" onClick={() => (this.renderSpot([0, 0], board, turn))}>{board[0][0]}</div>
          <div className="boardSpace" onClick={() => (this.renderSpot([0, 1], board, turn))}>{board[0][1]}</div>
          <div className="boardSpace" onClick={() => (this.renderSpot([0, 2], board, turn))}>{board[0][2]}</div>
        </div>
        <div className="boardRow">
          <div className="boardSpace" onClick={() => (this.renderSpot([1, 0], board, turn))}>{board[1][0]}</div>
          <div className="boardSpace" onClick={() => (this.renderSpot([1, 1], board, turn))}>{board[1][1]}</div>
          <div className="boardSpace" onClick={() => (this.renderSpot([1, 2], board, turn))}>{board[1][2]}</div>
        </div>
        <div className="boardRow">
          <div className="boardSpace" onClick={() => (this.renderSpot([2, 0], board, turn))}>{board[2][0]}</div>
          <div className="boardSpace" onClick={() => (this.renderSpot([2, 1], board, turn))}>{board[2][1]}</div>
          <div className="boardSpace" onClick={() => (this.renderSpot([2, 2], board, turn))}>{board[2][2]}</div>
        </div>
      </Styles>
    );
  }
}

export default App;
