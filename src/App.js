import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preload";
import Particle from "./Components/Particle";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./Styles/About.css"
import "./Styles/App.css";
import "./Styles/Home.css";
import "./Styles/Navbar.css";
import "./Styles/Preload.css";
import "./Styles/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        <Navbar />
        <Home />
        <About />
        <Experience />

      </div>
    </Router>
  );
}

export default App;
