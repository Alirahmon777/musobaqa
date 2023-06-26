import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import AuthContextProvider from './context/AuthContext.jsx';
import ContextProvider from './context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
