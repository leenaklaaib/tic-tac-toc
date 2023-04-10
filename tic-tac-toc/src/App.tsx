
import { useState } from 'react';
import Square from './components/sequer/sequer';

export interface props{
value:string;
onSquareClick:()=>void;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const[isInext,setisInext]=useState(false);

  /*const check = (squares: string[]) => {
    for (let i = 0; i < squares.length; i++) {
      if (i % 3 === 0) {
        if (squares[i] && squares[i] === squares[i + 1] && squares[i] === squares[i + 2]) {
          return [i, i + 1, i + 2];
        }
      } 
      if (i < 3) {
        if (squares[i] && squares[i] === squares[i + 3] && squares[i] === squares[i + 6]) {
          return [i, i + 3, i + 6];
        }
      } 
      if (i === 0) {
        if (squares[i] && squares[i] === squares[i + 4] && squares[i] === squares[i + 8]) {
          return [i, i + 4, i + 8];
        }
      }
      if (i === 2) {
        if (squares[i] && squares[i] === squares[i + 2] && squares[i] === squares[i + 4]) {
          return [i, i + 2, i + 4];
        }
      }
    }
    return null;
  };*/
  const check = (squares: string[]) => {
    for (let i = 0; i < squares.length; i++) {
      if (i % 3 === 0) {
        if (squares[i] && squares[i] === squares[i + 1] && squares[i] === squares[i + 2]) {
         return  squares[i];;
        }
      } 
      if (i < 3) {
        if (squares[i] && squares[i] === squares[i + 3] && squares[i] === squares[i + 6]) {
          return squares[i];
        }
      } 
       if (i === 0 || i === 2) {
        if (i === 0 && squares[i] && squares[i] === squares[i + 4] && squares[i] === squares[i + 8]) {
          return squares[i];
        }
        if (i === 2 && squares[i] && squares[i] === squares[i + 2] && squares[i] === squares[i + 4]) {
          return squares[i];
        }
      }
    }
    return null;
  };
  
  
  
  
  
  
  const handleClick = (i: number) => {
    if (squares[i] || check(squares[i])) {
      return;
    }
    const nextSquares = squares.slice();
    if (!isInext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setisInext(!isInext);
    const winner = check(nextSquares);
    if (winner) {
      console.log('Winner: ' + winner);
    } else {
      
      console.log('Next player: ' + (isInext ? 'X' : 'O'));
    }};
  
  
  
  
  
  return (
    
    
    <>
     
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
 
);
}

