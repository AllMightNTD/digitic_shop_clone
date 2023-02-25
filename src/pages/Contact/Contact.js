import React from 'react';
import BreadCrumb from '../../components/Child Component/BreadCrumb';
import Meta from '../../components//Child Component/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';

const Contact = () => {
    return (
        <>
            <Meta title={'Contact US'}></Meta>
            <BreadCrumb title="Contact US" />
            <div className="contact-wrapper home-wrapper-two py-4">
                <div className="px-3">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98839009518!2d105.81945407366972!3d21.022738704089598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1675267878712!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowfullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">Contact Us</h3>
                                    <form className="action d-flex flex-column gap-15">
                                        <div>
                                            <input className="form-control" type="text" placeholder="Name"></input>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Email"></input>
                                        </div>
                                        <div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Phone number..."
                                            ></input>
                                        </div>
                                        <div>
                                            <textarea
                                                className="w-100 form-control"
                                                name=""
                                                id=""
                                                placeholder="Comments."
                                                color="30"
                                                rows="10"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button className="btn-buy border-0">Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get in touch with US</h3>
                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineHome className="fs-5" />
                                                <address className="mb-0">Bach Mai : Hai Ba Trung , Ha Noi</address>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiPhoneCall className="fs-5" />
                                                <a href="tel:+0866942653">0866942653</a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineMail className="fs-5" />
                                                <a href="mailto:dungnguyentien140602@gmail.com">
                                                    dungnguyentien140602@gmail.com
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiInfoCircle className="fs-5" />
                                                <p className="mb-0">Ha Noi 2/2/2023</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
