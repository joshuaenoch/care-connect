import React from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css"; // Import your CSS file

export default function GamePage() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="title" style={{margin:"30px 0px 30px 0px"}}>Select activity</div>
      <ul className="game-list">
        <li className="game-item" onClick={() => handleClick("/crossword")}>
          <img src="../public/images/crossword.png" alt="Crossword img" />
          Crossword
        </li>
        <li className="game-item" onClick={() => handleClick("/sudoku")}>
          <img src="../public/images/sudoku.jpg" alt="Sudoku img" />
          Sudoku
        </li>
        <li className="game-item" onClick={() => handleClick("/wordsearch")}>
          <img src="../public/images/wordsearch.png" alt="Word Search img"/>
          Word Search
        </li>
      </ul>
    </div>
  );
}
