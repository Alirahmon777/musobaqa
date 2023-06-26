import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';
import { getLocalStorage } from '../lib/LocalStorage';

const Layout = ({ redirectPath = '/login' }) => {
  if (!getLocalStorage('token')) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <>
      <Header />
      <main className='bg-[#141414] pb-10'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
