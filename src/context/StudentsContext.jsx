import { createContext, useState } from 'react';
export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  return (
    <StudentsContext.Provider
      value={{
        students,
        setStudents,
        name,
        setName,
        surname,
        setSurname,
        age,
        setAge,
        username,
        setUsername,
        phone,
        setPhone,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
