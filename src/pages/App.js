import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateAccount from './createAccount'
import Login from './login'
import Home from './home';
import Navbar from './navbar';
function App() {
  

  return (
    <div className='App'>

      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>

          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
