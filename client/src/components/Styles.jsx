import styled from 'styled-components';

const Styles = styled.div`

.boardSpace {
  display: table-cell;
  outline: 3px solid black;
  width: 164px;
  height: 164px;
  text-align: center;
  font-size: 100px;
}

.boardRow {
  display: table-row;
}

.board {
  display: table;
  height: 500px;
  width: 500px;
}

`;

export default Styles;
