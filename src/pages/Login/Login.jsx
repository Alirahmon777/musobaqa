import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import { api } from '../../utils/api';
import { setLocalStorage } from '../../lib/LocalStorage';

function Login() {
  const navigate = useNavigate();
  const { userName, setUserName, phoneNumber, setPhoneNumber, setIsLogin } =
    useContext(AuthContext);

  const toMain = (e) => {
    e.preventDefault();
    api()
      .post('https://reqres.in/api/register', {
        email: userName,
        password: phoneNumber,
      })
      .then((response) => {
        toast.success('Successfully signed :D');
        setLocalStorage('token', response.data.token);

        setIsLogin(true);
        navigate('/');
        return response.data;
      })
      .catch((error) => {
        toast.error('Please fill both user name and phone number fields :(');
        throw error;
      });
  };

  return (
    <div className='register'>
      <div className='register__inner'>
        <div className='register-body'>
          <div className='register-title'>
            <h1 className='register-title__text'>CRUD OPERATIONS</h1>
          </div>
          <form className='register-form' onSubmit={toMain}>
            <h3 className='register-form__title'>Sign In</h3>
            <p className='register-form__subtitle'>
              Enter your credentials to access your account
            </p>
            <label className='register-form__label'>
              <p className='register-form__label-text'>Name</p>
              <input
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Enter your name'
                name='name'
                className='register-form__label-input'
              />
            </label>

            <label className='register-form__label'>
              <p className='register-form__label-text'>Phone number</p>
              <input
                type='password'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter your phone number'
                className='register-form__label-input'
              />
            </label>

            <button className='register-form__btn'>SIGN IN</button>
          </form>
          <div className='register-extra'>
            <p className='register-extra__text'>Forgot your phone number?</p>
            <a href='#' className='register-extra__link'>
              Reset phone number
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
