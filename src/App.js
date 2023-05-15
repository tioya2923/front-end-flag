import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Subscribe from "./Components/Pages/Subscribe";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/blog' Component={Blog}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact} />
        <Route path='/subscribe' Component={Subscribe} />
      </Routes>
    </Router>
  );
}

export default App;
