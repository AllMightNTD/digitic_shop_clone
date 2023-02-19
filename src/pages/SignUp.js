import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import { useSelector } from 'react-redux';
import validation from '../actions/validationLogin';
const SignUp = () => {
    // const [firstname, setFirstname] = useState();
    // const [lastname, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [mobile, setMobilenumber] = useState();
    // const [password, setPassword] = useState();
    const [erros, setErros] = useState({});
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
    });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation(values);
        if (Object.keys(validationErrors).length === 0) {
            dispatch(registerUser(values.firstname, values.lastname, values.email, values.mobile, values.password));
        } else {
            setErros(validationErrors);
        }
    };
    console.log(erros);

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

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
                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="text"
                                            onChange={handleInput}
                                            placeholder="Name"
                                            name="firstname"
                                            className="form-control"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.firstname}</p> : <></>}
                                    </div>
                                    <div>
                                        <input
                                            type="lastname"
                                            onChange={handleInput}
                                            placeholder="Lastname"
                                            name="lastname"
                                            className="form-control"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.lastname}</p> : <></>}
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            onChange={handleInput}
                                            placeholder="Email Address"
                                            name="email"
                                            className="form-control"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.email}</p> : <></>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="mobile"
                                            onChange={handleInput}
                                            name="mobile"
                                            className="form-control"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.mobile}</p> : <></>}
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            onChange={handleInput}
                                            placeholder="Password"
                                            name="password"
                                        ></input>
                                        {erros ? <p className="text-danger fst-italic">{erros.password}</p> : <></>}
                                    </div>
                                    <div>
                                        <div className="d-flex gap-30 align-items-center justify-content-center">
                                            <button type="submit" className="btn-buy">
                                                Create
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

export default SignUp;
