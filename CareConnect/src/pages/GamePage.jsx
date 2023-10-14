import React from "react";
import { useNavigate } from "react-router-dom";
import Crossword from "./Games/Crossword.jsx";
import Sudoku from "./Games/Sudoku.jsx";
import Trivia from "./Games/Trivia.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function GamePage() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Router>
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
      <Routes>
        <Route path="/crossword" element={<Crossword />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/trivia" element={<Trivia />} />
      </Routes>
    </Router>
  );
}
