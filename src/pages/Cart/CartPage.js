import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { cartRoute } from '../../components/routes';
import { privateRoute } from '../../components/routes';
import ProtectedRoute from '../../reducer/ProtectedRoute';
import NavPay from '../Pay/NavPay';
const CartPage = () => {
    return (
        <div>
            <NavPay />
            <Routes>
                {cartRoute.map((route, index) => {
                    const Component = route.component;
                    return <Route path={route.path} element={<Component />}></Route>;
                })}
                {privateRoute.map((route, index) => {
                    const Component = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <ProtectedRoute>
                                    <Component />
                                </ProtectedRoute>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
};

export default CartPage;
