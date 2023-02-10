import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPay from './NavPay';
const Layout = () => {
    return (
        <>
            <NavPay />
            <Outlet />
        </>
    );
};

export default Layout;
