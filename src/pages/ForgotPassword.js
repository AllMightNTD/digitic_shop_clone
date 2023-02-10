import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
    return (
        <>
            <Meta title={'Forgot-Pass'}></Meta>
            <BreadCrumb title="Forgot-Pass" />
            <div className="login-wrapper py-5 home-wrapper-two">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center">Reset Your Password</h3>
                            <p className=" text-center my-2 mb-3">We will sen you an email to reset your password</p>
                            <form action="" className="mb-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                    ></input>
                                </div>
                            </form>
                            <div className="d-flex flex-column gap-15 align-items-center justify-content-center">
                                <button className="btn-buy">Log in</button>
                                <Link to="/login" className="">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
