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
      <div className="title">Select activity</div>
      <ul className="game-list">
        <li className="game-item" onClick={() => handleClick("/crossword")}>
          <img src="../public/images/crossword.png" alt="testing" />
          Crossword
        </li>
        <li className="game-item" onClick={() => handleClick("/sudoku")}>
          <img src="../public/images/sudoku.jpg" alt="test" />
          Sudoku
        </li>
        <li className="game-item" onClick={() => handleClick("/trivia")}>
          <img src="../public/images/trivia.jpg" alt="Trivia" style={{ width: "200px", height: "200px" }}/>
          Trivia
        </li>
      </ul>
    </div>
  );
}
