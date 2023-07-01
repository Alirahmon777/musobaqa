<<<<<<< HEAD
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
=======
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";
import Error from "./pages/Error/Error";
import Aside from "./components/Sidebar";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
>>>>>>> b473a0e86862b44f1271affd3fec3ea8759cd624

export default function App() {
  const { mode } = useContext(Context);
  const { isLogin } = useContext(AuthContext);

  return (
<<<<<<< HEAD
    <div className='wrapper'>
      <div className='flex h-screen'>
        <Aside />
        <main
          className={
            'main w-full h-full ' + (mode ? 'bg-white' : 'linear-bg__dark')
          }
=======
    <div className="wrapper">
      <div className="flex">
        <Aside />
        <main
          className={"main w-full " + (mode ? "bg-white" : "linear-bg__dark")}
>>>>>>> b473a0e86862b44f1271affd3fec3ea8759cd624
        >
          <Header />
          <Routes>
            {isLogin ? (
              <>
<<<<<<< HEAD
                <Route path='/' element={<Home />} />
                {/* <Route path='/students' element={<Students />} /> */}
                <Route path='/payment' element={<Payment />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/course' element={<Groups />} />
                <Route path='*' element={<Error />} />
=======
                <Route path="/" element={<Home />} />
                {/* <Route path="/students" element={<Students />} /> */}
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<Error />} />
>>>>>>> b473a0e86862b44f1271affd3fec3ea8759cd624
              </>
            ) : (
              <>
                {/* <Route path='*' element={<Login />} / > */}
                <Route path="/login" element={<Login />} />
                </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
}
