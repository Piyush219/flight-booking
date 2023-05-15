import React, { useEffect, useState } from 'react';
import "../FligthBooking/FlightBooking.css"

const AVAILABLE_FLIGHTS = [
    {
        "id": 1,
        "name": "Air India",
        "number_of_seats" : 10,
    },
    {
        "id": 2,
        "name": "Vistara",
        "number_of_seats": 20,
    },
    {
        "id": 3,
        "name": "IndiGo",
        "number_of_seats": 5,
    },
    {
        "id": 4,
        "name": "Spice Jets",
        "number_of_seats": 10,
    },
    {
        "id": 5,
        "name": "Go Air",
        "number_of_seats": 10,
    },
]

const FlightBooking = () => {

    const [flights, setFlights] = useState([]);
    const [bookFilghtName, setBookFlightName] = useState("No flight selected");
    const [destitonOfFlight, setDestinationOfFlight] = useState({"from":"", "to": ""})

    const bookFlight = (e) => {
        e.preventDefault();
        alert("Flight Booked:" + bookFilghtName)
    }

    const setFlightsToBook = (value, type) => {
        if(type === "from"){
            const obj = {...destitonOfFlight, from:value}
            setDestinationOfFlight(obj)
            
        } else {
            const obj = { ...destitonOfFlight, to: value }
            setDestinationOfFlight(obj)
        }

        console.log(destitonOfFlight)
    }

    useEffect(() => {
        if (destitonOfFlight.from && destitonOfFlight.to) {
            setFlights(AVAILABLE_FLIGHTS)
        }
    },[destitonOfFlight])


  return (
      <div className='customerRegistrationContainer'>
        <form onSubmit={bookFlight}>
              <div className='flexDisplayClass'>

                <label>Fly From:</label>
                <select onChange={(e) => setFlightsToBook(e.target.value,"from")}>
                    <option value="">--select--</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                </select>

                <label>Fly To:</label>
                  <select onChange={(e) => setFlightsToBook(e.target.value,"to")}>
                    <option value="">--select--</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </div>

            {flights.length >0 && <div>

                <span>Available Flights:</span>
                <div>

                    {flights.map((item) => {
                        return (
                            <div key={item.id} className="flightLists">
                                <ul>
                                    <li>Available Airline : {item.name}</li>
                                    <li>Number Of Seats Available : {item.number_of_seats}</li>
                                </ul>
                                <input type="radio" name={item.name} checked={bookFilghtName === item.name} onChange={(e) => setBookFlightName(e.target.name)}/>
                            </div>
                            
                        )
                    })}
                </div>

                <button type="submit">Book Flight</button>
            </div>}

        </form>
    </div>
  )
}

export default FlightBooking