import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ProtectedRoute = ({ children }) => {
    const userData = useSelector((state) => state.user.user);
    const isAuthenticated = !!userData;
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
