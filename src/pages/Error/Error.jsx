import React, { useContext } from "react";
import { context } from "../context";
import { NavLink } from "react-router-dom";

function Error(props) {
  const { LANG, language } = useContext(context);

  const lang = LANG[language];

  return (
    <>
      <div className="error bg-purple">
        <div className="container">
          <div className="stars bg-purple">
            <div className="central-body flex flex-col justify-center align-items-center gap-4">
              <img
                className="image-404 relative z-20"
                src="http://salehriaz.com/404Page/img/404.svg"
                width="300px"
              ></img>
              <NavLink to="/" className="btn-go-home" target="_blank">
                GO BACK HOME
              </NavLink>
            </div>
            <div className="objects">
              <img
                className="object_rocket"
                src="http://salehriaz.com/404Page/img/rocket.svg"
                width="40px"
              ></img>
              <div className="earth-moon">
                <img
                  className="object_earth"
                  src="http://salehriaz.com/404Page/img/earth.svg"
                  width="100px"
                ></img>
                <img
                  className="object_moon"
                  src="http://salehriaz.com/404Page/img/moon.svg"
                  width="80px"
                ></img>
              </div>
              <div className="box_astronaut">
                <img
                  className="object_astronaut"
                  src="http://salehriaz.com/404Page/img/astronaut.svg"
                  width="140px"
                ></img>
              </div>
            </div>
            <div className="glowing_stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
