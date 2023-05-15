import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const submitCustomerLogin = (e) => {
        e.preventDefault()
        if (pass === "1234" && email === "test@admin.com") {
            console.log("Login Successfull")
            setEmail("");
            setPass("");
            navigate("adminDashboard")
        } else {
            alert("Email or Password Incorrect! use : test@admin.com | 1234")
        }
    }

    return (
        <div className='outerLoginConatiner'>
            <form className="flexDisplayClass" onSubmit={submitCustomerLogin}>
                <label>Admin Email: </label>
                <input type="email" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password: </label>
                <input type="password" placeholder='Enter password...' value={pass} onChange={(e) => setPass(e.target.value)} />

                <span>test@admin.com | 1234</span>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AdminLogin