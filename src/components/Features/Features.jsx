import React from 'react'
import './Features.css'
import { useContext } from 'react';
import { FeaturesContext } from '../../context/FeaturesContext';
const Features = () => {

    const {featuresData} = useContext(FeaturesContext)
    
    return (
        <div className="features-container container">
            {featuresData.map((feature, index) => (
                <div className="feature-item " key={index}>
                    <div className="feature-icon">
                        <img src={feature.icon} alt=''/>
                    </div>
                    <div className="feature-content">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Features