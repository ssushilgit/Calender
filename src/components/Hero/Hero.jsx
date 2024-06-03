import React from 'react';
import './Hero.css';
// import hero_img1 from '../../assets/hero-img1.png'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-content">
                <h1>One platform to streamline all workflows</h1>
                <p>Simplify event planning with our streamlined Event Management System.</p>
                <div className="hero-buttons">
                    <button className="get-started">Get started </button>
                    <button className="learn-more">Learn more</button>
                </div>
            </div>
           
        </div>
    );
}

export default Hero;
