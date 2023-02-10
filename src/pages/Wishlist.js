import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import clock1 from '../images/clock_1.jpg';
import clock2 from '../images/clock_2.jpg';
import camera_checkOne from '../images/camera_check1.jpg';
import camera_checkTwo from '../images/camera_check2.jpg';
import headphone_Featured from '../images/headphone-featured.jpg';
import headphone_Two from '../images/headphone_2.jpg';
import headphone_OtherOne from '../images/headphone_otherOne.jpg';
import headphone_OtherTwo from '../images/headphone_otherTwo.jpg';
import phone_One from '../images/phone_1.jpg';
import phone_Two from '../images/phone_2.jpg';
import lap_One from '../images/lap_1.jpg';
import lap_Two from '../images/lap_2.jpg';
const Wishlist = () => {
    const dataWish = [
        {
            image: clock1,
            desc: 'Honor T1 7.0 GB RAM 8GB ROM 7 Inch With Wi-fi 30 +',
            price: '$200.00',
        },
        {
            image: camera_checkOne,
            desc: 'Honor T1 7.0 GB RAM 8GB ROM 7 Inch With Wi-fi 30 +',
            price: '$300.00',
        },
        {
            image: headphone_Featured,
            desc: 'Honor T1 7.0 GB RAM 8GB ROM 7 Inch With Wi-fi 30 +',
            price: '$250.00',
        },
        {
            image: headphone_OtherOne,
            desc: 'Honor T1 7.0 GB RAM 8GB ROM 7 Inch With Wi-fi 30 +',
            price: '$360.00',
        },
        {
            image: phone_One,
            desc: 'Honor T1 7.0 GB RAM 8GB ROM 7 Inch With Wi-fi 30 +',
            price: '$420.00',
        },
        {
            image: lap_One,
            desc: 'Honor T1 7.0 GB RAM 8GB ROM 7 Inch With Wi-fi 30 +',
            price: '$110.00',
        },
    ];

    return (
        <>
            <Meta title={'WishList'}></Meta>
            <BreadCrumb title="WishList" />
            <div className="wislist-wrapper py-5 home-wrapper-two">
                <div className="px-3">
                    <div className="row">
                        {dataWish.map((item, index) => (
                            <div className="col-2" key={index} style={{ cursor: 'pointer' }}>
                                <div className="wishlist-products bg-white position-relative">
                                    <img className="position-absolute cross" src="images/cross.svg" alt="cross"></img>
                                    <div>
                                        <img src={item.image} className="img-fluid" alt="tablet"></img>
                                    </div>
                                    <div className="wishlist-products-details">
                                        <h5 className="title">{item.desc}</h5>
                                        <h6 className="price">{item.price}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
