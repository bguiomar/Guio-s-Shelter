import React, { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import AdminView from "./views/AdminView";
import UserView from "./views/UserView";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  
  return (<>
  
    <Navbar/>  
    <Routes>
          {/* <Route path="/" element={<Home />} className="nav-item"/> */}
          <Route path="/adminview" element={<AdminView/>}/>
          <Route path="/userview" element={<UserView/>}/>
      </Routes>
   
   
    </>
  );
}


