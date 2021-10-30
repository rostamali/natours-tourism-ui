import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div id="footer-section">
            <div className="container">
                <div className="footer-logo">
                    <Link className="footer-logo" to="/">Natours</Link>
                    <p className="subtitle">
                        Our mission is to make everyone able to feel the attachement back to nature
                        <br /> 
                        by providing an unforgettable experience.
                    </p>
                </div>
                <div className="footer-bottom mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12 text-md-start text-center">
                            <p className="subtitle">
                                &copy; 2021 Natours. All Right Reserved by Rostam.
                            </p>
                        </div>
                        <div className="col-md-6 col-12 text-md-end text-center mt-2">
                            <NavLink className="navbar-link" to="/">Terms & Agreements</NavLink>
                            <NavLink className="navbar-link" to="/">Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;