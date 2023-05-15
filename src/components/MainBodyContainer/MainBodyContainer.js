import React from 'react';
import AdminLogin from '../AdminLogin/AdminLogin';
import CustomerLogin from '../CustomerLogin/CustomerLogin';
import "../MainBodyContainer/MainBodyContainer.css"

const MainBodyContainer = () => {
  return (
    <div className='mainBodyContainer'>
        <CustomerLogin/>
        <AdminLogin/>
    </div>
  )
}

export default MainBodyContainer