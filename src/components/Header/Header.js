import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import compare from '../../images/compare.svg';
import wishlist from '../../images/wishlist.svg';
import user from '../../images/user.svg';
import cart from '../../images/cart.svg';
import menu from '../../images/menu.svg';
import Image from '../Image';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/userAction';
import axios from 'axios';
const Header = () => {
    const userData = useSelector((state) => state.user.user);
    console.log(userData);
    const dispatch = useDispatch();
    const handleLogout = () => {
        // await axios
        //     .get('http://localhost:5000/api/user/logout')
        //     .then((res) => {
        //         console.log(res.data);
        //         localStorage.removeItem('user');
        //         localStorage.removeItem('token');
        //         dispatch({ type: 'LOGOUT_SUCCESS' });
        //     })
        //     .catch((err) => {
        //         throw new Error(err.message);
        //     });
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <>
            <header className="header-top-strip py-3">
                <div className="px-3">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white  mb-0 ">
                                {' '}
                                Hotline :
                                <a className="text-white" href="tel: + 0866942653">
                                    0866942653
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header-upper py-3">
                <div className="px-3">
                    <div className="row">
                        <div className="col-2">
                            <h2 className="fw-normal">
                                <Link className="fw-bold text-white" to="/">
                                    Digitic Store
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group ">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search product here..."
                                    aria-label="Search product here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text" id="basic-addon2">
                                    <BsSearch className="fs-4" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex justify-content-end gap-40 align-items-center">
                                <div>
                                    <Link
                                        to="/compare-product"
                                        className="links-icons d-flex align-items-center gap-10 text-white"
                                    >
                                        <Image src={compare} alt="compare"></Image>
                                        <p className="fs-7 mb-0">
                                            Compare <br /> Product
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    {' '}
                                    <Link
                                        to="/wish-list"
                                        className="links-icons d-flex align-items-center gap-10 text-white"
                                    >
                                        <Image src={wishlist} alt="wishlist"></Image>
                                        <p className=" fs-7 mb-0">
                                            Favourite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                {userData ? (
                                    <Tippy
                                        placement="bottom"
                                        interactive
                                        content={
                                            <ul className="box-tippy px-0 py-0 bg-white list-unstyled d-flex flex-column">
                                                <li className="px-3 py-3">
                                                    <Link to="/store" className=" text-dark">
                                                        Đơn mua của toi
                                                    </Link>
                                                </li>
                                                <li className="px-3 py-3">
                                                    <Link to="#" className="text-dark ">
                                                        Tài khoản của toi
                                                    </Link>
                                                </li>
                                                <li onClick={handleLogout} className="px-3 py-3 ">
                                                    Đăng xuất
                                                </li>
                                            </ul>
                                        }
                                    >
                                        <div className="links-icons d-flex align-items-center gap-10 text-white">
                                            <Image src={user} alt="user"></Image>

                                            <p className=" fs-7 mb-0">
                                                {userData.user.firstname + ' ' + userData.user.lastname}
                                            </p>
                                        </div>
                                    </Tippy>
                                ) : (
                                    <div>
                                        <Link
                                            to="/login"
                                            className="links-icons d-flex align-items-center gap-10 text-white"
                                        >
                                            <p className=" fs-7 mb-0">
                                                Login
                                                <br />
                                                My Account
                                            </p>
                                        </Link>
                                    </div>
                                )}
                                <div>
                                    {' '}
                                    <Link
                                        to="/cart/home"
                                        className="links-icons d-flex align-items-center gap-10 text-white"
                                    >
                                        <Image src={cart} alt="cart"></Image>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark ">0</span>
                                            <p className="mb-0 ">$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-bottom py-2">
                <div className="px-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <Image src={menu} style={{ height: '22px', width: '22px' }}></Image>
                                            <span className="me-5 fs-7 d-inline-flex">Shop category</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item fs-6 text-white" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item fs-6 text-white" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item fs-6 text-white" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links ms-4">
                                    <div className="d-flex align-items-center gap-35">
                                        <NavLink className="text-white" to="/">
                                            Home
                                        </NavLink>
                                        <NavLink className="text-white" to="/store">
                                            Our Store
                                        </NavLink>
                                        <NavLink className="text-white" to="/blogs">
                                            Blogs
                                        </NavLink>
                                        <NavLink className="text-white" to="/contact">
                                            Contact
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
