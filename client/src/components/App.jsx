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
      winner: null,
      Xmoves: [],
      Omoves: [],
    };
    this.renderSpot = this.renderSpot.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
  }

  componentDidMount() {

  }

  resetGame() {
    this.setState({
      turn: 'X',
      board: [[null, null, null], [null, null, null], [null, null, null]],
      winner: null,
      Xmoves: [],
      Omoves: [],
    })
  }


  checkForWinner(Xmoves, Omoves, winner) {

    const allWinningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    const check = (arr1, arr2) => {
      for (let i = 0; i < arr2.length; i++) {
        let current = arr2[i];
        if (arr1.indexOf(current) === -1) {
          return false;
        }
      }
      return true;
    }
    for (let i = 0; i < allWinningCombos.length; i++) {
      let currentCombo = allWinningCombos[i];
      if (check(Xmoves, currentCombo)) {

        // this.setState({ winner: 'X' });
        return 'Player X Wins!';
      }
      if (check(Omoves, currentCombo)) {
        // this.setState({ winner: 'O' });
        return 'Player O Wins!';
      }


    }
    if (winner === null) {
      return 'Tic Tac Toe';
    }

  }

  renderSpot(coordinate, board, turn, Xmoves, Omoves, winner) {
    if (winner === null) {
      let newBoard = JSON.parse(JSON.stringify(board));
      let numberBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      if (board[coordinate[0]][coordinate[1]] === null) {
        newBoard[coordinate[0]][coordinate[1]] = turn;
        this.setState({
          board: newBoard
        })
        if (turn === 'X') {
          let newXmoves = [...Xmoves];
          newXmoves.push(numberBoard[coordinate[0]][coordinate[1]]);
          this.setState({ turn: 'O', Xmoves: newXmoves });
        }
        if (turn === 'O') {
          let newOmoves = [...Omoves];
          newOmoves.push(numberBoard[coordinate[0]][coordinate[1]]);
          this.setState({ turn: 'X', Omoves: newOmoves });
        }
      }
    }
  }

  render() {
    const { board, turn, winner, Xmoves, Omoves } = this.state;

    return (
      <Styles>
        <h2>{this.checkForWinner(Xmoves, Omoves, winner)}</h2>
        <div>{`Player ${turn}'s turn`}</div>
        <table className="board">
          <tbody>
            <tr className="boardRow">
              <td className="boardSpace" onClick={() => (this.renderSpot([0, 0], board, turn, Xmoves, Omoves, winner))}>{board[0][0]}</td>
              <td className="boardSpace" onClick={() => (this.renderSpot([0, 1], board, turn, Xmoves, Omoves, winner))}>{board[0][1]}</td>
              <td className="boardSpace" onClick={() => (this.renderSpot([0, 2], board, turn, Xmoves, Omoves, winner))}>{board[0][2]}</td>
            </tr>
            <tr className="boardRow">
              <td className="boardSpace" onClick={() => (this.renderSpot([1, 0], board, turn, Xmoves, Omoves, winner))}>{board[1][0]}</td>
              <td className="boardSpace" onClick={() => (this.renderSpot([1, 1], board, turn, Xmoves, Omoves, winner))}>{board[1][1]}</td>
              <td className="boardSpace" onClick={() => (this.renderSpot([1, 2], board, turn, Xmoves, Omoves, winner))}>{board[1][2]}</td>
            </tr>
            <tr className="boardRow">
              <td className="boardSpace" onClick={() => (this.renderSpot([2, 0], board, turn, Xmoves, Omoves, winner))}>{board[2][0]}</td>
              <td className="boardSpace" onClick={() => (this.renderSpot([2, 1], board, turn, Xmoves, Omoves, winner))}>{board[2][1]}</td>
              <td className="boardSpace" onClick={() => (this.renderSpot([2, 2], board, turn, Xmoves, Omoves, winner))}>{board[2][2]}</td>
            </tr>
          </tbody>
        </table>
        <div className="buttonDiv">
        <button type="button" onClick={()=>(this.resetGame())}>New Game</button>
        </div>
      </Styles>
    );
  }
}

// {for (let i = 0; while i < 3; i ++) {
//   return (
//     <tr className="boardRow">
//       {for (let j = 0; j < 3; j++) {
//         return (
//           <td className="boardSpace" onClick={() => (this.renderSpot([${i}, ${j}], board, turn, Xmoves, Omoves, winner))}>{board[${i}][${j}]}</td>
//         )
//       }}
//     </tr>
//   )
// }}

export default App;
