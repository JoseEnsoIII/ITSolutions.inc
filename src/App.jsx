import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Section from './components/Section'

import Home from './pages/Home';
import Company from './pages/OurCompany';
import School_Management from './pages/School_Management';
import Hotel_Management from './pages/Hotel_Management';
import Sales_Inventory from './pages/Sales_Inventory';
import Contact from './pages/Contact';

import './App.css';
import './assets/css/vendor.min.css';
import './assets/css/plugins.min.css';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurCompany" element={<Company />} />
        <Route path="/School_Management" element={<School_Management />} />
        <Route path="/Hotel_Management" element={<Hotel_Management/>} />
        <Route path="/Sales_Inventory" element={<Sales_Inventory />} />
        <Route path="/Contact" element={<Contact />} />


      </Routes>
      <Section />
    </Router>
  );
}

export default App;
