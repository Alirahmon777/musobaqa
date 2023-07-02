import React, { createContext, useState } from 'react';
import { getLocalStorage } from '../lib/LocalStorage';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    getLocalStorage('token') ? true : false
  );
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState({ userName: '', phoneNumber: '' });
  return (
    <AuthContext.Provider
      value={{
        showOTP,
        setShowOTP,
        user,
        setUser,
        loading,
        setLoading,
        otp,
        setOtp,
        ph,
        setPh,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
