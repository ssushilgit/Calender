import React from 'react';
import user_icon from '../../components/assets/person.png';
import email_icon from '../../components/assets/email.png';
import password_icon from '../../components/assets/password.png';
import register_image from '../../components/assets/register.svg'; // Add your image path here
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    return (
        <div className='signin-container'>
            <div className='header-title'>
                Calendar Management System
            </div>
            <div className='main-content-signup'>
                <div className='image-section'>
                    <img src={register_image} alt="Signup" />
                </div>
                <div className='signin'>
                    <div className="header-signin">
                        <div className="text">Sign Up</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email ID' />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' />
                        </div>
                    </div>

                    <div className="submit-container">
                        <div className="submit">Submit</div>
                    </div>

                    <div className="forgot-password">
                        Already have an account? 
                        <span>
                           <Link to='/login'> Login </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
