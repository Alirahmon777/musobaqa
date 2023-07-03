import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import userImage from '../assets/img/aside-image.png';
import { Context } from '../context/Context';
import { removeLocalStorage } from '../lib/LocalStorage';
import '../assets/css/Aside.css';
import {
  CourseIcon,
  HomeIcon,
  LogoutIcon,
  PaymentIcon,
  ReportIcon,
  SettingsIcon,
  StudentIcon,
} from './SvgComponent';
import { AuthContext } from '../context/AuthContext';

function Aside(props) {
  const { mode, LANG, language } = useContext(Context);
  const { user } = useContext(AuthContext);
  console.log(user);
  const lang = LANG[language];

  const asideIcons = [
    <HomeIcon mode={mode} />,
    <CourseIcon mode={mode} />,
    <StudentIcon mode={mode} />,
    <PaymentIcon mode={mode} />,
    <ReportIcon mode={mode} />,
    <SettingsIcon mode={mode} />,
  ];
  const asideTexts = [
    lang['home'],
    lang['course'],
    lang['students'],
    lang['payment'],
    lang['report'],
    lang['settings'],
  ];
  const asidePaths = [
    '/',
    '/course',
    '/students',
    '/payment',
    '/report',
    '/settings',
  ];

  function toRegister() {
    removeLocalStorage('token');
    window.location.replace('/login');
  }

  return (
    <aside
      className={
        'border-r min-h-full ' +
        (mode
          ? 'border-r-transparent'
          : ' linear-bg__dark-sidebar border-r-gray-500')
      }
    >
      <div className='!bg-transparent aside min-h-full'>
        <h1 className={`aside-title__text ${mode ? '' : 'text-white'}`}>
          {lang.title}
        </h1>
        <div className='aside-admin'>
          <NavLink to={'/profile'} className='text-decoration-none'>
            <img
              src={userImage}
              alt='user-image'
              className='aside-admin__image'
            />
            <h3 className={`aside-admin__title ${mode ? '' : 'text-white'}`}>
              {user}
            </h3>
            <p className='aside-admin__subtitle'>Admin</p>
          </NavLink>
        </div>
        <div className='h-full min-h-full flex flex-column justify-between flex-grow'>
          <ul className='aside-pages'>
            {asideIcons.map((item, index) => {
              return (
                <li className='aside-page' key={index}>
                  <NavLink to={asidePaths[index]} className='aside-page__link'>
                    {item}
                    <p
                      className={`aside-page__text ${mode ? '' : 'text-white'}`}
                    >
                      {asideTexts[index]}
                    </p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className='aside-logout' onClick={toRegister}>
            <p className={`aside-logout__text  ${mode ? '' : 'text-white'}`}>
              {lang['logout']}
            </p>
            <LogoutIcon mode={mode} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
