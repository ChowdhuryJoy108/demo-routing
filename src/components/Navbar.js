import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    let activeStyle={
        fontWeight: "bold",
        color: "red"
       }
    return (
    <nav>
          <ul>
            <li>
                <NavLink to="/"  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
                 </li>

            <li>
                <NavLink to="/about"  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >About us</NavLink>
                </li>
            <li>
                <NavLink to="/contact"  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >Contact us</NavLink>
                </li>
          </ul>
    </nav>
    );
};

export default Navbar;