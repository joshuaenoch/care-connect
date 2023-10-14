import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { app } from "../firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSignUp from "../pages/SignIn_SignUp.jsx";
import GamePage from "../pages/GamePage.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home";
import CaregiverPage from "../pages/CaregiverPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main>
        <Router>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/SignIn_SignUp" element={<SignInSignUp />} />
            <Route path="/GamePage" element={<GamePage />} />
            <Route path="/CaregiverPage" element={<CaregiverPage />} />
            <Route path="/" element={<Home />} />
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
