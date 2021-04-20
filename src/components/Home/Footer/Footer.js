import React from 'react';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Address</h4>
                        <p>Chandpur, Chittagong <br/> Bangladesh</p>
                        <h5>Support Number</h5>
                        <p>01836883501</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Quick Links</h4>
                        <p className="font-weight-bold">
                            <a href="#about" className="text-white text-decoration-none">About</a> <br/>
                            <a href="#service" className="text-white text-decoration-none">Service</a> <br/>
                            <a href="#review" className="text-white text-decoration-none">Review</a> <br/>
                            <a href="#team" className="text-white text-decoration-none">Our Team</a> <br/>
                            <a href="#contact" className="text-white text-decoration-none">Contact</a> <br/>              
                        </p>
                    </div>
                    <div className="col-md-3">
                    <h4>Our Services</h4>
                        <p className="font-weight-bold">
                            <a href="#service" className="text-white text-decoration-none">House Cleaning</a> <br/>   
                            <a href="#service" className="text-white text-decoration-none">Office Cleaning</a> <br/>         
                            <a href="#service" className="text-white text-decoration-none">Tank Cleaning</a> <br/>         
                            <a href="#service" className="text-white text-decoration-none">Furniture Cleaning</a> <br/>         
                        </p>
                    </div><div className="col-md-3">
                        <h4>Working Hours</h4>
                        <ul class="working-hours">
							<li><span>Monday</span> : 8AM - 6AM</li>
							<li><span>Tuesday</span> : 8AM - 6AM</li>
							<li><span>Wednesday</span> : 8AM - 6AM</li>
							<li><span>Thursday - Friday </span> : 8AM - 6AM</li>
							<li><span>Sunday</span> : Closed</li>
						</ul>
                    </div>
                </div>
            </div>
            <hr className="bg-white"/>
            <div className="text-center">
                <ul className="social-media list-inline">
                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                </ul>
                <p className="text-white">Copyright {(new Date()).getFullYear()} All Rights Reserved | Designed by <span className="text-color">Mohammad Mahbubul Alam</span></p>
            </div>
        </footer>
    );
};

export default Footer;