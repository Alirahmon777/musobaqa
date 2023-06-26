import { createContext, useState } from 'react';
import LANG from '../components/language/language';
import { getLocalStorage } from '../lib/LocalStorage';
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    getLocalStorage('language') || '2' || '3'
  );
  const [mode, setMode] = useState(getLocalStorage('theme') ?? true);
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
