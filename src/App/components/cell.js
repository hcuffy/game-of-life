import React from 'react';
import '../style.css';

const Cell = ({ check }) => {
	let cellState = check ? 'live-cell' : 'dead-cell';
	return <td className={cellState} />;
};

export default Cell;
