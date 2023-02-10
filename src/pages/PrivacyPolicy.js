import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={'Privacy Policy'}></Meta>
            <BreadCrumb title="Privacy Policy" />
            <div className="privacy-wrapper home-wrapper-two py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="privacy-inner-wrapper">
                                <div className="privacy-blogs mt-3 mb-4">
                                    <h3>The Standard Lorem Ipsum Passage</h3>
                                    <p className="mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                                <div className="privacy-blogs  mb-4 ">
                                    <h3>At Veros Eos Et Accusamus Et Lusto Odio Diginistamos</h3>
                                    <p className="mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                                <div className="privacy-blogs  mb-4">
                                    <h3>Certain Circumantence And Owing To The Claims Of The White</h3>
                                    <p className="mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                                <div className="privacy-blogs">
                                    <h3>Integer Units Laorest Nunc Of The Business Items</h3>
                                    <p className="mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
