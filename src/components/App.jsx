import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route} from 'react-router-dom';
import "./App.css";
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

function App() {

  return (
    <div>
      <header>
        <NavBar/>
      </header>

      <main>
        
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
