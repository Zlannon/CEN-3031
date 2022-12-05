
import { useState } from "react";
import { Link } from "react-router-dom"
import "./createAccount.css"
import Axios from "axios"


// makes sure email is in a valid format 
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// makes sure that the username doesn't have characters other than alphabets and numbers
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

    //creates a new restaurant or a customer account based on their selected type and pops an error if the username or email is already used for some other account
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
 
  // makes sure that the fields are inputted and pops an error if they aren't. 
  // Also checks that the password and confirm password are the same.
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
    <main>
      <div className="accountBox">
        <h3>Create Account</h3>
        {err.username && (
          <span className="err" style={{ color: "red" }}>
            {err.username}
          </span>
        )}

        <input
          type="text"
          className="inputBox"
          name="username"
          placeholder="Create Username"
          value={user}
          onChange={(event) => passwordOnChange(event)}
          onBlur={validateInput}
        />
        <br></br>
        {error && <text style={{ color: "red" }}>{error}</text>}
        <input
          className="inputBox"
          placeholder="Enter your Email"
          value={message}
          onChange={(event) => {
            handleChange(event);
            setEmail(event.target.value);
          }}
        />

        {err.password && (
          <span className="err" style={{ color: "red" }}>
            {err.password}
          </span>
        )}
        <input
          type={passwordType}
          onChange={handlePasswordChange}
          value={passwordInput}
          name="password"
          className="inputBox"
          placeholder="Password"
        />

        {err.confirmPassword && (
          <span className="err" style={{ color: "red" }}>
            {err.confirmPassword}
          </span>
        )}
        <input
          type={passwordType}
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={OnInputChange}
          onBlur={validateInput}
          className="inputBox"
          placeholder="Confirm Password"
        />
        <select name="userType" id="selectType">
          <option value="selected" hidden>
            Please select an option
          </option>
          <option value="Customer">Customer</option>
          <option value="Restaurant">Restaurant</option>
        </select>

        <button className="submit" onClick={addUser}>
          Submit
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
    
}

export default CreateAccount;