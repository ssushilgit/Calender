import React, { useState } from 'react'
import './Navbar.css'
import dark_arrow from '../../assets/dark-arrow.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
        <nav className='container'>
            <h3><a href="/"> Softech </a></h3>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/features">Features</a>
                </li>
                <li>
                    <a href="/faqs">FAQs</a>
                </li>
                <li>
                    <a href="/signin"><button  className='btn'>Sign in <img src={dark_arrow} alt="" /></button></a>
                </li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>

        </nav>
    )
}

export default Navbar