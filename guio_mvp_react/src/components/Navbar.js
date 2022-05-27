import React from "react";
import {NavLink} from 'react-router-dom';
//import '.Navbar.css';

function Navbar(){

    return(
        <nav className="navbar navbar-dark bg-primary">
            <ul>
                <li><NavLink to="/adminview">AdminView </NavLink ></li>
                <li><NavLink to="/userview">UsersView </NavLink ></li>
            </ul>
        </nav>
    )
}
export default Navbar;