import React from 'react';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
}
