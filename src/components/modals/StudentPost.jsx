import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/Context";
// import { StudentsContext } from "../../context/StudentsContext";
import { api } from "../../utils/api";
import { GroupsContext } from "../../context/GroupsContext";
import { AddIcon } from "../SvgComponent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function StudentPost({ setModal, modal, setStudents }) {
  const { mode, language, LANG } = useContext(Context);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [phone_number, setPhone_Number] = useState();
  const [image_student, setImage_Student] = useState("");
  const [group_input, setGroup_Input] = useState("");

  const [student_username, setStudent_Username] = useState("");
  const { groups, setGroups } = useContext(GroupsContext);
  const lang = LANG[language];
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, surname, age);
    api()
      .post(`/students`, {
        ism: name,
        familya: surname,
        yosh: age,
        jinsi: gender,
        tel_raqam: phone_number,
        guruh: group_input,
        t_username: student_username,
        rasm: image_student,
      })
      .then((res) => {
        setStudents(res.data);
        setModal(false);
        toast.success("Student added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    setName("");
    setSurname("");
    setAge("");
  };

  // useEffect(() => {
  //   api()
  //     .get(`/course`)
  //     .then((res) => {
  //       setGroups(res.data);
  //     });
  // }, []);

  function handleInputChange(event) {
    setImage_Student(event.target.value);
  }
  return (
    <>
      <ToastContainer autoClose={5000} />
      <div
        id="updateProductModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${modal ? "flex" : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div
            className={`relative p-4 rounded-lg shadow ${mode ? "bg-white" : "linear-bg__dark-sidebar sm:p-5"
              }`}
          >
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3
                className={`text-lg font-semibold ${mode ? "text-gray-900" : "dark:text-white"
                  }`}
              >
                Create User
              </h3>
              <button
                type="button"
                className={`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 ${mode ? "" : "hover:text-white"
                  }`}
                data-modal-toggle="updateProductModal"
                onClick={() => setModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${mode
                        ? ""
                        : "!bg-[#19376D] caret-white border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                      }`}
                    placeholder="name..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="surname"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                      }`}
                    placeholder="surname..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    id="age"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      }`}
                    placeholder="age..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    Choose Students Gender
                  </label>
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    required
                    className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" hidden>
                      choose gender...
                    </option>
                    <option value="male">Male 👨</option>
                    <option value="female">Female 👧</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="phone_number"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={phone_number}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      }`}
                    onChange={(e) => setPhone_Number(e.target.value)}
                    placeholder="+998 99 888 77 66"
                  />
                </div>
                <div>
                  <label
                    htmlFor="student_username"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    {lang.studentsPage2["student_tusername"]}
                  </label>
                  <input
                    type="text"
                    value={student_username}
                    name="student_username"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-100 p-2.5 ${mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      }`}
                    placeholder="@exmaple123"
                    onChange={(e) => setStudent_Username(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="group"
                    className={`block mb-2 text-sm font-medium ${mode ? "text-gray-900" : "dark:text-white"
                      }`}
                  >
                    {lang.studentsPage2["guruh_kiritish"]}
                  </label>
                  <input
                    type="text"
                    value={group_input}
                    name="group_input"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-100 p-2.5 ${mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      }`}
                    onChange={(e) => setGroup_Input(e.target.value)}
                    placeholder="N-107"
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="course"
                    className={`block mb-2 text-sm font-medium ${
                      mode ? "text-gray-900" : "dark:text-white"
                    }`}
                  >
                    Course
                  </label> */}
                {/* <select
                    id="course"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ${
                      mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    }`}
                  >
                    {groups.map((group, i) => (
                      <option key={i} value={group.id}>
                        {group.direction}
                      </option>
                    ))}
                  </select> */}
                {/* </div> */}

                <div
                  className="flex items-center justify-center w-full ">
                  {/* style={{
                    marginLeft: "150px",
                  }} */}
                  <label
                    htmlFor="dropzone-file"
                    style={{
                      width: "100%",
                      height: "100px",
                    }}
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      value={image_student}
                      name="image_student"
                      onChange={(e) => setImage_Student(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div
                className="flex items-center space-x-4 "
                style={{
                  marginLeft: "180px",
                }}
              >
                <button
                  type="submit"
                  className=" text-white inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {<AddIcon mode={mode} />}
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
