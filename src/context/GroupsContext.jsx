import { createContext, useState } from 'react';
export const GroupsContext = createContext();

const GroupsContextProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  return (
    <GroupsContext.Provider
      value={{
        groups,
        setGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsContextProvider;
