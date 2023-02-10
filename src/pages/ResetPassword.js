import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const ResetPassword = () => {
    return (
        <>
            <Meta title={'Login'}></Meta>
            <BreadCrumb title="Login" />
            <div className="login-wrapper py-5 home-wrapper-two">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card">
                                <h3 className="text-center text-dark mb-3">Creat Password New</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password new"
                                            name="password-new"
                                            className="form-control"
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Confirm password"
                                            name="Confirm-password"
                                        ></input>
                                    </div>
                                    <div>
                                        <div className="d-flex gap-30 align-items-center justify-content-center">
                                            <button type="submit" className="btn-buy">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
