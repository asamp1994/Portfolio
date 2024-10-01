// 
// File Name: Layout.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//
import React from 'react'; //Import react
import { Link } from 'react-router-dom'; //Import link for routing
import logo from '../src/assets/logo.png'; //Import logo image

//Layout Component

export default function Layout() {
    return (
    
    <>
        <h1>My Portfolio</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | 
            <Link to="/services">Services</Link>| <Link to="/project">Project</Link>| 
            <Link to="/contact">Contact</Link>
        </nav>
        
        <hr/>
    </>
);
}
