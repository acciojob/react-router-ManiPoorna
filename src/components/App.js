
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
