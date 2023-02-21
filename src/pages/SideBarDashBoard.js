import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarDashBoard = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                    href="/"
                    className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                    className="nav nav-pills gap-15 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu"
                >
                    <li className="nav-item">
                        <NavLink className="ms-1" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="ms-1" to="/dashboard/create-product">
                            Create Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="ms-1" to="/dashboard/list-products">
                            List Products
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBarDashBoard;
