<<<<<<< HEAD
import React from 'react';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

=======
import React from "react";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import LANG from "./components/language/language";
>>>>>>> 843562fc82b72f45575a68a6294ff1930cc1eb2d
export default function App() {
  return (
<<<<<<< HEAD
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
=======
    <context.Provider value={{ language, mode, LANG }}>
      <div className="wrapper">
        <Aside />
        <main className="main">
          <Header setLanguage={setLanguage} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={Login} />
            <Route path="/students" element={<Students />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </context.Provider>
>>>>>>> 843562fc82b72f45575a68a6294ff1930cc1eb2d
  );
}
