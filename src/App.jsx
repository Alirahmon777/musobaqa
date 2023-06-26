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
import Profile from './pages/Profile/Profile';
import Groups from './pages/Groups/Groups';

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
                <Route path='/profile' element={<Profile />} />
                <Route path='/course' element={<Groups />} />
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
}
