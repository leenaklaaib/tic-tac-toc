import React from 'react';
import { props } from '../../App';
import './sequerstyle.css'


const Square:React.FC<props>=({ value, onSquareClick })=> {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
export default Square;



