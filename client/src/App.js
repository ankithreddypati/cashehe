import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginRegister from './components/LoginRegister';
import Navbar from './components/Navbar';


import './styles/main.scss'

const App = () => {
  return (
    <Router>
      <Navbar /> {Navbar}
      <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/loginandregister" element={<LoginRegister />} exact />

      </Routes>
    </Router>
  );
};

export default App;
