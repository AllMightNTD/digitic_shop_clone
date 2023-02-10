import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const DefaultLayout = ({ children }) => {
    return (
        <div className="wrapper-default">
            <Header />
            <div className="container-default">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
