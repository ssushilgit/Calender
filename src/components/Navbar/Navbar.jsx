import React, { useEffect, useState } from 'react'
import './Navbar.css'
import dark_arrow from '../assets/dark-arrow.png'
import menu_icon from '../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        setMobileMenu(!mobileMenu);
    }

    const [sticky, setSticky] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <h3>
                <ScrollLink to="hero" smooth={true} offset={-500} duration={500}> Softech </ScrollLink>
            </h3>
            
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <ScrollLink to="hero" smooth={true} offset={-500} duration={500}>Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="features-container" smooth={true} offset={-290} duration={500}>Features</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="faq-container" smooth={true} offset={-270} duration={500}>FAQs</ScrollLink>
                </li>
                <li>
                    <RouterLink to="/login">
                        <button className='btn'>
                            Log in <img src={dark_arrow} alt="" />
                        </button>
                    </RouterLink>
                </li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
