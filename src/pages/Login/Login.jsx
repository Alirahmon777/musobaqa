import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../components/css/Login.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toMain(e) {
    e.preventDefault();

    if (email == "" && password == "") {
      toast.error("Please fill both email and password fields :(");
    } else if (email == "") {
      toast.warning("Please fill email field :(");
    } else if (password == "") {
      toast.warning("Please fill password field :(");
    } else {
      toast.success("Successfully signed :D");
      window.location.href = "../../../";
    }
  }

  return (
    <div className="register">
      <div className="register__inner">
        <div className="register-body">
          <div className="register-title">
            <h1 className="register-title__text">CRUD OPERATIONS</h1>
          </div>
          <form className="register-form">
            <h3 className="register-form__title">Sign In</h3>
            <p className="register-form__subtitle">
              Enter your credentials to access your account
            </p>
            <label className="register-form__label">
              <p className="register-form__label-text">Email</p>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="register-form__label-input"
              />
            </label>

            <label className="register-form__label">
              <p className="register-form__label-text">Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="register-form__label-input"
              />
            </label>

            <button
              className="register-form__btn"
              type="submit"
              onClick={(e) => toMain(e)}
            >
              SIGN IN
            </button>
          </form>
          <div className="register-extra">
            <p className="register-extra__text">Forgot your password?</p>
            <a href="#" className="register-extra__link">
              Reset Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
