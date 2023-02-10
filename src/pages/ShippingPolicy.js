import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const ShippingPolicy = () => {
    return (
        <>
            {' '}
            <Meta title={'Shipping Policy'}></Meta>
            <BreadCrumb title="Shipping Policy" />
            <div className="privacy-wrapper home-wrapper-two py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="privacy-inner-wrapper"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingPolicy;
