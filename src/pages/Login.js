import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Login = () => {
    return (
        <>
            <Meta title={'Login'}></Meta>
            <BreadCrumb title="Login" />
            <div className="login-wrapper py-5 home-wrapper-two">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card">
                                <h3 className="text-center text-dark mb-3">Login</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
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
                                        <Link to="/forgot-password" className="mb-3">
                                            Forgot Password
                                        </Link>
                                        <div className="d-flex gap-30 align-items-center justify-content-center">
                                            <button type="submit" className="btn-buy">
                                                Log in
                                            </button>
                                            <Link to="/sign-up" className="btn-buy sign-up">
                                                Sign Up
                                            </Link>
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

export default Login;
