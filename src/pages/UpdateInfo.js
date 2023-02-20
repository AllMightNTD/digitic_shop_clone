import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../actions/userAction';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import user from '../images/user.svg';
import Image from '../components/Image';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { SlNotebook } from 'react-icons/sl';
import { GrNotification } from 'react-icons/gr';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
const UpdateInfo = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({ firstname: '', lastname: '', email: '', mobile: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(values.firstname, values.lastname, values.email, values.mobile, values.password));
    };
    console.log(values);
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Container className="update_wrapper home-wrapper-two py-5 px-3">
                <div className=" d-flex align-items-start update_wrapper-info">
                    <div className="user_info d-flex flex-column gap-10">
                        <p className="user_info-name fs-5 text-dark fw-bold">Nguyễn Tiến Dũng</p>

                        <Link to="#" className="update_controller-account text-dark d-flex align-items-center gap-10">
                            <AiOutlineUser className="fs-4" />
                            Tài Khoản Của Tôi
                        </Link>
                        <ul className="list_controller-account px-5 mb-2 d-flex gap-10 flex-column">
                            <li>
                                <Link to="#" className="text-danger">
                                    Hồ Sơ
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-secondary">
                                    Ngân Hàng
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-secondary">
                                    Địa Chỉ
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-secondary">
                                    Đổi Mật Khẩu
                                </Link>
                            </li>
                        </ul>
                        <Link to="#" className=" d-flex align-items-center update_controller-buy text-dark gap-10">
                            <SlNotebook className="text-primary" />
                            Đơn Mua
                        </Link>
                        <Link to="#" className="update_controller-buy d-flex align-items-center gap-10 text-dark">
                            <GrNotification />
                            Thông Báo
                        </Link>
                        <Link to="#" className="update_controller-buy d-flex align-items-center gap-10 text-dark">
                            <TbBuildingWarehouse />
                            Kho Voucher
                        </Link>
                        <Link to="#" className="update_controller-buy d-flex align-items-center gap-10 text-dark">
                            <RiMoneyEuroCircleLine />
                            Shoppee Xu
                        </Link>
                        <div></div>
                    </div>
                    <div className="form_update py-4 px-4">
                        <div className="title_update-user gap-10 pb-2">
                            <p className="mb-0 fs-4 text-dark font-weight-light">Hồ Sơ Của Tôi</p>
                            <p className="fs-7">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>

                        <div className="pay-left-data pb-4">
                            {/* */}
                            <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb"></nav>
                            <form
                                onSubmit={handleSubmit}
                                className="py-4 form-floating d-flex gap-15 flex-wrap justify-content-between"
                            >
                                <div className="flex-grow-1 form-floating">
                                    <input
                                        type="text"
                                        name="firstname"
                                        onChange={handleInput}
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="Firstname"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        First name
                                    </label>
                                </div>
                                <div className="flex-grow-1 form-floating">
                                    <input
                                        type="text"
                                        name="lastname"
                                        onChange={handleInput}
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="Last name"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        Last name
                                    </label>
                                </div>
                                <div className="w-100 form-floating">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={handleInput}
                                        id="floatingInputValue"
                                        placeholder="Address"
                                    />
                                    <label for="floatingInputValue" className="text-secondary">
                                        Email
                                    </label>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="mobile"
                                        name="mobile"
                                        placeholder="Mobile number..."
                                        onChange={handleInput}
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="w-100 py-3 d-flex justify-content-between align-items-center">
                                    <Link to="/" className="text-dark">
                                        <IoIosArrowBack className="mb-1 me-2" />
                                        Return to Home
                                    </Link>
                                    <button type="submit" className="btn-buy bg-danger">
                                        Update Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default UpdateInfo;
