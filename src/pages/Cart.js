import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import watch from '../images/watch.jpg';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import clock1 from '../images/clock_1.jpg';
import camera_checkOne from '../images/camera_check1.jpg';
import NavPay from './NavPay';
import Container from '../components/Container';
const Cart = () => {
    return (
        <>
            <Container className="cart-wrapper home-wrapper-two py-3">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-items-center">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className="w-25">
                                    <img src={clock1} className="img-fluid" alt="img-product"></img>
                                </div>
                                <div className="w-75">
                                    <p className="title">E Circle Men Smart Watch for Android Phone Night Black</p>
                                    <p className="color">Color</p>
                                    <p className="size">Size</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$100.00</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <input type="number" className="form-control w-25"></input>
                                <div className="d-flex align-items-center justify-content-center">
                                    <RiDeleteBinLine className="" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$100.00</h5>
                            </div>
                        </div>
                        <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className="w-25">
                                    <img src={camera_checkOne} className="img-fluid" alt="img-product"></img>
                                </div>
                                <div className="w-75 cart-details">
                                    <p className="title">OlymPus pen E-PL9 kit with 14 42 , EZ lens , camera</p>
                                    <p className="color">Color</p>
                                    <p className="size">Size</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$100.00</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <input type="number" className="form-control w-25"></input>
                                <div className="d-flex align-items-center justify-content-center">
                                    <RiDeleteBinLine className="" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$100.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/" className="btn-buy">
                                Continue to Shopping
                            </Link>
                            <div className="d-flex flex-column align-items-end gap-10">
                                <h4>Sub Total : $100.00</h4>
                                <p className="mb-0">Taxes and Shipping To You CheckOut Product and Box</p>
                                <Link to="/cart/info" className="btn-buy">
                                    Check out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
