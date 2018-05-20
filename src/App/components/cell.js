import React from 'react';
import '../style.css';

const Cell = ({check}) => {

  return (
      <td className={check}></td>
  )
}

export default Cell;
