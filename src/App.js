import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Homepage/Home';
import LoginPage from './Pages/LoginPage';
import Registerpage from './Pages/register';


function App() {
  return (
    <div> 
      <Router>
        <Routes>
           <Route path="/"  element={<Home />} />
           <Route path="/LoginPage"  element={<LoginPage />} />
           <Route path="/registerpage"  element={<Registerpage />} />
           
           
        </Routes>
      </Router> 
   </div>
  );
}
export default App