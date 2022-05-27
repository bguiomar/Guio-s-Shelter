import React, { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import AdminView from "./views/AdminView";
import UserView from "./views/UserView";
import Home from "./views/Home";


import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  
  return (<>
  
    <Navbar/>  
     <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/adminview" element={<AdminView/>}/>
          <Route path="/userview" element={<UserView/>}/>
      </Routes>
   
   
    </>
  );
}


