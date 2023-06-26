import React, { useContext } from 'react';
import Login from './pages/Login/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './context/Context';
import Header from './components/Header';
import Home from './pages/Home/Home';
// import Payment from './pages/Payment/Payment';
import Error from './pages/Error/Error';
import Aside from './components/Sidebar';
import { AuthContext } from './context/AuthContext';
import Layout from './Layout/Layout';
export default function App() {
  const { setLanguage, setMode } = useContext(Context);
  const { isLogin } = useContext(AuthContext);

  return (
    <div className='wrapper flex'>
      <Aside />
      <main className='main'>
        <Header setLanguage={setLanguage} setMode={setMode} />
        <Routes>
          {isLogin ? (
            <>
              <Route path='/' element={<Layout />}>
                <Route path='' element={<Home />} />
                {/* <Route path='/students' element={<Students />} /> */}
                {/* <Route path='/payment' element={<Payment />} /> */}
                <Route path='*' element={<Error />} />
              </Route>
            </>
          ) : (
            <>
              <Route path='*' element={<Navigate to={'/login'} replace />} />
              <Route path='/login' element={<Login />} />
            </>
          )}
        </Routes>
        <Routes></Routes>
      </main>
    </div>
  );
}

