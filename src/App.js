import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Components/Pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' Component={About}/>
      </Routes>
    </Router>
  );
}

export default App;
