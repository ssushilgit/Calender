import React from 'react';
import user_icon from '../../components/assets/person.png';
import email_icon from '../../components/assets/email.png';
import password_icon from '../../components/assets/password.png';
import login_image from '../../components/assets/login.svg'; // Add your image path here
import { Link } from 'react-router-dom';
import './Login.css';

const Signin = () => {
    return (
        <div className='signin-container'>
            <div className='header-title'>
                Calendar Management System
            </div>
            <div className='main-content'>
                <div className='image-section'>
                    <img src={login_image} alt="Signup" />
                </div>
                <div className='signin'>
                    <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">

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
                        <div className="submit">
                            <Link to='/maindashboard'>
                                Login
                            </Link>
                        </div>
                    </div>

                    <div className="forgot-password">
                        Don't have an account?
                        <span>
                            <Link to='/signup'> Click Here!</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
