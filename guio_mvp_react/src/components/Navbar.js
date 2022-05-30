import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar(){


    return(
      <div className="navbar1">
       <div className="container ">
       <header className="row justify-content-center py-3">
         <div className="nav nav-pills">
            <div className="col-8"> <img  className="" src="../../photos/logo3v2.png" alt="logo animal shelter" height="50"/></div> 
           <div className="col-2 nav-item text-center"><NavLink to="/adminview" className={"text-white nav-link"}> AdminView</NavLink ></div>
           <div className="col-2 mx-10 nav-item text-center"><NavLink to="/userview" className={"text-white nav-link"} aria-current="page">UsersView</NavLink ></div>
         </div>
       </header>
     </div>
     </div>   
    )
}
export default Navbar;

 