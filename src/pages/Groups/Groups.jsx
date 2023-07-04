// import * as React from "react";
// import { useEffect } from "react";
// // import PropTypes from "prop-types";
// // import Tabs from "@mui/material/Tabs";
// // import Tab from "@mui/material/Tab";
// // import Typography from "@mui/material/Typography";
// // import Box from "@mui/material/Box";
// import editIcon from "../../assets/img/edit-icon.svg";
// import deleteIcon from "../../assets/img/delete-icon.svg";
// import icon from "../../assets/img/sort-icon.svg";
// import { deleteHandler } from "../../utils/helpers";
// import { Context } from "../../context/Context";
// import { api } from "../../utils/api";

// // function CustomTabPanel(props) {
// //   const { children, value, index, ...other } = props;

// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`simple-tabpanel-${index}`}
// //       aria-labelledby={`simple-tab-${index}`}
// //       {...other}
// //     >
// //       {value === index && (
// //         <Box sx={{ p: 3 }}>
// //           <Typography>{children}</Typography>
// //         </Box>
// //       )}
// //     </div>
// //   );
// // }

// // CustomTabPanel.propTypes = {
// //   children: PropTypes.node,
// //   index: PropTypes.number.isRequired,
// //   value: PropTypes.number.isRequired,
// // };

// // function a11yProps(index) {
// //   return {
// //     id: `simple-tab-${index}`,
// //     "aria-controls": `simple-tabpanel-${index}`,
// //   };
// // }

// export default function Groups() {
//   const { mode, LANG, language } = React.useContext(Context);
//   const [groups, setGroups] = React.useState([]);

//   const lang = LANG[language];
//   // const [value, setValue] = React.useState(0);

//   // const handleChange = (event, newValue) => {
//   //   setValue(newValue);
//   // };

//   useEffect(() => {
//     api()
//       .get(`groups`)
//       .then((res) => {
//         setGroups(res.data);
//         console.log(groups);
//       });
//   }, []);
//   return (
//     <>
//       {/* <div className='text-center'>
//         <Box sx={{ width: '100%' }}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               aria-label='basic tabs example'
//             >
//               <Tab
//                 label={lang.courses.webProgramming}
//                 {...a11yProps(0)}
//                 className={`${mode ? '' : 'text-white'}`}
//               />
//               <Tab
//                 label={` ${lang.courses.graphicDesign} `}
//                 {...a11yProps(1)}
//                 className={`${mode ? '' : 'text-white'}`}
//               />
//               <Tab
//                 label={` ${lang.courses.smm}`}
//                 {...a11yProps(2)}
//                 className={`${mode ? '' : 'text-white'}`}
//               />
//             </Tabs>
//           </Box>
//           <TabPanel
//             value={value}
//             index={0}
//             className={`${mode ? '' : 'text-white'}`}
//           >
//             {lang.courses.webProgramming}
//           </TabPanel>
//           <TabPanel
//             value={value}
//             index={1}
//             className={`${mode ? '' : 'text-white'}`}
//           >
//             {lang.courses.graphicDesign}
//           </TabPanel>
//           <TabPanel
//             value={value}
//             index={2}
//             className={`${mode ? '' : 'text-white'}`}
//           >
//             {lang.courses.smm}
//           </TabPanel>
//         </Box>
//       </div> */}
//       {/* <StudentEdit
//         open={open}
//         handleClose={handleClose}
//         id={id}
//         setOpen={setOpen}
//       /> */}
//       <div className={`students`}>
//         <div className="container">
//           <div className="students-info flex justify-content-between pb-4 items-center border-b border-b-gray-400">
//             <h2
//               className={"students-info__title " + (mode ? "" : "text-white")}
//             >
//               {lang.studentsPage["title"]}
//             </h2>
//             <div className="students-extra flex gap-[30px]">
//               <img src={icon} alt="image" />
//               <button
//                 data-modal-target="authentication-modal"
//                 data-modal-toggle="authentication-modal"
//                 className="text-white text-sm font-medium bg-[#FEAF00] rounded py-[13px] px-[26px]"
//               >
//                 {lang.studentsPage["button"]}
//               </button>
//             </div>
//           </div>
//           <table className="table table-hover border-separate border-spacing-x-0 border-spacing-y-3">
//             <thead className="border-none">
//               <tr className={`${darkClassHead(mode, "transparent")}`}>
//                 <th
//                   className={`whitespace-nowrap py-3 bg-transparent !text-inherit border-none`}
//                 ></th>

//                 <th
//                   scope="col"
//                   className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
//                 >
//                   ism
//                 </th>
//                 <th
//                   scope="col"
//                   className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
//                 >
//                   familiya
//                 </th>
//                 <th
//                   scope="col"
//                   className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
//                 >
//                   yosh
//                 </th>
//                 <th
//                   scope="col"
//                   className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
//                 >
//                   telefon raqami
//                 </th>
//                 <th
//                   scope="col"
//                   className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
//                 >
//                   foydalanuvchining nomi
//                 </th>
//                 <th
//                   scope="col"
//                   className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
//                 >
//                   guruh
//                 </th>
//                 <th
//                   className={`whitespace-nowrap py-3 bg-transparent !text-inherit border-none`}
//                 ></th>
//                 <th
//                   className={`whitespace-nowrap py-3 bg-transparent !text-inherit border-none`}
//                 ></th>
//               </tr>
//             </thead>
//             <tbody>
//               {groups.map((groups, i) => (
//                 <tr
//                   key={i}
//                   scope="row"
//                   className={`rounded-lg !mt-5 ${darkClass(mode, i)}`}
//                 >
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit rounded-l-lg`}
//                   >
//                     <img
//                       src={groups.rasm}
//                       alt=""
//                       className="rounded-lg w-[64px] h-[54px] align-middle object-bottom object-cover"
//                     />
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.direction}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.group_name}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.teacher_name}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.assistant_teacher_name}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.start_lesson_date}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.start_lesson_time}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     {groups.created_date}
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
//                   >
//                     <button
//                       title="edit"
//                       className="align-middle"
//                       onClick={() => handleOpen(groups.id)}
//                     >
//                       <img src={editIcon} alt="edit icon" />
//                     </button>
//                   </td>
//                   <td
//                     className={`align-middle whitespace-nowrap py-2 bg-transparent text-inherit rounded-r-lg`}
//                   >
//                     <button
//                       title="delete"
//                       className="align-middle"
//                       onClick={() => deleteHandler(groups.id, setGroups)}
//                     >
//                       <img src={deleteIcon} alt="delete icon" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
