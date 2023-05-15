import React, { useState } from 'react';
import CustomerRegistration from '../CustomerRegistration/CustomerRegistration';
import FlightBooking from '../FligthBooking/FlightBooking';
import "../CustomerDashboard/CustomerDashboard.css"

const CustomerDashboard = () => {

  const [showBooking, setShowBooking] = useState(false);

  const showFlightBookingSection = () => {
    setShowBooking(true)
  }

  return (
    <div className='cutomerDashboardContainer'>
        <CustomerRegistration showBookingSection = {showFlightBookingSection}/>
        {showBooking && <FlightBooking/>}
    </div>
  )
}

export default CustomerDashboard