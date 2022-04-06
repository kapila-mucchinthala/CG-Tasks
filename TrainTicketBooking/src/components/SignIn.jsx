import "./booking.css";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const axios = require('axios');


export const SignIn = () => {
  const [data,setdata]=useState({
    email:"",
    password:""
  })

  var a=useNavigate()
   const handleLogin=()=>{
    axios.get('http://localhost:3001/users')
  .then(function (response) {
    const users = response.data
    // console.log(users);
      users.forEach(el => {
        if (el.email === data.email && el.password === data.password) {
          // console.log(data.email,data.password);
          a('/Booking');
        } 
      });
  })
  .catch(function (error) {
  })
  .then(function () {
  });

   }
  function handleChange(e){
    const {value,name}=e.target
    setdata({
      ...data,
      [name]:value
    })
  }

  return (
    <div className="box">
      <h3>Login</h3>
      <input type="text" onChange={handleChange} name='email' placeholder="Email" />
      <br />
      <input type="password" onChange={handleChange} name='password' placeholder="Password" />
      <button onClick={handleLogin} disabled={data.email.trim().length === 0 || data.password.trim().length === 0} >Login</button>
    </div>
  );
};
