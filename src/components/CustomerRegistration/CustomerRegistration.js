import React, { useState } from 'react';
import "../CustomerRegistration/CustomerRegistration.css"

const CustomerRegistration = ({ showBookingSection }) => {

  const [cusName, setCusName] = useState("");
  const [cusMobile, setCusMobile] = useState("");
  const [cusEmail, setCusEmail] = useState("");
  const [cusAddress, setCusAddress] = useState("");

  const registerChange = (e) => {
    e.preventDefault();
    if (!cusName || !cusEmail || !cusMobile || !cusAddress) {
      alert("Please Enter All Details")
      return
    } else {
      alert("Customer Registered!")
    }

    showBookingSection()
  }

  return (
    <div className='customerRegistrationContainer'>
      <h2>Register Yourself</h2>
      <form className='flexDisplayClass' onSubmit={registerChange}>
        <label>Name:</label>
        <input type="text" placeholder='Enter name...' value={cusName} onChange={(e) => setCusName(e.target.value)} />
        <label>Email: </label>
        <input type="email" placeholder='Enter email...' value={cusEmail} onChange={(e) => setCusEmail(e.target.value)} />
        <label>Mobile:</label>
        <input type="tel" placeholder='Enter Mobile...' value={cusMobile} onChange={(e) => setCusMobile(e.target.value)} />
        <label>Address: </label>
        <textarea placeholder='Enter address...' value={cusAddress} onChange={(e) => setCusAddress(e.target.value)}></textarea>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default CustomerRegistration