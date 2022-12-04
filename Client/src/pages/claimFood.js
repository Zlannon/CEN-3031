
import { React, useState,} from "react";
import Axios from "axios"
import "./claimFood.css"


function ClaimFood() {

    const [ID, setID] = useState("");
    const date = new Date();
    const time = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() % 12 + ":" + date.getMinutes();

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

    return (
        <div className="claimFood">
            <div className='claimFoodBox'>
                <div className='claimFoodHeader'>
                    <h3>Claim Food</h3>
                </div>

                <div className='inputs'>
                    <h3>Enter the ID of the food you wish to claim: </h3>
                    <input className='ID' onChange={(event) => { setID(event.target.value) }} type="text" />

                </div>
                <button className='claimFoodSubmit' onClick={claim}>Claim</button>
            </div>
            <div>

            </div>
        </div>
    );


}

export default ClaimFood;



