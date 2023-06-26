import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getLocalStorage } from '../lib/LocalStorage';

const Layout = ({ redirectPath = '/login' }) => {
  if (!getLocalStorage('token')) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default Layout;
