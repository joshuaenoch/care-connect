import React from "react";
import { useNavigate } from "react-router-dom";

export default function GamePage() {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <nav>
            <div>
                <ul>
                  <li onClick={() => handleClick("/Crossword")}>
                    Crossword Puzzles
                    Insert image
                  </li>
                  <li onClick={() => handleClick("/Sudoku")}>
                    Sudokus
                    Insert image
                  </li>
                  <li onClick={() => handleClick("/Some other game")}>
                    Some other game
                    Insert image
                  </li>
                </ul>
            </div>
        </nav>
    );
}