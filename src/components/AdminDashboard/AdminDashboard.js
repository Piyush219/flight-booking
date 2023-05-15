import React, { useState } from 'react';
import "../AdminDashboard/AdminDashboard.css"

const TOTAL_NUMBER_OF_BOOKINGS = [
    {
        "id": 1,
        "name": "Air India",
        "number_of_bookings": 10,
        "empty_seats" : 4,
    },
    {
        "id": 2,
        "name": "Vistara",
        "number_of_bookings": 20,
        "empty_seats" : 5,
    },
    {
        "id": 3,
        "name": "IndiGo",
        "number_of_bookings": 5,
        "empty_seats" : 6,
    },
    {
        "id": 4,
        "name": "Spice Jets",
        "number_of_bookings": 10,
        "empty_seats" : 7,
    },
    {
        "id": 5,
        "name": "Go Air",
        "number_of_bookings": 10,
        "empty_seats" : 8,
    },
]

const AdminDashboard = () => {
    const [showData, setShowData] = useState(false)

    const showTableData = () => {
        setShowData(true)
    }

  return (
      <div className='flightsTableContainer'>
        <span onClick={showTableData}>Click to See Total Number of bookings:</span>
       {showData && <div>
            <table>
                <tr>
                    <th>Flight Name</th>
                    <th>Number Of Bookings</th>
                    <th>Empty Seats</th>
                </tr>
                {TOTAL_NUMBER_OF_BOOKINGS.map((item) => {
                    return (
                           <tr>
                                <td>{item.name}</td>
                                <td>{item.number_of_bookings}</td>
                                <td>{item.empty_seats}</td>
                            </tr>
                    )
                })}
            </table>
            
        </div>}
    </div>
  )
}

export default AdminDashboard