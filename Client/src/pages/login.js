import { useState, React } from "react";
import { Link } from "react-router-dom"
import Axios from "axios"


export function isValidUser(user) {
    return /[a-zA-Z0-9!#$%^&*()_]+/.test(user);
}

//Login page
function Login() {
    const [user, setUser] = useState("");
    const [passwordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }

    //checks if the login information is valid otherwise alerts an error. 
    //Navigates to respective foodList or addFood pages based on whether the restaurant or user logged in
    //Stores in localStorage the username of the customer or restaurant
    const checkPass = () => {
        if (isValidUser(user)) {
            Axios.get("http://localhost:3001/pass", {
                params: {
                    user: user,
                    type: document.getElementById("selectType").value,
                },
            }).then((response) => {
                if (document.getElementById("selectType").value === "Customer") {
                    if (response.data[0] && passwordInput === response.data[0].pass) {
                        alert("Customer Authenticated");
                        localStorage.setItem("username", user);
                        localStorage.setItem("isCustomerAuthenticated", "true");
                        window.location.reload(false);
                        window.location.pathname = '/foodList'


                    } else {
                        alert("failed");
                    }
                } else {
                    if (response.data[0] && passwordInput === response.data[0].pass) {
                        alert("Restaurant Authenticated");
                        localStorage.setItem("username", user);
                        localStorage.setItem("isRestaurantAuthenticated", "true");
                        window.location.reload(false);
                        window.location.pathname = '/addFood'


                    } else {
                        alert("failed");
                    }
                }
            });
        }
    }

    //Input fields include username, password and dropdown of Customer/Restaurant
    //Sets user and password onChange and calls the function checkPass after they hit submit
    return (
        <main>
            <div className="accountBox">
                <h3>Login</h3>
                <select name="userType" className="inputBox" id="selectType">
                    <option value="selected" hidden>Login as</option>
                    <option value="Customer">Customer</option>
                    <option value="Restaurant">Restaurant</option>
                </select>
                <input
                    className="inputBox"
                    type="text"
                    onChange={(event) => {
                        setUser(event.target.value);
                    }}
                    id="username"
                    placeholder="Enter Username"
                />
                <input
                    type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    id="password"
                    name="password"
                    className="inputBox"
                    placeholder="Enter Password"
                />
                <button
                    className="submit"
                    onClick={() => {
                        checkPass();
                    }}
                >
                    Login
                </button>
                <p>
                    Don't have an account? <Link to="/createAccount">Sign up</Link>
                </p>
            </div>
        </main>
    );

}

export default Login;
