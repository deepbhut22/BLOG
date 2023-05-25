import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='nav'>
            <h1><Link style={{textDecoration:'none',color:"black"}} to="/">Blog</Link></h1>
            <ul style={{display:'flex',listStyleType:'none'}}>
                <li><Link style={{textDecoration:'none',color:"black"}} to="/login">Login</Link></li>
                <li><Link style={{textDecoration:'none',color:"black"}} to="/register">Register</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;