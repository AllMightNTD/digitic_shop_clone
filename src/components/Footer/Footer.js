import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub } from 'react-icons/bs';
import newletter from '../../images/newsletter.png';

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="px-3">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div className="footer-links d-flex flex-column">
                                <address className="fs-6 text-white ">Hnoi , Hai Ba Trung , Bach Mai</address>
                                <address className="fs-6 text-white">United States</address>
                                <a href="£" className="d-block mt-3 mb-1 text-white">
                                    0866942653
                                </a>
                                <a href="£" className="d-block mt-2 mb-0 text-white">
                                    dungnguyentien140602@gmail.com
                                </a>
                                <div className="social-icons d-flex align-items-center gap-30 mt-3">
                                    <a className="text-white fs-4">
                                        <BsGithub />
                                    </a>
                                    <a className="text-white fs-4">
                                        <BsInstagram />
                                    </a>
                                    <a className="text-white fs-4">
                                        <BsLinkedin />
                                    </a>
                                    <a className="text-white fs-4">
                                        <BsYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white mb-4"> Information</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link to="/term-of-services" className="text-white py-2 mb-1">
                                    Teams of Service
                                </Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white mb-4">Accounts</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Search</Link>
                                <Link className="text-white py-2 mb-1">About us</Link>
                                <Link className="text-white py-2 mb-1">Fag</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                                <Link className="text-white py-2 mb-1">Size Chat</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">HeadPhones</Link>
                                <Link className="text-white py-2 mb-1">Tablet</Link>
                                <Link className="text-white py-2 mb-1">Watch</Link>
                                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white mb-4">Our App</h5>
                            <div></div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={newletter} alt="newletters"></img>
                                <h3 className="mb-0 text-white">Sign up for NewsLetter</h3>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email..."
                                    aria-label="Your Email..."
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-text p-1 text-white" id="basic-addon2">
                                    Subscribe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()} ; Powered by Developer
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
