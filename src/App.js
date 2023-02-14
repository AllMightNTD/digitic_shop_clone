import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './components/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
    return (
        <>
            {/* <Header />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Component = route.component;
                    return <Route path={route.path} element={<Component />}></Route>;
                })}
            </Routes>
            <Footer /> */}
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            // Khong co layout => default layout
                            const Page = route.component;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
