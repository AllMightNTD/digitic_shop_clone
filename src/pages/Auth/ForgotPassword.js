import React from 'react';
import BreadCrumb from '../../components/Child Component/BreadCrumb';
import Meta from '../../components//Child Component/Meta';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { forgotPass } from '../../actions/userAction';
import { useDispatch } from 'react-redux';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPass(email));
    };
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
                            <form action="" onSubmit={handleSubmit} className="mb-4">
                                <div>
                                    <input
                                        value={email}
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="mt-4 d-flex align-items-center justify-content-center">
                                    <button type="submit" className="btn-buy">
                                        Send Code to Email
                                    </button>
                                </div>
                            </form>
                            <div className="d-flex flex-column gap-15 align-items-center justify-content-center">
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
