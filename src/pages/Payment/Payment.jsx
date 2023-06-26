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

  const darkClassHead = `${
    mode ? '' : '!bg-[#414345] border-b-gray-500 !text-[#ACACAC]'
  }`;

  return (
    <>
      <div className='payment'>
        <div className='container'>
          <div className='payment__inner'>
            <div className='students__inner'>
              <div className='students-info flex justify-content-between pb-4 border-b items-center border-b-gray-500'>
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
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className={`${darkClassHead} whitespace-nowrap py-3`}
                    >
                      {lang.paymentPage['name']}
                    </th>
                    <th
                      scope='col'
                      className={`${darkClassHead} whitespace-nowrap py-3`}
                    >
                      {lang.paymentPage['schedule']}
                    </th>
                    <th
                      scope='col'
                      className={`${darkClassHead} whitespace-nowrap py-3`}
                    >
                      {lang.paymentPage['bill']}
                    </th>
                    <th
                      scope='col'
                      className={`${darkClassHead} whitespace-nowrap py-3`}
                    >
                      {lang.paymentPage['amountPaid']}
                    </th>
                    <th className={`${darkClassHead} whitespace-nowrap py-3`}>
                      {lang.paymentPage['balanceAmount']}
                    </th>
                    <th className={`${darkClassHead} whitespace-nowrap py-3`}>
                      {lang.paymentPage['date']}
                    </th>
                    <th className={`${darkClassHead} whitespace-nowrap py-3`}>
                      {lang.paymentPage['info']}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr scope='row'>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      Karthi
                    </td>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      First
                    </td>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      00012223
                    </td>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      INR 35,000
                    </td>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      INR 55,000
                    </td>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      08-Dec, 2021
                    </td>
                    <td className={`${darkClass} whitespace-nowrap py-3`}>
                      <img
                        src={icon2}
                        alt='edit-icon'
                        className='align-middle cursor-pointer'
                      />
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
