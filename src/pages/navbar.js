import React from 'react';
import {  Link } from "react-router-dom";
import "./navbar.css"
import "@fontsource/itim" 

const logo = require('../images/logo.png')
const Navbar= () =>{
  return (
    <div className="navigation">
        <span className="logo">
          <img src={logo} alt=""/>
          <Link to="/"><span id="give">Give</span> <span id="good">Good</span></Link>
        </span>
        <span className="buttons">
          <Link to="/login">Login</Link>
          <Link to="/createAccount">Sign up</Link>
        </span>
    </div>
  );
}
export default Navbar;
