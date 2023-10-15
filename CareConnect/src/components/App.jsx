import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { app } from "../firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSignUp from "../pages/SignInSignUp.jsx";
import GamePage from "../pages/GamePage.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home";
import Crossword from "../pages/Games/Crossword.jsx";
import Sudoku from "../pages/Games/Sudoku.jsx";
import Trivia from "../pages/Games/Trivia.jsx";
import CaregiverPage from "../pages/CaregiverPage";

function App() {

  return (
    <div>
      <main>
        <Router>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/SignInSignUp" element={<SignInSignUp />} />
            <Route path="/GamePage" element={<GamePage />} />
            <Route path="/CaregiverPage" element={<CaregiverPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/crossword" element={<Crossword />} />
            <Route path="/sudoku" element={<Sudoku />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
