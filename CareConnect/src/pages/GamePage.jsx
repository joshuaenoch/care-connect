import React from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";

export default function GamePage() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div
        className="title"
        style={{ margin: "40px 0px 40px 0px", fontSize: "30px" }}
      >
        Select Activity
      </div>
      <ul className="game-list">
        <li className="game-item" onClick={() => handleClick("/crossword")}>
          <img src="https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/crossword.png?alt=media&token=589c8d9b-1d1d-469d-a359-5450391b41bc" alt="Crossword img" />
          Crossword
        </li>
        <li className="game-item" onClick={() => handleClick("/sudoku")}>
          <img src="https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/sudoku.jpg?alt=media&token=c732c919-48c6-4318-8411-2e37f99896f4" alt="Sudoku img" />
          Sudoku
        </li>
        <li className="game-item" onClick={() => handleClick("/wordsearch")}>
          <img src="https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/wordsearch.png?alt=media&token=eccdc9c8-8e46-45a0-8947-f5ab8ff77bfd" alt="Word Search img" />
          Word Search
        </li>
      </ul>
    </div>
  );
}
