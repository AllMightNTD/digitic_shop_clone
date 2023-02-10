import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAutencation = true;
    if (!isAutencation) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
