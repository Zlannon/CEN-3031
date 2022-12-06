import { React, useState } from "react";
import Axios from "axios"


//Add food page for restaurant to add unwanted food
function AddFood() {


    const [name, setName] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [address, setAddress] = useState("");
    const [allergen, setAllergen] = useState("");

    // add food data to backend database

    const addFood = () => {
        Axios.get("http://localhost:3001/count").then((response) => {
            Axios.get("http://localhost:3001/insert2", {
                params: {
                    id: response.data[0].count,
                    name: name,
                    restaurant: restaurant,
                    address: address,
                    allergen: allergen,
                    //get the category selected
                    category: document.getElementById("selectType").value,
                    //get the username of the restaurant that's logged in
                    creator: localStorage.getItem("username"),
                }
            }).then(() => {
                alert("inserted")
            });
        })
    }

    //HTML for the page
    return (
        <main>
            <div className='accountBox'>
                <h3>Add Food</h3>
                {/* input fields for food, restaurant, address, allergy and dropdown for category*/}
                {/* set name, restaurant, address, allergy in onChange event*/}

                <input
                    className='inputBox'
                    placeholder="Food Name"
                    onChange={(event) => { setName(event.target.value) }} type="text"
                />
                <input
                    className='inputBox'
                    placeholder="Restaurant Name"
                    onChange={(event) => { setRestaurant(event.target.value) }} type="text"
                />
                <input
                    className='inputBox'
                    placeholder="Address"
                    onChange={(event) => { setAddress(event.target.value) }} type="text"
                />
                <input
                    className='inputBox'
                    placeholder="Allergy"
                    onChange={(event) => { setAllergen(event.target.value) }} type="text"
                />

                <select name="userType"
                    id="selectType"
                    className="inputBox"
                >
                    <option value="Category" hidden>Category</option>
                    <option value="meat" >Non-vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                </select>
                {/* call addFood function to add the data collected to the database*/}
                <button className='submit' onClick={addFood}>Add</button>
            </div>
        </main>
    );


}

export default AddFood;