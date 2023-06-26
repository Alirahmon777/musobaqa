import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
import errorImg from '../../assets/img/404.svg';
function Error(props) {
  const { mode, LANG, language } = useContext(Context);

  const lang = LANG[language];

  return (
    <>
      <div
        className={`error bg-purple border-t pt-2 ${
          mode ? 'border-t-transparent' : 'border-t-gray-500'
        }`}
      >
        <div className='container'>
          <div className='stars bg-purple'>
            <div className='central-body flex flex-col justify-center align-items-center gap-4'>
              <img
                className='image-404 relative z-20'
                src={errorImg}
                width='300px'
              ></img>
              <h3
                className={`text-2xl tracking-[0.3rem] uppercase text-center w-[360px] ${
                  mode ? '' : 'text-white'
                }`}
              >
                {lang.errorPage.title}
              </h3>
              <NavLink
                to='/'
                className={`btn-go-home ${mode ? '' : 'text-white'}`}
              >
                {lang.errorPage.button}
              </NavLink>
            </div>
            <div className='objects'>
              <img
                className='object_rocket'
                src='http://salehriaz.com/404Page/img/rocket.svg'
                width='40px'
              ></img>
              <div className='earth-moon'>
                <img
                  className='object_earth'
                  src='http://salehriaz.com/404Page/img/earth.svg'
                  width='100px'
                ></img>
                <img
                  className='object_moon'
                  src='http://salehriaz.com/404Page/img/moon.svg'
                  width='80px'
                ></img>
              </div>
              <div className='box_astronaut'>
                <img
                  className='object_astronaut'
                  src='http://salehriaz.com/404Page/img/astronaut.svg'
                  width='140px'
                ></img>
              </div>
            </div>
            <div className='glowing_stars'>
              <div className='star'></div>
              <div className='star'></div>
              <div className='star'></div>
              <div className='star'></div>
              <div className='star'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
