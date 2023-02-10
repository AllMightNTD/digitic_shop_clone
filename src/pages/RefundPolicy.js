import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const RefundPolicy = () => {
    return (
        <>
            <Meta title="Refund Policy"></Meta>
            <BreadCrumb title="Refund Policy" />
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

export default RefundPolicy;
