
import { React, useState,} from "react";
import Axios from "axios"


function ClaimFood() {

    const [ID, setID] = useState("");
    const date = new Date();
    // get the current date and time and store it
    const time = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() % 12 + ":" + date.getMinutes();


    
    /*Stores username of the user that claimed the food, name of the food, the time it was claimed and the 
    restaurant that the food belongs to and inserts it into the Restaurant claims table so that the restaurant can see the 
    see which customer is picking up which food on their claims page*/
    const claim = () => {
        Axios.get("http://localhost:3001/search4", {
            params: {
                id: ID
            }
        }).then((response) => {
            Axios.get("http://localhost:3001/insert3", {
                params: {
                    username: localStorage.getItem("username"),
                    name: response.data[0].name,
                    time: time,
                    restaurant: response.data[0].creator,
                }
            })
        })

    /*Stores  name of the food, the time it was claimed, address and name of the restaurant that the food belongs to and 
    inserts it into the User claims table so that the user can see their current and previous claims on their
    'Your claims' page*/
        Axios.get("http://localhost:3001/search4", {
            params: {
                id: ID
            }
        }).then((response) => {
            Axios.get("http://localhost:3001/insert4", {
                params: {
                    username: localStorage.getItem("username"),
                    name: response.data[0].name,
                    time: time,
                    address: response.data[0].address,
                    restaurant: response.data[0].restaurant,
                }
            }).then((response) => {
                Axios.get("http://localhost:3001/delete4", {
                    params: {
                        id: ID
                    }
                })
            });
        })
    }

    // HTML of Claim Food page. The user enters the id of the Food they want to claim and on submit calls the claims function
    return (
        <main>
            <div className='claimBox'>
                <h3>Claim Food</h3>
                <h3>Enter the ID of the food you wish to claim: </h3>
                <input className='inputBox' onChange={(event) => { setID(event.target.value) }} type="text" />
                <button className='submit' onClick={claim}>Claim</button>
            </div>
        </main>
    );


}

export default ClaimFood;



