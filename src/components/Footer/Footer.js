import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // footer
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className="w-25 mb-2" src="https://www.seekpng.com/png/full/330-3304606_clip-art-freeuse-cricket-drawing-royalty-free-cartoon.png" alt="" />
                        <p className="mb-1"><small>Bengal Cricket Academy-Khulna</small></p>
                        <p className="mb-1"><small>Phone: 041-812200</small></p>
                        <p><small>Circuit House, K.D. Ghos Rd</small></p>
                    </div>
                    <div className="col-md-3 support">
                        <h2 className="mb-4">Support</h2>
                        <p className="mb-2"><small>Help Center</small></p>
                        <p className="mb-2"><small>Get Started</small></p>
                        <p><small>Contact Us</small></p>
                    </div>
                    <div className="col-md-3 about-us">
                        <h2 className="mb-4">About Us</h2>
                        <p className="mb-2"><small>About Us</small></p>
                        <p className="mb-2"><small>Terms Of Use</small></p>
                        <p><small>Privacy Policy</small></p>
                    </div>
                    <div className="col-md-3">
                        <small className="fw-bold">Our Online Payment Methods:</small>
                        <img className="w-100 mt-2 rounded" src="https://i.pinimg.com/originals/a7/bc/3b/a7bc3bd2b2f70e415d41eb91d68f64ee.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;