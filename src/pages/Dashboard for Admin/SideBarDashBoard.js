import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../components/Image';
import { TbBrandProducthunt } from 'react-icons/tb';
import { FaBlogger } from 'react-icons/fa';
import { SiBrandfolder } from 'react-icons/si';
import { RiCoupon4Line } from 'react-icons/ri';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';

const SideBarDashBoard = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
                <div className="sidebar_title d-flex align-items-center gap-10 py-3">
                    <BsLayoutTextSidebarReverse className="fs-3" />
                    <span className="fs-4">SideBar</span>
                </div>
                <ul className="list_nav w-100">
                    <NavLink
                        to="/dashboard/create-products"
                        className="w-100 text-white d-flex rounded-3 px-2 align-items-center gap-10 mt-2 py-2"
                    >
                        <TbBrandProducthunt className="fs-5" />
                        <span className="fs-6">Products</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/create-blog"
                        className="w-100 text-white d-flex rounded-3 px-2 align-items-center gap-10  mt-2 py-2"
                    >
                        <FaBlogger className="fs-5" />
                        <span className="fs-6">Blog</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/list-products"
                        className="w-100 text-white d-flex rounded-3 px-2 align-items-center gap-10  mt-2 py-2"
                    >
                        <SiBrandfolder className="fs-5" />
                        <span className="fs-6">Brand</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/update-blog"
                        className="w-100 text-white d-flex rounded-3 px-2 align-items-center gap-10  mt-2 py-2"
                    >
                        <RiCoupon4Line className="fs-5" />
                        <span className="fs-6">Coupon</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default SideBarDashBoard;
