import React from 'react';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import tab from '../images/tab.jpg';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
const ShippingPay = () => {
    return (
        <div className="shipping-wrapper home-wrapper-two pb-5">
            <div className="px-3">
                <div className="row">
                    <div className="col-7">
                        <div className="shipping-inner-wrapper pe-5">
                            <div className="shipping-inner ps-3 pe-3 w-100 mb-5">
                                <div className="d-flex gap-30 w-100 justify-content-between align-items-center">
                                    <a className="contact">Contact</a>
                                    <input type="text" placeholder="dungnguyentien140602@gmail.com"></input>
                                    <a className="change">Change</a>
                                </div>
                                <div className="d-flex gap-30 w-100 jutify-content-between align-items-center">
                                    <a className="contact">Ship To</a>
                                    <input type="text" placeholder="Hai Ba Trung , Ha Noi"></input>
                                    <a className="change">Change</a>
                                </div>
                            </div>
                            <h5 className="fw-normal mb-4">Shipping method</h5>
                            <div className="shipping-inner ps-3 pe-3 w-100 mb-4">
                                <div className="d-flex gap-30 w-100 justify-content-between align-items-center">
                                    <div className="d-flex gap-10 align-items-center">
                                        <AiFillCopyrightCircle />
                                        <a className="contact">Standard</a>
                                    </div>
                                    <input type="text" placeholder="dungnguyentien140602@gmail.com"></input>
                                    <p className="change mb-0">$19.65</p>
                                </div>
                            </div>
                            <div className="w-100 py-3 d-flex justify-content-between align-items-center">
                                <Link to="/cart/info" className="text-dark">
                                    <IoIosArrowBack className="mb-1 me-2" />
                                    Return to Info
                                </Link>
                                <Link className="btn-buy bg-danger">Continue to Payment</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-text pb-4">
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
            </div>
        </div>
    );
};

export default ShippingPay;
