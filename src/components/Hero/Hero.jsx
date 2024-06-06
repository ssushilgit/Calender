import React from 'react';
import './Hero.css';
import dark_arrow from '../../components/assets/dark-arrow.png'
import { Link as RouterLink } from 'react-router-dom'
const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-content">
                <h1>One platform to streamline all workflows</h1>
                <p>Simplify event planning with our streamlined Event Management System.</p>
                <div className="hero-buttons">
                    <RouterLink to="/login">

                        <button className="get-started">Get started <img src={dark_arrow} alt="" />  </button>

                    </RouterLink>

                    <button className="learn-more">Learn more</button>
                </div>
            </div>

        </div>
    );
}

export default Hero;