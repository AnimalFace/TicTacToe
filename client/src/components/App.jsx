import React from 'react';
import { ajax } from 'jquery';
import Styles from './Styles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: playerOne,


    };

  }

  componentDidMount() {

  }

  render() {

    return (
      <Styles>
        Tic Tac Toe
      </Styles>
    );
  }
}

export default App;
