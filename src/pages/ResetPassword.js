import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPassword } from '../actions/userAction';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const ResetPassword = () => {
    const [values, setValues] = useState({});
    const [erros, setErros] = useState({});
    const dispatch = useDispatch();

    const validationReset = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.verificationcode) {
            errors.verificationcode = 'Verification code is required';
        }
        if (!values.newPassword) {
            errors.newPassword = 'Password is required';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        }
        if (values.newPassword !== values.confirmPassword) {
            errors.confirmPassword = 'Password and confirm password must match';
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validationReset(values);
        if (Object.keys(validationErrors).length === 0) {
            dispatch(resetPassword(values.email, values.verificationcode, values.newPassword));
        } else {
            setErros(validationErrors);
        }
    };

    const handleInput = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
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
                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            name="email"
                                            onChange={handleInput}
                                            className="form-control"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.email}</p> : <></>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="VerifyCation Code"
                                            name="verificationcode"
                                            onChange={handleInput}
                                            className="form-control"
                                        ></input>
                                        {erros ? (
                                            <p className="text-danger fst-italic">{erros.verificationcode}</p>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password new"
                                            name="newPassword"
                                            onChange={handleInput}
                                            className="form-control"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.newPassword}</p> : <></>}
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Confirm password"
                                            onChange={handleInput}
                                            name="confirmPassword"
                                        ></input>
                                        {erros ? (
                                            <p className="text-danger fst-italic">{erros.confirmPassword}</p>
                                        ) : (
                                            <></>
                                        )}
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
