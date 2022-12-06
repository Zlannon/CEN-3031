import React from 'react';
import { Link } from "react-router-dom";
import "@fontsource/itim"
import "./navbar.css"


const logo = require('../images/logo.png')

//Navigation bar
const Navbar = () => {

    //checks whether the logged in user is a restaurant or user through local storage
    const isAuthenticatedRestaurant = localStorage.getItem("isRestaurantAuthenticated");
    const isAuthenticatedCustomer = localStorage.getItem("isCustomerAuthenticated");

    // signout takes the user back to login page
    function signout() {
        localStorage.removeItem("isRestaurantAuthenticated")
        localStorage.removeItem("isCustomerAuthenticated")
        window.location.pathname = '/login'

    }


    function account() {
        // if customer render a different navigation bar than if the user is a restaurant
        if (isAuthenticatedCustomer) {
            return <>
                <Link to="/foodList">Food List</Link>
                <Link to="/claimFood">Claim Food</Link>
                <Link to="/userClaims">Your Claims</Link>
                <Link to={{}} className="dropdown">Account
                    <div className="dropdown-content">
                        <h5>Username: {localStorage.getItem("username")}</h5>
                    </div>
                </Link>
                <Link onClick={() => { signout(); }}>Signout</Link>
            </>
        }

        if (isAuthenticatedRestaurant) {
            return <>
                <Link to="/addFood">Add Food</Link>
                <Link to="/restaurantClaims">Claims</Link>
                <Link to={{}} className="dropdown">Account
                    <div className="dropdown-content">
                        <h5>Username: {localStorage.getItem("username")}</h5>
                    </div>
                </Link>
                <Link onClick={() => { signout(); }}>Signout</Link>
            </>
        }

        return <>
            <Link to="/login">Login</Link>
            <Link to="/createAccount">Sign up</Link>
        </>
    }

    //Toggle the display between light and dark mode if the dark mode button on navigation bar is clicked
    function darkMode() {
        function onClick() {
            if (localStorage.getItem("darkmode") == "true") {
                localStorage.setItem("darkmode", "false")

                document.getElementById("App").classList.remove("dark")

                document.getElementById("darkmode").innerHTML = "Dark Mode"
            }
            else {
                localStorage.setItem("darkmode", "true")

                document.getElementById("App").classList.add("dark")

                document.getElementById("darkmode").innerHTML = "Light Mode"
            }
        }

        return <a id="darkmode" onClick={onClick}>Dark Mode</a>
    }

    return (
        <header>
            <span className="logo">
                <img src={logo} alt="" />
                <Link to="/"><span id="give">Give</span> <span id="good">Good</span></Link>
            </span>
            <nav>
                <Link to="/">Home</Link>
                {account()}
                {darkMode()}
            </nav>
        </header>
    );
}
export default Navbar;