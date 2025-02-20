// src/App.jsx

import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from './components/AddBook';

import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
