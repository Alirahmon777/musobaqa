import React from 'react';
import Aside from "../../components/Sidebar"

export default function Course() {
  return (
    <>
      <div className='row'>
        <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
          <Aside />
        </div>
        <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8'></div>
      </div>
    </>
  );
}
