import React from 'react';
import {  Link } from "react-router-dom";

import "@fontsource/itim" 
import "./navbar.css"

const logo = require('../images/logo.png')

const Navbar= () =>{
  var isAuthenticatedRestaurant = localStorage.getItem("isRestaurantAuthenticated");
  var isAuthenticatedCustomer = localStorage.getItem("isCustomerAuthenticated");
 // console.log("this", isAuthenticatedCustomer);
 // console.log("this", isAuthenticatedRestaurant);


  function signout(){
    localStorage.clear();
    window.location.pathname ='/login'

  }

  function NavigationBar(){
     if(isAuthenticatedCustomer){
      return <>
        <span className="buttons">
          <Link to="/">Home</Link>
          <Link to="/foodList">Food List</Link>
          <Link to="/userClaims">Claims</Link>
          <Link  onClick={() => {
          signout();
        }}>Signout</Link>
      </span>
    </>
    }else if(isAuthenticatedRestaurant){
      return  <>
      <span className="buttons">
        <Link to="/">Home</Link>
        <Link to="/addFood">Add Food</Link>
        <Link to="/restaurantClaims">Claims</Link>

         <Link  onClick={() => {
          signout();
        }}>Signout</Link>

      </span>
    </>
    }else{
      return   <>
        <span className="homeButtons">
            <Link to="/login">Login</Link>
            <Link to="/createAccount">Sign up</Link>
        </span>
     </>
    }

  }
 
  return (
    <div className="navigation">
        <span className="logo">
          <img src={logo} alt=""/>
          <Link to="/"><span id="give">Give</span> <span id="good">Good</span></Link>
        </span>
       
        <NavigationBar/>
       
    </div>
  );
}
export default Navbar;
