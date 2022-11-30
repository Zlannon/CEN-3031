import React from 'react';
import {  Link } from "react-router-dom";
import "./App.css"
import "@fontsource/itim" 

const logo = require('../images/logo.png')
const Navbar= () =>{
  return (
    
  <div className='navigation'>
    <div className='navBox'>
      <img src={logo} className="logo" alt="CharityLogo"></img>
    <Link style={{textDecoration:'none'}} to="/" ><h1 id="appName">Give <span id="good"> Good</span> </h1></Link>
     <Link style={{textDecoration:'none'}} to="/createAccount" id="signup"><button class="signupText">Sign Up</button></Link>
     <Link style={{textDecoration:'none'}} to="/login" id="signup"><button class="signinText">Sign In</button></Link>
     <Link style={{textDecoration:'none'}} to="/claimFood" id="signup"><button class="claimfoodText">Claim Food</button></Link>
     
     


    

    </div>
    
  </div>
  );
}
export default Navbar;