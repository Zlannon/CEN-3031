import React from 'react';
import "./App.css"

import "./App2.css"

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateAccount from './createAccount'
import Login from './login'
import Home from './home';
import Navbar from './navbar';
import AddFood from './addFood';
import FoodList from './foodList';
import UserClaims from './userClaims'
import RestaurantClaims from './restaurantClaims'




import CF from './claimFood'


const DATA = [

 
];
function App() {
  

  return (
    <div className='App'>

      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          
          <Route path="/claimFood" element={<CF tasks={DATA}/>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/addFood" element={<AddFood/>}/>
          <Route path="/foodList" element={<FoodList/>}/>
          <Route path="/userClaims" element={<UserClaims/>}/>
          <Route path="/restaurantClaims" element={<RestaurantClaims/>}/>





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;