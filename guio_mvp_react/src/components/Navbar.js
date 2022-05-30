import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar(){


    return(
      <div className="navbar1">
       <div className="container ">
       <header className="d-flex justify-content-center py-3">
         <ul className="nav nav-pills navbar2">
            <li> <img src="./photos/logos3.jpeg" alt="logo animal shelter" height="50"/></li>
           <li className="nav-item"><NavLink to="/adminview" className={"text-white nav-link"}> AdminView</NavLink ></li>
           <li className="nav-item"><NavLink to="/userview" className={"text-white nav-link"} aria-current="page">UsersView</NavLink ></li>
         </ul>
       </header>
     </div>
     </div>   
    )
}
export default Navbar;

 