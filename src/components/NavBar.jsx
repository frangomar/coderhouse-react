import React from 'react';
import '../assets/css/navBar.css';
import './CartWidget'
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <header>
        <div className="navbar">
            <a href='#'>
                <div className="logo-container">
                    <h1 className='logo'>INDRA</h1>
                </div>
            </a>
            <ul className='nav-links'>
                <li className='nav-items'><a href='#'>remeras</a></li>
                <li className='nav-items'><a href='#'>pantalones</a></li>
                <li className='nav-items'><a href='#'>buzos</a></li>
            </ul>
            <CartWidget/>
        </div>
        </header>
    )
}


export default NavBar;