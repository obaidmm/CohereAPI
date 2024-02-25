import React from "react";
import './NavBar.css';
import logo from './Pages/logo.jpeg';

const NavBar = ({NavBar}) => {
    return (
        <div className="navBar">
            <img src="" alt="Logo" />
            <ul>
                <li>Home</li>
                <li>Resources</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="searchBox">
                <input type="text" placeholder="Search"    />
                <button type="submit">Search</button>
            </div>
        </div>


    );
    }
export default NavBar