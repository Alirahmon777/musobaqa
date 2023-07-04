import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/Context";
// import { StudentsContext } from "../../context/StudentsContext";
import { api } from "../../utils/api";
import { GroupsContext } from "../../context/GroupsContext";
import { UpdateIcon } from "../SvgComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";

export default function StudentPost({ setModal, modal, setStudents }) {
  const { mode, language, LANG } = useContext(Context);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [phone_number , setPhone_Number]=useState("");
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
        tel_raqam:phone_number,
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

  useEffect(() => {
    api()
      .get(`/course`)
      .then((res) => {
        setGroups(res.data);
      });
  }, []);
  return (
    <>
      <ToastContainer autoClose={5000} />
      <div
        id="updateProductModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          modal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div
            className={`relative p-4 rounded-lg shadow ${
              mode ? "bg-white" : "linear-bg__dark-sidebar sm:p-5"
            }`}
          >
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3
                className={`text-lg font-semibold ${
                  mode ? "text-gray-900" : "dark:text-white"
                }`}
              >
                Create User
              </h3>
              <button
                type="button"
                className={`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 ${
                  mode ? "" : "hover:text-white"
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
                    className={`block mb-2 text-sm font-medium ${
                      mode ? "text-gray-900" : "dark:text-white"
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
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      mode
                        ? ""
                        : "!bg-[#19376D] caret-white border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                    }`}
                    placeholder="name..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="surname"
                    className={`block mb-2 text-sm font-medium ${
                      mode ? "text-gray-900" : "dark:text-white"
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
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                    }`}
                    placeholder="surname..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className={`block mb-2 text-sm font-medium ${
                      mode ? "text-gray-900" : "dark:text-white"
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
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      mode
                        ? ""
                        : "!bg-[#19376D] caret-white placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    }`}
                    placeholder="age..."
                  />
                </div>
                <div>
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    required
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
                    className={`block mb-2 text-sm font-medium ${
                      mode ? "text-gray-900" : "dark:text-white"
                    }`}
                  >
                    <PhoneInput country={"uzb"} value={ph} onChange={setPh}  />
                   </label>
                </div>
                <div>
                  <label
                    htmlFor="course"
                    className={`block mb-2 text-sm font-medium ${
                      mode ? "text-gray-900" : "dark:text-white"
                    }`}
                  >
                    Course
                  </label>
                  <select
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
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {<UpdateIcon mode={mode} />}
                  Update
                </button>
                <button
                  type="button"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <svg
                    className="mr-1 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
