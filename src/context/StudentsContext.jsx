import { createContext, useState } from "react";
export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [group_input, setGroup_Input] = useState("");
  const [image_student, setImage_Student] = useState("");

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
        group_input,
        setGroup_Input,
        image_student,
        setImage_Student,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
