import React, { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(resetBoard());
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLines] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]);

  useEffect(() => {
    if (winner) alert("and the winnner is..... " + winner);
    setBoard(resetBoard());
  }, [winner]);

  function resetBoard() {
    return Array(9).fill(null);
  }

  function checkWinner(arr) {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
        console.log(arr[a] + " won");
        return arr[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    const arr = [...board];
    let initialValue = "x";

    if (arr[index]) return;

    if (!xIsNext) {
      initialValue = "y";
    }

    arr[index] = initialValue;
    setXIsNext(!xIsNext);
    setBoard(arr);

    const result = checkWinner(arr);
    if (result) setWinner(result);

    console.log("calculating result");

    return null;
  }

  function renderSquare(index, item) {
    return (
      <Square
        key={index}
        onClick={() => handleClick(index)}
        className={`block`}
      >
        {board && board[index]}
      </Square>
    );
  }

  return (
    <Board className="grid-container">
      {board.map((item, index) => {
        return renderSquare(index);
      })}
    </Board>
  );
}

export default App;
