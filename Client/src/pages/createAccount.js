
import { useState } from "react";
import { Link } from "react-router-dom"
import "./createAccount.css"
import Axios from "axios"

export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function getValidUsername(username){
  const result = username.replace(/[^a-zA-Z0-9]/gi, '');
  return result;
};


function CreateAccount() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
  
    const [passwordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
        OnInputChange(evnt);
    }

    const addUser = () => {

      Axios.get("http://localhost:3001/check", {
          params: {
              user: user,
              email: email,
              type: document.getElementById("selectType").value,
          }
      }).then((response) => {
          if (response.data[0] && response.data[0].user) {
              alert("username already exists")
          } else if (response.data[0] && response.data[0].email) {
              alert("email already used")
          } else {
              Axios.get("http://localhost:3001/insert", {
                  params: {
                      user: user,
                      email: email,
                      pass: passwordInput,
                      type: document.getElementById("selectType").value,
                  }
              }).then(() => {
                  alert("inserted")
              });
          }
      })
      
  }

    //Verification
     //check email format
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  

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



  const passwordOnChange = (event) =>{
    setUser(getValidUsername(event.target.value)); 
    OnInputChange(event);
  };

  //------------------------------

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
             value={user} 
             onChange={event=>passwordOnChange(event)}
             onBlur={validateInput}
          />
          <br></br>
          {error && <text style={{color: 'red'}}>{error}</text>}  
          <input 
            className='email' 
            placeholder='Enter your Email'
            value={message}
            onChange={(event) => { handleChange(event); setEmail(event.target.value); }}

          />
          
          {err.password && <span className='err'  style={{color: 'red'}}>{err.password}</span>}
          <input 
            type={passwordType} 
            onChange={handlePasswordChange} 
            value={passwordInput} 
            name="password" 
            className="password" 
            placeholder="Password" 
          />         

        {err.confirmPassword && <span className='err' style={{color: 'red'}}>{err.confirmPassword}</span>}  
        <input type={passwordType} 
          name="confirmPassword"   
          value={input.confirmPassword} 
          onChange={OnInputChange} 
          onBlur={validateInput} 
          className="confirmPassword" 
          placeholder="Confirm Password"
        />         
        
        </div>
        <div className='userType'>
        <select name="userType" id="selectType"  >
          <option value="selected" hidden>Please select an option</option>
          <option value="Customer">Customer</option>
          <option value="Restaurant">Restaurant</option>
        </select>
       
        <button className='submit' onClick={ addUser }>Submit</button>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      <div>
    
    </div>
    </div>
  );
    
}

export default CreateAccount;