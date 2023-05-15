import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CustomerLogin = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const submitCustomerLogin = (e) => {
        e.preventDefault()
        if (pass === "1234" && email === "test@customer.com") {
            console.log("Login Successfull")
            setEmail("");
            setPass("");
            navigate("customerDashboard")

        } else {
            alert("Email or Password Incorrect! use : test@customer.com | 1234")
        }
    }

    return (
        <div className='outerLoginConatiner'>
            <form className="flexDisplayClass" onSubmit={submitCustomerLogin}>
                <label>Customer Email: </label>
                <input type="email" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password: </label>
                <input type="password" placeholder='Enter password...' value={pass} onChange={(e) => setPass(e.target.value)} />

                <span>test@customer.com | 1234</span>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CustomerLogin