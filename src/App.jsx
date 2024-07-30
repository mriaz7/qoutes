import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
