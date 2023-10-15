import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { app } from "../firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import HomePage from "../pages/HomePage.jsx";
import GamePage from "../pages/GamePage.jsx";
import CaregiverPage from "../pages/CaregiverPage";
import JournalPage from "../pages/JournalPage";
import Crossword from "../pages/Games/Crossword.jsx";
import Sudoku from "../pages/Games/Sudoku.jsx";
import WordSearch from "../pages/Games/WordSearch.jsx";
import CaregiverMoreDetails from "../pages/CaregiverMoreDetailsPage";

function App() {
  return (
    <div>
      <Router>
          <header>
            <NavBar />
          </header>
        </Router>
      <main>
        <Router>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/GamePage" element={<GamePage />} />
            <Route path="/CaregiverPage" element={<CaregiverPage />} />
            <Route path="/CaregiverMoreDetails" element={<CaregiverMoreDetails />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/JournalPage" element={<JournalPage />}/>
            <Route path="/Caregiver" element={<CaregiverPage />}/>
            <Route path="/crossword" element={<Crossword />} />
            <Route path="/sudoku" element={<Sudoku />} />
            <Route path="/wordsearch" element={<WordSearch />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
