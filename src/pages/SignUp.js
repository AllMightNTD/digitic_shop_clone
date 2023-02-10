import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <>
            <Meta title={'Sign-Up'}></Meta>
            <BreadCrumb title="Sign-Up" />
            <div className="login-wrapper py-5 home-wrapper-two">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card">
                                <h3 className="text-center text-dark mb-3">Create Account</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="first-name"
                                            className="form-control"
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="last-name"
                                            className="form-control"
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Mobile number"
                                            name="email"
                                            className="form-control"
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                        ></input>
                                    </div>
                                    <div>
                                        <div className="d-flex gap-30 align-items-center justify-content-center">
                                            <button className="btn-buy">Create</button>
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

export default SignUp;
