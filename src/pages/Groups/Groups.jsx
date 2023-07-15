import * as React from "react";
import { useEffect } from "react";
import { darkClass, darkClassHead } from "../../utils/darkClasses";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import editIcon from "../../assets/img/edit-icon.svg";
import deleteIcon from "../../assets/img/delete-icon.svg";
// import icon from "../../assets/img/sort-icon.svg";
import { deleteHandler } from "../../utils/helpers";
import { Context } from "../../context/Context";
import { api } from "../../utils/api";
import { GroupsContext } from "../../context/GroupsContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Groups() {
  const { mode, LANG, language } = React.useContext(Context);
  const [groups, setGroups] = React.useState(GroupsContext);
  console.log(groups);

  const lang = LANG[language];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    api()
      .get(`/groups`)
      .then((res) => {
        setGroups(res.data);
        console.log(groups);
      });
  }, []);
  return (
    <>
    <div>
            <div className='text-center'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
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
                  Yo'nalish
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  Guruh nomi
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  Ustozning ismi
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  Assistant ustozning ismi
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  Dars boshlanish sana
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                  Dars boshlanish vaqt
                </th>
                <th
                  scope="col"
                  className={`whitespace-nowrap py-3 capitalize bg-transparent !text-inherit border-none`}
                >
                 Guruh Ochilgan sana
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
              {groups.map((groups, i) => (
                <tr
                  key={i}
                  scope="row"
                  className={`rounded-lg !mt-5 ${darkClass(mode, i)}`}
                >
                  {/* <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit rounded-l-lg`}
                  >
                    <img
                      src={groups.rasm}
                      alt=""
                      className="rounded-lg w-[64px] h-[54px] align-middle object-bottom object-cover"
                    />
                  </td> */}
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.direction}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.group_name}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.teacher_name}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.assistant_teacher_name}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.start_lesson_date}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.start_lesson_time}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    {groups.created_date}
                  </td>
                  <td
                    className={`align-middle whitespace-nowrap py-2 bg-transparent !text-inherit`}
                  >
                    <button
                      title="edit"
                      className="align-middle"
                      onClick={() => handleOpen(groups.id)}
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
                      onClick={() => deleteHandler(groups.id, setGroups)}
                    >
                      <img src={deleteIcon} alt="delete icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </>
  );
}
