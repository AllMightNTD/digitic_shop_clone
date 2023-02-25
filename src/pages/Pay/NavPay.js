import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../components/Child Component/Container';
const NavPay = () => {
    return (
        <Container className="navPay-wrapper py-4 home-wrapper-two">
            <div className="row">
                <div className="col-12">
                    <div className="navpay-inner">
                        <h3 className="fw-normal mb-3 website-name">DigiTic</h3>
                        <ul className="mb-0 d-flex gap-15 ps-0">
                            <li className="breadcrumb-item">
                                <NavLink to="/cart/home">Cart</NavLink>
                            </li>
                            <li className="breadcrumb-item">
                                <NavLink to="/cart/info">Information</NavLink>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <NavLink to="/cart/shipping">Shipping</NavLink>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <NavLink to="/">Payment</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NavPay;
