import React from 'react';
import { Link } from "react-router-dom";
import "./App.css"
import "@fontsource/itim"

const logo = require('../images/logo.png')
const Navbar = () => {
    return (
        <div className='navigation'>
            <div className='navBox'>
                <img src={logo} className="logo"></img>
                <Link style={{ textDecoration: 'none' }} to="/" ><h1 id="appName">Give <span id="good"> Good</span> </h1></Link>
                <Link style={{ textDecoration: 'none' }} to="/createAccount" id="signup"><button id="signupText">Sign up</button></Link>



            </div>

        </div>
    );
}
export default Navbar;