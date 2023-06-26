import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { context } from "../context";
import {context} from "../components/context/context"
import LANG from "./language/language";
import "../components/css/Aside.css"
import userImage from "../../src/components/img/aside-image.png";
import homeIcon from "../../src/components/img/icons/home-icon.svg";
import courseIcon from "../../src/components/img/icons/course-icon.svg";
import studentIcon from "../../src/components/img/icons/student-icon.svg";
import paymentIcon from "../../src/components/img/icons/payment-icon.svg";
import reportIcon from "../../src/components/img/icons/report-icon.svg";
import settingsIcon from "../../src/components/img/icons/settings-icon.svg";
import logoutIcon from "../../src/components/img/icons/logout-icon.svg";

function Aside(props) {
  const { mode, LANG, language } = useContext(context);
  const theme = mode ? false : true;

  const lang = LANG[language];

  const asideIcons = [
    homeIcon,
    courseIcon,
    studentIcon,
    paymentIcon,
    reportIcon,
    settingsIcon,
  ];
  const asideTexts = [
    lang["home"],
    lang["course"],
    lang["students"],
    lang["payment"],
    lang["report"],
    lang["settings"],
  ];
  const asidePaths = [
    "/",
    "/course",
    "/students",
    "/payment",
    "/report",
    "/settings",
  ];

  function toRegister() {
    window.location.href = "./src/pages/Register/index.html";
  }

  return (
    <>
      <div className={"aside " + (theme ? "" : " bg-[#040111]")}>
        <div className="aside-title">
          <h1 className="aside-title__text">{lang.title}</h1>
        </div>
        <div className="aside-admin">
          <img
            src={userImage}
            alt="user-image"
            className="aside-admin__image"
          />
          <h3 className="aside-admin__title">Karthi Madesh</h3>
          <p className="aside-admin__subtitle">Admin</p>
        </div>
        <ul className="aside-pages">
          {asideIcons.map((item, index) => {
            return (
              <li className="aside-page">
                <NavLink to={asidePaths[index]} className="aside-page__link">
                  <img
                    src={item}
                    alt="home icon"
                    className="aside-page__icon"
                  />
                  <p className="aside-page__text">{asideTexts[index]}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <a className="aside-logout" onClick={toRegister}>
          <p className="aside-logout__text">{lang["logout"]}</p>
          <img src={logoutIcon} alt="logout icon" />
        </a>
      </div>
    </>
  );
}

export default Aside;
