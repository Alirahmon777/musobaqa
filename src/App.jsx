<<<<<<< HEAD
import React, { useState } from 'react';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import LANG from './components/language/language';
import {Home} from "../src/pages/Home/Home";
import Payment from './pages/Payment/Payment';
export default function App() {


  return(
       <context.Provider value={{ language, mode, LANG }}>
         <div className="wrapper">
           <Aside />
           <main className="main">
             <Header setLanguage={setLanguage} setMode={setMode} />
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/students" element={<Students />} />
               <Route path="/payment" element={<Payment />} />
               <Route path="*" element={<Error />} />
             </Routes>
           </main>
         </div>
       </context.Provider>
  
  )
 
=======
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Payment from './pages/Payment/Payment';
import Error from './pages/Error/Error';
import Aside from './components/Sidebar';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login/Login';

export default function App() {
  const { mode } = useContext(Context);
  const { isLogin } = useContext(AuthContext);

  return (
    <div className='wrapper'>
      <div className='flex'>
        <Aside />
        <main
          className={'main w-full ' + (mode ? 'bg-white' : 'linear-bg__dark')}
        >
          <Header />
          <Routes>
            {isLogin ? (
              <>
                <Route path='/' element={<Home />} />
                {/* <Route path='/students' element={<Students />} /> */}
                <Route path='/payment' element={<Payment />} />
                <Route path='*' element={<Error />} />
              </>
            ) : (
              <>
                <Route path='*' element={<Login />} />
                <Route path='/login' element={<Login />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
>>>>>>> bd7325671b9da46a6b3cf287a8721e2d6830d00c
}

