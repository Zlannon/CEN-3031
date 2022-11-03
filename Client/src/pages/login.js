
import { useState } from "react";
import { Link } from "react-router-dom"
import Axios from "axios"
import "./App.css"

function Login() {
    const [user, setUser] = useState("");
    const [passwordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const checkPass = () => {
        Axios.get("http://localhost:3001/pass", {
            params: {
                user: user,
                type: document.getElementById("selectType").value,
            },
        }).then((response) => {
            if (document.getElementById("selectType").value === "Customer") {
                if (response.data[0] && passwordInput === response.data[0].pass) {
                    alert("Customer Authenticated");
                } else {
                    alert("failed");
                }
            } else {
                if (response.data[0] && passwordInput === response.data[0].pass) {
                    alert("Restaurant Authenticated");
                } else {
                    alert("failed");
                }
            }
        });
    }

    return (
        <div className="createAccount">
      <div className='createAccountBox'>
        <div className='loginHeader'>
                    <h3>Login</h3>
     </div>
     <select name="userType" id="selectType"  >
          <option value="selected" hidden>Login as</option>
          <option value="Customer">Customer</option>
          <option value="Restaurant">Restaurant</option>
          </select>
        <div className='inputs'>
                    <input className='username' onChange={(event) => { setUser(event.target.value);}} id="username" placeholder='Enter Username'/>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} id="password" name="password" class="password" placeholder="Enter Password" />         
        </div>
        <div className='userType'>
                    <button className='login-form-submit' onClick={checkPass}>Login</button>
        </div>
        <p>Don't have an account? <Link to="/createAccount">Sign up</Link></p>
      </div>
      <div>
    
    </div>
    </div>
  );
    
}

export default Login;