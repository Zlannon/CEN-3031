
import { React, useState,} from "react";
import Axios from "axios"


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



