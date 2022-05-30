import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar(){


    return(
      <div className="navbar1">
       <div className="container ">
       <header className="py-3">
         <ul className="nav nav-pills navbar2">
           <div clasName="d-flex justify-content-between">
             <div>
              <li> <img src="../../photos/logo3v2.png" alt="logo animal shelter" height="50"/></li>
              </div>
            <div>            
              <li className="nav-item"><NavLink to="/adminview" className={"text-white nav-link"}> AdminView</NavLink ></li>
              <li className="nav-item"><NavLink to="/userview" className={"text-white nav-link"} aria-current="page">UsersView</NavLink ></li>
            </div>

           </div>
         </ul>
       </header>
     </div>
     </div>   
    )
}
export default Navbar;

 