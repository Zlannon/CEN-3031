
import { useState } from "react";
import { Link } from "react-router-dom"
import Axios from "axios"
import "./App.css"

function CreateAccount() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
  const [passwordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
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

    return(
        <div className="createAccount">
      <div className='createAccountBox'>
       
        <div className='createAccountHeader'>
          <h3>Create Account</h3>
       
     </div>
        <div className='inputs'>
          <input className='username' onChange={(event) => { setUser(event.target.value); }} placeholder='Create Username'/>
          <input className='email' onChange={(event) => { setEmail(event.target.value); }}placeholder='Enter your Email'/>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="password" placeholder="Password" />         
          <input type={passwordType} name="confirmPassword" class="confirmPassword" placeholder="Confirm Password" />         
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