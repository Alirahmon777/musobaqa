import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import { api } from '../../utils/api';
import { setLocalStorage } from '../../lib/LocalStorage';
// import OtpInput from 'otp-input-react';
import {OtpInput} from "otp-input-react"
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase.config';
import PhoneInput from 'react-phone-input-2';
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const {
    user,
    setUser,
    otp,
    setOtp,
    ph,
    setPh,
    showOTP,
    setShowOTP,
    setIsLogin,
    setLoading,
  } = useContext(AuthContext);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            onSignup();
          },
          'expired-callback': () => {},
        },
        auth
      );
    }
  }

  function onSignup(e) {
    e.preventDefault();

    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = '+' + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success('OTP sended successfully!');
      })
      .catch((err) => {
        console.log(error);
        console.log(err);
        setLoading(false);
        toast.error(error[`${err.code}`], {
          position: 'top-right',
        });
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setIsLogin(res.user);
        setLoading(false);
        setLocalStorage('token', res._tokenResponse.idToken);
        setLocalStorage('refreshToken', res._tokenResponse.refreshToken);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.code);
        setLoading(false);
        toast.error(error[`${err.code}`], {
          position: 'top-right',
        });
      });
  }
  useEffect(() => {
    api()
      .get('/error')
      .then((res) => {
        setError(res.data);
      });
  }, []);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className='register'>
        <div id='recaptcha-container'></div>
        <div className='register__inner'>
          <div className='register-body'>
            <div className='register-title'>
              <h1 className='register-title__text'>CRUD OPERATIONS</h1>
            </div>
            {showOTP ? (
              <>
                <label
                  htmlFor='otp'
                  className='font-bold text-xl text-black text-center'
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType='number'
                  disabled={false}
                  autoFocus
                  className='opt-container py-4'
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className='bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded'
                >
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <div className='register-form'>
                <h3 className='register-form__title'>Sign In</h3>
                <p className='register-form__subtitle'>
                  Enter your credentials to access your account
                </p>
                <label className='register-form__label'>
                  <p className='register-form__label-text'>Name</p>
                  <input
                    type='text'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder='Enter your name'
                    name='name'
                    className='register-form__label-input'
                  />
                </label>

                <label className='register-form__label'>
                  <PhoneInput country={'uz'} value={ph} onChange={setPh}/>
                </label>

                <button className='register-form__btn' onClick={onSignup}>
                  SIGN IN
                </button>
              </div>
            )}
            <div className='register-extra'>
              <p className='register-extra__text'>Forgot your phone number?</p>
              <a href='#' className='register-extra__link'>
                Reset phone number
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
