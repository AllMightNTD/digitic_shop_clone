import React from 'react';
import SideBarDashBoard from './SideBarDashBoard';
import { Routes, Route } from 'react-router-dom';
import { dashboardRouter } from '../../components/routes';
const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-start row">
                <SideBarDashBoard />
                <Routes>
                    {dashboardRouter.map((route, index) => {
                        const Component = route.component;
                        return <Route key={index} path={route.path} element={<Component />}></Route>;
                    })}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
