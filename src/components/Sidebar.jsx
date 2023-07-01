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

function Aside(props) {
  const { mode, LANG, language } = useContext(Context);

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
    <>
      <aside
        className={
          'aside border-r ' +
          (mode
            ? 'border-r-transparent'
            : ' linear-bg__dark-sidebar border-r-gray-500')
        }
      >
        <h1 className={`aside-title__text ${mode ? '' : 'text-white'}`}>
          {lang.title}
        </h1>
        <div className='aside-admin'>
          <img
            src={userImage}
            alt='user-image'
            className='aside-admin__image'
          />
          <h3 className={`aside-admin__title ${mode ? '' : 'text-white'}`}>
            Karthi Madesh
          </h3>
          <p className='aside-admin__subtitle'>Admin</p>
        </div>
        <div className='h-full flex flex-column justify-between'>
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
      </aside>
    </>
  );
}

export default Aside;
