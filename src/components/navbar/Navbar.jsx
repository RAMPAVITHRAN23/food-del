import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'; // ✅ Correct Import
import { useState } from 'react';

const Navbar = () => {

    const [menu,setMenu] = useState("menu");

    return (
        <div className="Navbar">
            <img src={assets.logo} alt="logo" className="logo" />
            <ul className="Navbar-menu">
                <li onClick={()=>setMenu("home")} className= {menu=='home'?"active":""}>Home</li>
                <li onClick={()=>setMenu("menu")}className={menu=='menu'?"active":""}>Menu</li>
                <li onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?"active":""}>Mobile-app</li>
                <li onClick={()=>setMenu("contact us")}className={menu=="contact us"?"active":""}>Contact Us</li>
            </ul>
            <div className="Navbar-right">
            <img src={assets.search_icon} alt="search" className='search_icon' />
                <div className="Navbar-search-icon">
                    <img src= {assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button className='Navbar-button'>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
