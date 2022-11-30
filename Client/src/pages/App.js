import React from 'react';
import "./App.css"

import "./App2.css"

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateAccount from './createAccount'
import Login from './login'
import Home from './home';
import Navbar from './navbar'

import CF from './claimFood'


const DATA = [
  { id: "todo-0", name: "Sandwitch", completed: true },
  { id: "todo-1", name: "Coffee", completed: false },
  { id: "todo-2", name: "Soda", completed: false }
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;