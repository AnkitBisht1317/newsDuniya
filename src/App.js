// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Newsapp from './Components/Newsapp'; 
import Dashboard from './Components/Dashboard'; 
import SignIn from './Components/Signin'; // Import SignIn component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newsapp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} /> {/* Add route for SignIn */}
      </Routes>
    </Router>
  );
};

export default App;
