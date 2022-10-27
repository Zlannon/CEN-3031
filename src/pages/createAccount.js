
import { useState } from "react";
import {Link} from "react-router-dom"
import "./App.css"

function CreateAccount() {
  const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(
        <div className="createAccount">
      <div className='createAccountBox'>
       
        <div className='createAccountHeader'>
          User Create Account
       
     </div>
        <div className='inputs'>
        <input className='username' placeholder='Create Username'/>
          <input className='email' placeholder='Enter your Email'/>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="password" placeholder="Password" />         
          <input type={passwordType} name="confirmPassword" class="confirmPassword" placeholder="Confirm Password" />         
        </div>
        <div className='userType'>
        <select name="userType" id="selectType"  >
          <option value="selected" hidden>Please select an option</option>
          <option value="Customer">Customer</option>
          <option value="Restaurant">Restaurant</option>
          </select>
       
        <button className='submit'>Submit</button>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      <div>
    
    </div>
    </div>
  );
    
}

export default CreateAccount;