import React, { useContext, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { StudentsContext } from '../../context/StudentsContext';
import { Context } from '../../context/Context';
import { darkClass, darkClassHead } from '../../utils/darkClasses';
import editIcon from '../../assets/img/edit-icon.svg';
import deleteIcon from '../../assets/img/delete-icon.svg';
import icon from '../../assets/img/sort-icon.svg';
import { deleteHandler } from '../../utils/helpers';
import StudentEdit from '../../components/modals/StudentEdit';

export default function Students() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const { students, setStudents } = useContext(StudentsContext);
  const { mode, language, LANG } = useContext(Context);
  const lang = LANG[language];
  const handleOpen = (id) => (setOpen(true), setId(id));
  const handleClose = () => setOpen(false);

  useEffect(() => {
    api()
      .get(`students`)
      .then((res) => {
        setStudents(res.data);
        console.log(students);
      });
  }, []);
  return (
    <>
      <StudentEdit
        open={open}
        handleClose={handleClose}
        id={id}
        setOpen={setOpen}
      />
      <div className={`students`}>
        <div className="container">
          <div className="students-info flex justify-content-between pb-4 items-center border-b border-b-gray-400">
            <h2
              className={"students-info__title " + (mode ? "" : "text-white")}
            >
              {lang.studentsPage["title"]}
            </h2>
            <div className="students-extra flex gap-[30px]">
              <img src={icon} alt="image" />
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="text-white text-sm font-medium bg-[#FEAF00] rounded py-[13px] px-[26px]"
              >
                {lang.studentsPage["button"]}
              </button>
            </div>
          </div>
          <table className="table table-hover border-separate border-spacing-x-0 border-spacing-y-3">
            <thead className="border-none">
              <tr className={`${darkClassHead(mode, "transparent")}`}>
                <th
                  className={`whitespace-nowrap py-3 bg-transparent !text-inherit border-none`}
                ></th>

                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  {lang.studentsPage["ism"]}
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  {lang.studentsPage["familya"]}
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  {lang.studentsPage["yosh"]}
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  {lang.studentsPage["tel_raqam"]}
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  {lang.studentsPage['t_username']}
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  {lang.studentsPage['guruh']}
                </th>
                <th
                  className={`whitespace-nowrap py-3 bg-transparent !text-inherit border-none`}
                ></th>
                <th
                  className={`whitespace-nowrap py-3 bg-transparent !text-inherit border-none`}
                ></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr
                  key={i}
                  scope="row"
                  className={`rounded-lg !mt-5 ${darkClass(mode, i)}`}
                >
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit rounded-l-lg`}
                  >
                    <img
                      src={student.rasm}
                      alt=""
                      className="rounded-lg w-[64px] h-[54px] align-middle object-bottom object-cover"
                    />
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {student.ism}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {student.familya}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {student.yosh}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {student.tel_raqam}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {student.t_username}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {student.guruh}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    <button
                      title="edit"
                      className="align-middle"
                      onClick={() => handleOpen(student.id)}
                    >
                      <img src={editIcon} alt="edit icon" />
                    </button>
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent text-inherit rounded-r-lg`}
                  >
                    <button
                      title="delete"
                      className="align-middle"
                      onClick={() => deleteHandler(student.id, setStudents)}
                    >
                      <img src={deleteIcon} alt="delete icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
