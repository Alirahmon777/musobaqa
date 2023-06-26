import { createContext, useState } from 'react';
import LANG from '../components/language/language';
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || '2' || '3'
  );
  const [mode, setMode] = useState(localStorage.getItem('theme') || true);
  return (
    <Context.Provider
      value={{
        setLanguage,
        setMode,
        mode,
        LANG,
        language,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
