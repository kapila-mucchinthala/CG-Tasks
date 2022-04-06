import { useState } from "react";
import "./booking.css";
import {Link} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
const axios = require("axios");

export const Signup = () => {
    const [data, setData] = useState({
      username: "",
      email:"",
        gender: "",
        mobile: "",
        password: "",
    });
   
    const handeleChange = (e) => {
        const { name,value } = e.target;
        setData({ 
            ...data,
            [name]:value,
        })
    }
    const handleSignup = () => {
        console.log(data);
        axios.post('http://localhost:3001/users', data);
        alert("Registered Successfully");
    }

  return (
    <div className="box">
      <h3>Signup</h3>
      <input
        type="text"
        onChange={handeleChange}
        name="username"
        placeholder="Username"
      />
      <br />
      <input
        type="text"
        onChange={handeleChange}
        name="email"
        placeholder="Email"
      />
      <br/>
      <input
        type="text"
        onChange={handeleChange}
        name="gender"
        placeholder="Gender"
      />
      <br />
      <input
        type="text"
        onChange={handeleChange}
        name="mobile"
        placeholder="Mobile Number"
      />
      <br />
      <input
        type="password"
        onChange={handeleChange}
        name="password"
        placeholder="Password"
      />
      <button onClick={handleSignup} disabled={data.username.trim().length===0 || data.gender.trim().length===0 || data.mobile.trim().length===0 || data.password.trim().length===0 || data.email.trim().length===0}>Signup</button>
      <Link to='/SignIn'><button>Login</button></Link>
    </div>
  );
};


