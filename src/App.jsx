import React from 'react';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import LANG from './components/language/language';
import {Home} from "../src/pages/Home/Home";
import Payment from './pages/Payment/Payment';
export default function App() {
  return (
    <context.Provider value={{ language, mode, LANG }}>
      <div className='wrapper'>
        <Aside />
        <main className='main'>
          <Header setLanguage={setLanguage} setMode={setMode} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/students' element={<Students />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
      </div>
    </context.Provider>
  );
}
