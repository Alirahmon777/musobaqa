import { createContext, useState } from "react";
export const GroupsContext = createContext();

const GroupsContextProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [direction, setDirection] = useState("");
  const [group_name, setGroup_Name] = useState("");
  const [teacher_name , setTeacher_Name]=useState("");
  const [assistant_teacher_name ,setAssistant_Teacher_Name]= useState("")
  const [start_lesson_date , setStart_Lesson_Date] =useState("");
  const[start_lesson_time ,setStart_Lesson_Time] = useState("");
  const[created_date ,setCeated_Date] = useState("");
  return (
    <GroupsContext.Provider
      value={{
        groups,
        setGroups,
        direction,
        setDirection,
        group_name,
        setGroup_Name,
        teacher_name,
        setTeacher_Name,
        assistant_teacher_name,
        setAssistant_Teacher_Name,
        start_lesson_date,
        setStart_Lesson_Date,
        start_lesson_time,
        setStart_Lesson_Time,
        created_date,
        setCeated_Date
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsContextProvider;
