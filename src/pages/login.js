
import { useState } from "react";
import {Link} from "react-router-dom"
import "./App.css"

function Login() {
  const [passwordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    
    return(
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
        <input className='username' placeholder='Enter Username'/>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="password" placeholder="Enter Password" />         
        </div>
        <div className='userType'>
       
       
        <button className='login-form-submit'>Login</button>
        </div>
        <p>Don't have an account? <Link to="/createAccount">Sign up</Link></p>
      </div>
      <div>
    
    </div>
    </div>
  );
    
}

export default Login;