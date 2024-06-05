import React from 'react'
import email_icon from '../../components/assets/email.png'
import password_icon from '../../components/assets/password.png'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div className='signin'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Submit</div>
            </div>
            <div className="forgot-password">
                Don't have an account?
                <span>
                    <Link to='/signup'> Click Here!</Link>
                </span>
            </div>
        </div>
    )
}

export default Login
