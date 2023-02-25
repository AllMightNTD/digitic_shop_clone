import React from 'react';
import BreadCrumb from '../../components/Child Component/BreadCrumb';
import Meta from '../../components//Child Component/Meta';

import clock2 from '../../images/clock_2.jpg';
import camera_checkTwo from '../../images/camera_check2.jpg';
import phone_Two from '../../images/phone_2.jpg';
import lap_One from '../../images/lap_1.jpg';
import cross from '../../images/cross.svg';
import Container from '../../components/Child Component/Container';
import Image from '../../components/Image';

const CompareProduct = () => {
    const dataCompare = [
        {
            imageTwo: clock2,
            title: 'Accessories',
            desc: 'E Circle Men Smart Watch for Android Phone Night Black',
            price: '$100.00',
            type: 'Tablets Computer',
            SKU: 'SKU033',
            Availabillity: 'In Stock',
        },
        {
            imageTwo: camera_checkTwo,
            title: 'Camera',
            desc: 'E Circle Men Camera Watch for Android Phone Night Black',
            price: '$120.00',
            type: 'Camera',
            SKU: 'SKU034',
            Availabillity: 'In Night',
        },
        {
            imageTwo: phone_Two,
            title: 'Accessories',
            desc: 'E Circle Men Smart Watch for Android Phone Night Black',
            price: '$100.00',
            type: 'Tablets Computer',
            SKU: 'SKU033',
            Availabillity: 'In Stock',
        },
        {
            imageTwo: lap_One,
            title: 'Headphone',
            desc: 'E Circle Men Smart Watch for Android Phone Night Black',
            price: '$130.00',
            type: 'Tablets Computer',
            SKU: 'SKU033',
            Availabillity: 'In Stock',
        },
    ];
    return (
        <>
            <Meta title={'Compare-Product'}></Meta>
            <BreadCrumb title="Compare-Product" />
            <Container className="compare-product-wrapper py-5 home-wrapper-two">
                <div className="row">
                    {dataCompare.map((item, index) => (
                        <div className="col-3" key={index}>
                            <div className="compare-product-card position-relative">
                                <Image className="position-absolute cross" src={cross} alt="cross"></Image>
                                <div className="product-card-image">
                                    <Image className="img-fluid" src={item.imageTwo}></Image>
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">{item.desc}</h5>
                                    <h6 className="price mb-3">$100.00</h6>
                                    <div className="product-details d-flex justify-content-between">
                                        <h5 className="mb-0">Brands</h5>
                                        <p className="mb-0">{item.title}</p>
                                    </div>
                                    <div className="product-details d-flex justify-content-between">
                                        <h5 className="mb-0">Type</h5>
                                        <p className="mb-0">{item.type}</p>
                                    </div>
                                    <div className="product-details d-flex justify-content-between">
                                        <h5 className="mb-0">SKU</h5>
                                        <p className="mb-0">{item.SKU}</p>
                                    </div>
                                    <div className="product-details d-flex justify-content-between">
                                        <h5 className="mb-0">Availabillity</h5>
                                        <p className="mb-0">{item.Availabillity}</p>
                                    </div>
                                    <div className="product-details d-flex justify-content-between">
                                        <h5 className="mb-0">Color</h5>
                                        <ul className="d-flex flex-wrap colors gap-10">
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div className="product-details d-flex justify-content-between">
                                        <h5 className="mb-0">Size</h5>
                                        <div className="size gap-10">
                                            <span>S</span> <span>M</span> <span>L</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;
