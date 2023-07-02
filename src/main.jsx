import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import AuthContextProvider from './context/AuthContext.jsx';
import ContextProvider from './context/Context.jsx';
import StudentsContextProvider from './context/StudentsContext.jsx';
import GroupsContextProvider from './context/GroupsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ContextProvider>
        <StudentsContextProvider>
          <GroupsContextProvider>
            <App />
          </GroupsContextProvider>
        </StudentsContextProvider>
      </ContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
