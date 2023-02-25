import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/Child Component/BreadCrumb';
import Meta from '../../components//Child Component/Meta';
import { loginUser } from '../../actions/userAction';
import validationLogin from '../../actions/validationLogin';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMsg, setValidationMsg] = useState({});
    const dispatch = useDispatch();
    const refEmail = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
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
                                <h3 className="text-center text-dark mb-3">Login</h3>
                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            ref={refEmail}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
