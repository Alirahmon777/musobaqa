import React, { createContext, useState } from 'react';
import { getLocalStorage } from '../lib/LocalStorage';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLogin, setIsLogin] = useState(
    getLocalStorage('token') ? true : false
  );
  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        phoneNumber,
        setPhoneNumber,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
