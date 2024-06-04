import React from 'react';
import './Footer.css';
import facebook_logo from '../../components/assets/facebook-logo.png'
import instagram_logo from '../../components/assets/instagram-logo.png'
import x_logo from '../../components/assets/x-logo.png'
import whatsapp_logo from '../../components/assets/whatsapp-logo.png'

const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-section section-padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4>Solutions</h4>
                        <a href="/"><p>Hosting</p></a>
                        <a href="/"><p>Data Service</p></a>
                        <a href="/"><p>Uptime Monitoring</p></a>
                        <a href="/"><p>Enterprise Service</p></a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Support</h4>
                        <a href="/"><p>Pricing</p></a>
                        <a href="/"><p>Documentation</p></a>
                        <a href="/"><p>Guides</p></a>
                        <a href="/"><p>API Reference</p></a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Company</h4>
                        <a href="/"><p>About</p></a>
                        <a href="/"><p>Blog</p></a>
                        <a href="/"><p>Jobs</p></a>
                        <a href="/"><p>Press</p></a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Legal</h4>
                        <a href="/"><p>Claim</p></a>
                        <a href="/"><p>Privacy</p></a>
                        <a href="/"><p>Terms</p></a>
                    </div>
                </div>
                <div className="footer-links-div">
                    <h4>Connect with us</h4>
                    <div className="social-media">
                        <p><img src={facebook_logo} alt="" /></p>
                        <p><img src={instagram_logo} alt="" /></p>
                        <p><img src={x_logo} alt="" /></p>
                        <p><img src={whatsapp_logo} alt="" /></p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Softech. All rights reserved.
                    </p>
                </div>
                <div className="footer-below-links">
                    <a href="/">
                        <div>
                            <p>Terms & Conditions</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <p>Privacy</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <p>Security</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <p>Cookie Declaration</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Footer;
