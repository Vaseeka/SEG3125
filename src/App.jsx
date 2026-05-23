import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';

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
    </Routes>
  );
}

export default App;