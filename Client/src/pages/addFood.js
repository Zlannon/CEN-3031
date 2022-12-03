
import { React, useState } from "react";
import Axios from "axios"
import "./addFood.css"


function AddFood() {

    const [name, setName] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [address, setAddress] = useState("");
    const [allergen, setAllergen] = useState("");


    const addFood = () => {
        Axios.get("http://localhost:3001/count").then((response) => {
            Axios.get("http://localhost:3001/insert2", {
                params: {
                    id: response.data[0].count,
                    name: name,
                    restaurant: restaurant,
                    address: address,
                    allergen: allergen,
                    category: document.getElementById("selectType").value,
                    creator: localStorage.getItem("username"),
                }
            }).then(() => {
                alert("inserted")
            });
        })
    }

    return (
        <div className="addFood">
            <div className='addFoodBox'>
                <div className='addFoodHeader'>
                    <h3>Add Food</h3>
                </div>

                <div className='inputs'>
                    <h3>Food: </h3>
                    <input className='food' onChange={(event) => { setName(event.target.value) }} type="text" />
                    <h3>Restaurant: </h3>
                    <input className='restaurant' onChange={(event) => { setRestaurant(event.target.value) }} type="text" />
                    <h3>Address: </h3>
                    <input className='address' onChange={(event) => { setAddress(event.target.value) }} type="text" />
                    <h3>Allergy</h3>
                    <input className='allergy' onChange={(event) => { setAllergen(event.target.value) }} type="text" />

                </div>
                <h3>Category: </h3>
                <select name="userType" id="selectType"  >
                    <option value="meat" >Non-vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                </select>

                <button className='addFoodSubmit' onClick={addFood}>Add</button>
            </div>
            <div>

            </div>
        </div>
    );


}

export default AddFood;



