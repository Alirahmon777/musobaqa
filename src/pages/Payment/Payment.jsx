import React, { useContext } from "react";
// import { context } from "../../context/Context";
import { Context } from "../../context/Context";
import icon from "../../assets/img/sort-icon.svg";
import icon2 from "../../assets/img/eye-icon.svg";
import "../../components/css/Paymnet.css";

function Payment(props) {
  const { mode, language, LANG } = useContext(Context);
  const theme = mode ? false : true;
  const lang = LANG[language];

  return (
    <>
      <div className={"payment " + (theme ? "" : "bg-[#040111]")}>
        <div className="container">
          <div className="payment__inner">
            <div className="students__inner">
              <div className="students-info">
                <h2
                  className={
                    "students-info__title " + (theme ? "" : "text-white")
                  }
                >
                  {lang.paymentPage["title"]}
                </h2>
                <div className="students-extra">
                  <img src={icon} alt="image" />
                </div>
              </div>

              <table className={"table  " + (theme ? "" : "text-white")}>
                <thead>
                  <tr>
                    <th>{lang.paymentPage["name"]}</th>
                    <th>{lang.paymentPage["schedule"]}</th>
                    <th>{lang.paymentPage["bill"]}</th>
                    <th>{lang.paymentPage["amountPaid"]}</th>
                    <th>{lang.paymentPage["balanceAmount"]}</th>
                    <th>{lang.paymentPage["date"]}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr scope="row">
                    <td>Karthi</td>
                    <td>First</td>
                    <td>00012223</td>
                    <td>INR 35,000</td>
                    <td>INR 55,000</td>
                    <td>08-Dec, 2021</td>
                    <td>
                      <img src={icon2} alt="edit-icon" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Payment;
