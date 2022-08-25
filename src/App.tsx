import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landingscreen from './components/landingscreen';
import Login from './components/login';
import Excersices from './components/excersices';
import Facts from './components/facts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingscreen />}/>
        <Route path="/login" element={<Login />}/>
        {/* Root i inloggat läge */}
        <Route path="/authenticated" element={<Excersices/>}/>
        <Route path="/facts" element={<Facts/>}/>
      </Routes>
    </div>
  );
}

export default App;
