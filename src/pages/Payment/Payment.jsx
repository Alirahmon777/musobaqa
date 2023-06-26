import React, { useContext } from 'react';
import icon from '../../assets/img/sort-icon.svg';
import icon2 from '../../assets/img/eye-icon.svg';
import '../../assets/css/Paymnet.css';
import { Context } from '../../context/Context';

function Payment(props) {
  const { mode, language, LANG } = useContext(Context);
  const lang = LANG[language];

  const darkClass = `${
    mode ? '' : '!bg-[#414345] border-b-gray-500 text-white'
  }`;

  return (
    <>
      <div className='payment'>
        <div className='container'>
          <div className='payment__inner'>
            <div className='students__inner'>
              <div className='students-info'>
                <h2
                  className={
                    'students-info__title ' + (mode ? '' : 'text-white')
                  }
                >
                  {lang.paymentPage['title']}
                </h2>
                <div className='students-extra'>
                  <img src={icon} alt='image' />
                </div>
              </div>

              <table className={`table ${mode ? '' : 'text-white'}`}>
                <thead className={darkClass}>
                  <tr className={darkClass}>
                    <th className={darkClass}>{lang.paymentPage['name']}</th>
                    <th className={darkClass}>
                      {lang.paymentPage['schedule']}
                    </th>
                    <th className={darkClass}>{lang.paymentPage['bill']}</th>
                    <th className={darkClass}>
                      {lang.paymentPage['amountPaid']}
                    </th>
                    <th className={darkClass}>
                      {lang.paymentPage['balanceAmount']}
                    </th>
                    <th className={darkClass}>{lang.paymentPage['date']}</th>
                    <th className={darkClass}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr scope='row'>
                    <td className={darkClass}>Karthi</td>
                    <td className={darkClass}>First</td>
                    <td className={darkClass}>00012223</td>
                    <td className={darkClass}>INR 35,000</td>
                    <td className={darkClass}>INR 55,000</td>
                    <td className={darkClass}>08-Dec, 2021</td>
                    <td className={darkClass}>
                      <img src={icon2} alt='edit-icon' />
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
