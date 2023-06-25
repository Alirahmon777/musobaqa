import React from "react";
import "../../components/css/Login.css";
import Line from "../../components/img/line.png";
export default function Login() {
  return (
    <>
      <div className="row LoginRow text-center l-form">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 companyname text-center">
          <img src={Line} alt={Line} />
          <h1 className="crudOperations">CRUD OPERATIONS</h1>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1 className="SingIn">Sign In</h1>
          <p className="p1">Enter your credentials to access your account</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  text-center">
      <input type="text" className="form__input" placeholder=" " />
              <label htmlFor className="form__label">
                Email
              </label>
            </div>
            <div className="form__div">
              <input type="password" className="form__input" placeholder=" " />
              <label htmlFor className="form__label">
                Password
              </label>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
      </div>
    </>
  );
}
