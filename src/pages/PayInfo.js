import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoIosArrowBack } from 'react-icons/io';
import tab from '../images/tab.jpg';
import { NavLink } from 'react-router-dom';
import Container from '../components/Container';

const PayInfo = () => {
    let activeStyle = {
        textDecoration: 'underline',
    };

    let activeClassName = 'underline';
    return (
        <>
            <Container className="pay-wraper  home-wrapper-two pb-5">
                <div className="row align-items-start">
                    <div className="col-7">
                        <div className="pay-left-data pb-4">
                            {/* */}
                            <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb"></nav>
                            <h5 className="mb-0 mt-4">Contact Information</h5>
                            <p className="mt-3">Navdeep Dahiya (monud0232@gmail.com)</p>
                            <form action="" className="form-floating d-flex gap-15 flex-wrap justify-content-between">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Emails me with news and offers
                                    </label>
                                </div>
                                <div className="w-100 mt-4">
                                    <h5 className="mb-0">Shipping Address</h5>
                                </div>
                                <div className="w-100">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Use a new address</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="w-100">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>United States</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1 form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="First name"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        First name(optional)
                                    </label>
                                </div>
                                <div className="flex-grow-1 form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="Last name"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        Last name
                                    </label>
                                </div>
                                <div className="w-100 form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="Address"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        Address
                                    </label>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Apartment , suite , ect..."
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="flex-grow-1 form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="City"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        City
                                    </label>
                                </div>
                                <div className="flex-grow-1 form-floating">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="floatingInputValue" className="text-secondary">
                                        State
                                    </label>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="Zip code"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        Zip code
                                    </label>
                                </div>
                                <div className="w-100 py-3 d-flex justify-content-between align-items-center">
                                    <Link to="/cart/home" className="text-dark">
                                        <IoIosArrowBack className="mb-1 me-2" />
                                        Return to Cart
                                    </Link>
                                    <Link className="btn-buy bg-danger">Continue to Shipping</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5 ps-5">
                        <div className="border-text py-4">
                            <div className="d-flex  gap-10 mb-2 justify-content-between">
                                <div className="w-75 d-flex gap-15">
                                    <div className="w-25 position-relative">
                                        <span
                                            style={{ top: '-10px', right: '-5px' }}
                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                        >
                                            2
                                        </span>
                                        <img
                                            src={tab}
                                            style={{
                                                boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.1)',
                                                borderRadius: '10px',
                                            }}
                                            className="img-fluid"
                                            alt="tab"
                                        ></img>
                                    </div>
                                    <div className="">
                                        <h5 className="total-price">Tab 2</h5>
                                        <p className="total-price">#ABACS/</p>
                                    </div>
                                </div>
                                <div className="total">$100.00</div>
                            </div>
                        </div>
                        <div className="border-text py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Shipping</p>
                                <p className="total-price">$100.00</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Subtotal</p>
                                <p className="total-price">$100.00</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between py-4 align-items-center">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">$100000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PayInfo;
