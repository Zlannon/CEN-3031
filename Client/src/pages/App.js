import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './createAccount'
import Login from './login'
import Home from './home';
import Navbar from './navbar';
import AddFood from './addFood';
import FoodList from './foodList';
import UserClaims from './userClaims'
import RestaurantClaims from './restaurantClaims'
import ClaimFood from './claimFood'


//For routing the pages in the navigation bars
function App() {
    let body = (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createAccount" element={<CreateAccount />} />

                <Route path="/login" element={<Login />} />
                <Route path="/addFood" element={<AddFood />} />
                <Route path="/foodList" element={<FoodList />} />
                <Route path="/userClaims" element={<UserClaims />} />
                <Route path="/restaurantClaims" element={<RestaurantClaims />} />
                <Route path="/claimFood" element={<ClaimFood />} />
            </Routes>
        </BrowserRouter>
    )

    //check if the user has enabled darkmode or not and adjust the body of the app respectively
    if (localStorage.getItem("darkmode") == "true") {
        return (
            <div id='App' className='dark'>
                {body}
            </div>
        )
    }
    else {
        return <div id='App'>
            {body}
        </div>
    }
}

export default App;