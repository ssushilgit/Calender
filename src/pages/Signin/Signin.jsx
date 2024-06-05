import React from 'react'
import user_icon from '../../components/assets/person.png'
import email_icon from '../../components/assets/email.png'
import password_icon from '../../components/assets/password.png'
import './Signin.css'
const Signin = () => {


    return (
        <div className='signin'>
            <div className="header">
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
                    Login
                </span>
            </div>
        </div>
    )
}

export default Signin