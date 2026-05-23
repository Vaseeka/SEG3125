import { useState } from 'react'
//import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import MemoryGame from './pages/MemoryGame';
import Ecommerce from './pages/Ecommerce';
import Analytics from './pages/Analytics';

/*
import Service from './pages/Service';
import MemoryGame from './pages/MemoryGame';
import ECommerce from './pages/ECommerce';
import Analytics from './pages/Analytics';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/memory-game" element={<MemoryGame />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;