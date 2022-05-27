import React from "react";
import {NavLink} from 'react-router-dom';
//import '.Navbar.css';

function Navbar(){


    return(
        <div>
             <nav className="navbar navbar-dark p-3 mb-2 bg-info">
                <div className="container-fluid">
                    <img src="./photos/logos3.jpeg" alt="logo animal shelter" width="50"/>
                    <NavLink to="/adminview" className={"text-dark"}> AdminView</NavLink >
                    <NavLink to="/userview" className={"text-dark"}>UsersView</NavLink >
                </div>
        </nav>
        </div>
       
        
    )
}
export default Navbar;

 