import React from 'react';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div className='wrapper'>
      {/* <Aside /> */}
      <main className='main'>
        <Header setLanguage={setLanguage} setMode={setMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}
