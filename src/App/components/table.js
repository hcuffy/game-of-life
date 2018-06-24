import React from 'react';
import '../style.css';
import Cell from './cell';

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

export default Table;
