import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { app } from "../firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
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
        </Router>
      </main>
      <footer className = "">
        <Router>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/GamePage" element={<GamePage />} />
            <Route path="/CaregiverPage" element={<CaregiverPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/crossword" element={<Crossword />} />
            <Route path="/sudoku" element={<Sudoku />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
          <Footer />
        </Router>
      </footer>
    </div>
  );
}

export default App;
