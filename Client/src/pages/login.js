
import { useState , React} from "react";
import { Link } from "react-router-dom"
import Axios from "axios"
import "./login.css"

function Login() {
    const [user, setUser] = useState("");
    const [passwordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
   //console.log("Customer auth", localStorage.getItem("isCustomerAuthenticated"));
  // console.log("Restaurant auth", localStorage.getItem("isRestaurantAuthenticated"));

  
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }


    /*const CusEmail = async(authType, user) => {
        console.log(user);
        console.log(authType)
                Axios.get("http://localhost:3001/getEmail", {
                    params: {
                        user: user,
                        type: authType,
                    },
                }).then((response) => {
                // console.log(JSON.stringify(response))
                alert(response.data[0].email)
                    localStorage.setItem("email", response.data[0].email)
                
                
                });
                
                    
                
              
        }*/

    
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
                    localStorage.setItem("username", user);
                   // CusEmail("Customer", user);
                    localStorage.setItem("isCustomerAuthenticated", "true");
                    window.location.reload(false);
                    window.location.pathname ='/foodList'


                } else {
                    alert("failed");
                }
            } else {
                if (response.data[0] && passwordInput === response.data[0].pass) {
                    alert("Restaurant Authenticated");
                    localStorage.setItem("username", user);
                   // CusEmail("Restaurant");
                    localStorage.setItem("isRestaurantAuthenticated", "true");
                    window.location.reload(false);
                    window.location.pathname ='/addFood'
                    

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
                    <input className='username' type= "text" onChange={(event) => { setUser(event.target.value);}} id="username" placeholder='Enter Username'/>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} id="password" name="password" className="password" placeholder="Enter Password" />         
        </div>
        <div className='userType'>
                    <button className='login-form-submit' onClick={() => {
          checkPass();
        }}>Login</button>
        </div>
        <p>Don't have an account? <Link to="/createAccount">Sign up</Link></p>
      </div>
      <div>
    
    </div>
    </div>
      
  );
    
}

export default Login;