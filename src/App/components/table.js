import React from 'react';
import '../style.css';
import Cell from './cell';

<<<<<<< HEAD
const Table = ({ board }) => {
	const rows = [];
	const height = board.length;
	const width = board.length;

	for (let i = 0; i < height; i++) {
		let row = [];
		for (let j = 0; j < width; j++) {
			row.push(<Cell check={board[i][j]} key={'cell' + i + j} />);
		}
		rows.push(<tr key={'row' + i}>{row}</tr>);
	}

	return (
		<table className="theBoard">
			<tbody>{rows}</tbody>
		</table>
	);
};
=======
const Table = ({board, size}) => {

  const rows = [];
  const height = size;
  const width = size;

  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(<Cell check = {
        board[i][j]
      }
      key = {
        'cell' + i + j
      } />)
    }
    rows.push(
      <tr key={'row' + i}>{row}</tr>
    )
  }

  return (
    <table className="theBoard">
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
>>>>>>> 61fc038f792e9721b6f31fb48606d0054e6bca9b

export default Table;
