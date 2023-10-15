import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function GamePage() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div>
        Select activity
      </div>
      <nav>
          <ul>
            <li onClick={() => handleClick("/crossword")}>
              <img src="" alt="image should've been here" />
              Crossword
            </li>
            <li onClick={() => handleClick("/sudoku")}>
              <img src="" alt="image should've been here" />
              Sudoku
            </li>
            <li onClick={() => handleClick("/trivia")}>
              <img src="" alt="image should've been here" />
              Trivia
            </li>
          </ul>
      </nav>
    </div>
  );
}
