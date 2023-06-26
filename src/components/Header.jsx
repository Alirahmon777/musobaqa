import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { setLocalStorage } from '../lib/LocalStorage';

function Header({ setMode, setLanguage }) {
  const { mode, LANG, language } = useContext(Context);

  const theme = mode ? false : true;

  const lang = LANG[language];

  return (
    <header className={'header ' + (theme ? 'bg-white' : 'bg-[#040111]')}>
      <div className='container'>
        <div className='header__inner'>
          <div href='#' className='header-last'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_21_352)'>
                <path
                  d='M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z'
                  fill='currentColor'
                />
              </g>
              <defs>
                <clipPath id='clip0_21_352'>
                  <rect
                    width='18'
                    height='18'
                    fill='white'
                    transform='matrix(0 1 -1 0 18 0)'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='header-extra'>
            <div className='header-changes flex gap-3'>
              <div
                className={
                  'mode-image cursor-pointer  ' +
                  (theme ? 'text-[#FFEB3B]' : 'text-[#19376D]')
                }
                title='Light mode'
                onClick={(e) => {
                  if (mode) {
                    setMode(false);
                    localStorage.setItem('theme', false);
                  } else {
                    setMode(true);
                    localStorage.setItem('theme', true);
                  }
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 48 48'
                  width='48px'
                  height='48px'
                >
                  <path fill='#FF9800' d='M11 11H37V37H11z' />
                  <path
                    fill='#FF9800'
                    d='M11.272 11.272H36.728V36.728H11.272z'
                    transform='rotate(-45.001 24 24)'
                  />
                  <path
                    fill='currentColor'
                    d='M13,24c0,6.077,4.923,11,11,11c6.076,0,11-4.923,11-11s-4.924-11-11-11C17.923,13,13,17.923,13,24'
                  />
                </svg>
              </div>
              <select
                defaultValue={'0'}
                className={
                  'p-2 border rounded-xl border-gray-500  outline-gray-800 cursor-pointer ' +
                  (theme ? 'bg-white' : 'bg-[#19376D] text-gray-300')
                }
                onChange={(e) => {
                  setLanguage(e.target.value);
                  setLocalStorage('language', e.target.value);
                }}
              >
                <option value='0' disabled hidden>
                  {lang.header.select}
                </option>
                <option value='1'>Uzb</option>
                <option value='2'>Eng</option>
              </select>
            </div>
            <form>
              <input
                type='text'
                placeholder={lang.header.search}
                className={
                  'header-extra__search ' +
                  (theme
                    ? 'bg-white'
                    : 'bg-[#19376D] text-white placeholder:text-gray-300')
                }
              />
            </form>
            <div className='header-extra__info'>
              <svg
                width='17'
                height='20'
                viewBox='0 0 17 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_21_354)'>
                  <path
                    d='M8.5003 18.75C9.17044 18.75 9.71459 18.1883 9.71459 17.4988H10.9289C10.9289 18.8781 9.83905 20 8.5003 20C7.16155 20 6.07173 18.8781 6.07173 17.4988H7.28602C7.28602 18.1883 7.83017 18.75 8.5003 18.75ZM0.555079 13.0785C1.61606 12.0387 2.42735 10.9504 2.42735 7.26172C2.42735 4.15273 4.83278 1.61719 7.89316 1.31055V0.625C7.89316 0.279687 8.16486 0 8.5003 0C8.83575 0 9.10745 0.279687 9.10745 0.625V1.31094C12.1678 1.61758 14.5733 4.15273 14.5733 7.26172C14.5733 10.95 15.3849 12.0387 16.4459 13.0785C16.976 13.598 17.1434 14.3836 16.8728 15.0797C16.5966 15.7906 15.9317 16.25 15.1789 16.25H1.82173C1.06887 16.25 0.404051 15.7902 0.1278 15.0793C-0.142757 14.3832 0.0249653 13.598 0.555079 13.0785ZM1.82173 15H15.1789C15.7189 15 15.9887 14.3566 15.6084 13.984C14.2856 12.6875 13.359 11.2363 13.359 7.26211C13.359 4.63008 11.1858 2.5 8.5003 2.5C5.81521 2.5 3.64164 4.62969 3.64164 7.26172C3.64164 11.2207 2.72296 12.6797 1.39218 13.9836C1.01044 14.3582 1.28403 15 1.82173 15Z'
                    fill='currentColor'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_21_354'>
                    <rect
                      width='17'
                      height='20'
                      fill='white'
                      transform='matrix(-1 0 0 1 17 0)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
