
import { useState } from "react";
import {Link} from "react-router-dom"
import "./createAccount.css"

function CreateAccount() {

  //check email format
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

 
  //Functions to make sure username, password and confirm password is inputted and password = confirmPassword

  
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const [err, setErr] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
 
  const OnInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setErr(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : err.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
    //HTML frontend
    return(
        <div className="createAccount">
          <div className='createAccountBox'>
          
            <div className='createAccountHeader'>
              <h3>Create Account</h3>
          
          </div>
     
          <div className='inputs'>
            
            {err.username && <span className='err' style={{color: 'red'}}>{err.username}</span>}
            <input  
              type="text" 
              className='username' 
              name = 'username' 
              placeholder='Create Username'  
              value={input.username} 
              onChange={OnInputChange} 
              onBlur={validateInput}
            />

          
            
            {error && <text style={{color: 'red'}}>{error}</text>}
            <input 
              className='email' 
              placeholder='Enter your Email' 
              value={message}
              onChange={handleChange}
            />
          
            
            {err.password && <span className='err'  style={{color: 'red'}}>{err.password}</span>}
            <input 
              type="password" 
              onBlur={validateInput} 
              onChange={OnInputChange} 
              value={input.password} 
              name="password" 
              class="password" 
              placeholder="Password" 
            />     
    
            {err.confirmPassword && <span className='err' style={{color: 'red'}}>{err.confirmPassword}</span>}
            <input 
              type="password" 
              name="confirmPassword"   
              value={input.confirmPassword} 
              onChange={OnInputChange} 
              onBlur={validateInput} 
              class="confirmPassword" 
              placeholder="Confirm Password" />         
            

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
    
    </div>
  );
    
}

export default CreateAccount;