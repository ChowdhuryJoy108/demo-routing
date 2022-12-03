import React from 'react'
import Home from './components/Home'

import { 
  BrowserRouter as Router,
  Routes, 
  Route } from 'react-router-dom';

import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>        
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </Router>
  );
}

export default App;
