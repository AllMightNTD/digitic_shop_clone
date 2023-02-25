import React, { useState } from 'react';
import BreadCrumb from '../../components/Child Component/BreadCrumb';
import Meta from '../../components//Child Component/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../../components/Child Component/ProductCard';

// Featured Image
import clock1 from '../../images/clock_1.jpg';
import clock2 from '../../images/clock_2.jpg';
import camera_checkOne from '../../images/camera_check1.jpg';
import camera_checkTwo from '../../images/camera_check2.jpg';
import headphone_Featured from '../../images/headphone-featured.jpg';
import headphone_Two from '../../images/headphone_2.jpg';
import phone_One from '../../images/phone_1.jpg';
import phone_Two from '../../images/phone_2.jpg';
import lap_One from '../../images/lap_1.jpg';
import lap_Two from '../../images/lap_2.jpg';
import Container from '../../components/Child Component/Container';

import gr from '../../images/gr.svg';
import gr2 from '../../images/gr2.svg';
import gr3 from '../../images/gr3.svg';
import gr4 from '../../images/gr4.svg';
import Image from '../../components/Image';
const OurStore = () => {
    const [grid, setGrid] = useState(4);
    const dataFeature = [
        {
            imageOne: clock1,
            imageTwo: clock2,
            title: 'Accessories',
            desc: 'E Circle Men Smart Watch for Android Phone Night Black',
            valueStar: '3',
            price: '$100.00',
        },
        {
            imageOne: camera_checkOne,
            imageTwo: camera_checkTwo,
            title: 'Camera & Videos',
            desc: 'OlymPus pen E-PL9 kit with 14 42 , EZ lens , camera',
            valueStar: '4',
            price: '$120.00',
        },
        {
            imageOne: camera_checkOne,
            imageTwo: camera_checkTwo,
            title: 'Camera & Videos',
            desc: 'OlymPus pen E-PL9 kit with 14 42 , EZ lens , camera',
            valueStar: '4',
            price: '$120.00',
        },
        {
            imageOne: headphone_Featured,
            imageTwo: headphone_Two,
            title: 'Headphones',
            desc: 'Bang & Olufen Beoplay H9i Wireless Over-Ear Headphones',
            valueStar: '5',
            price: '$300.00',
        },
        {
            imageOne: phone_One,
            imageTwo: phone_Two,
            title: 'Smart phone',
            desc: 'Samsung Galaxy Note 10+ Mobile Phone , Sim Free SmartPhone',
            valueStar: '2',
            price: '$410.00',
        },
        {
            imageOne: lap_One,
            imageTwo: lap_Two,
            title: 'Computer & Laptop',
            desc: 'Apple Macbook Air Laptop : M1 chip , 13.3-inch/33.74cm',
            valueStar: '5',
            price: '$540.00',
        },
        //
    ];
    return (
        <>
            <Meta title={'Our Store'}></Meta>
            <BreadCrumb title="OurStore" />
            <Container className="store-wrapper home-wrapper-two py-5">
                <div className="row align-items-start">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Home</li>
                                    <li>Our Store</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Available</h5>
                            </div>
                            <div>
                                <div class="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        In Stock(1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                    />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Our Of Stock(0)
                                    </label>
                                </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className="d-flex align-items-center gap-10">
                                <form className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue"
                                        placeholder="From"
                                    />
                                    <label for="floatingInputValue">From</label>
                                </form>
                                <form className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputValue1"
                                        placeholder="To"
                                    />
                                    <label for="floatingInputValue1">To</label>
                                </form>
                            </div>
                            <h5 className="sub-title">Colors</h5>
                            <div>
                                <div className="d-flex flex-wrap ps-0">
                                    <ul className="d-flex flex-wrap colors gap-10">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="s" />
                                    <label className="form-check-label" for="s">
                                        S(2)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="m" />
                                    <label className="form-check-label" for="m">
                                        M(0)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="L" />
                                    <label className="form-check-label" for="L">
                                        L(0)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="XL" />
                                    <label className="form-check-label" for="XL">
                                        XL(0)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="XXL" />
                                    <label className="form-check-label" for="XXL">
                                        XXL(0)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Hedphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">shirt</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">wire</span>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Product</h3>
                            <div>
                                <div className="random-products d-flex align-items-center">
                                    <div className="w-50">
                                        <Image className="img-fluid" src={headphone_Featured} alt="head-phone"></Image>
                                    </div>
                                    <div className="w-50 random-product-content mt-4">
                                        <h5 className="product-title">
                                            Kid headphone_Featured s bulk 10 pack multi colored for students
                                        </h5>
                                        <ReactStars count={5} edit={false} value="4" size={16} activeColor="#ffd700" />
                                        <p className="product-price">$100.00</p>
                                    </div>
                                </div>
                                <div className="random-products d-flex align-items-center">
                                    <div className="w-50">
                                        <Image className="img-fluid" src={headphone_Featured} alt="head-phone"></Image>
                                    </div>
                                    <div className="w-50 random-product-content  mt-4">
                                        <h5 className="product-title">
                                            Kid headphones bulk 10 pack multi colored for students
                                        </h5>
                                        <ReactStars count={5} edit={false} value="4" size={16} activeColor="#ffd700" />
                                        <p className="product-price">$100.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid d-flex justify-content-between mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0" style={{ width: '100px' }}>
                                        Sort by
                                    </p>
                                    <select defaultValue={'DEFAULT'} className="form-control form-select" id="">
                                        <option value="default">Select the option</option>
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best selling</option>
                                        <option value="title-accending">Alphabetically, A-Z</option>
                                        <option value="Price-ascending">Price , low to hig</option>
                                        <option value="Price-descending">Price , low to hig</option>
                                        <option value="Price-ascending">Price , high to low</option>
                                        <option value="Price-descending">Price , old to new</option>
                                        <option value="Price-ascending">Price , old to new</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-10 grid-group">
                                <p className="totla-products mb-0">21 Products</p>
                                <div className="d-flex gap-10 align-items-center ">
                                    <div className="grid-img" onClick={() => setGrid(4)}>
                                        <Image src={gr} className="img-fluid d-block" alt="grid"></Image>
                                    </div>
                                    <div className="grid-img" onClick={() => setGrid(2)}>
                                        <Image src={gr2} className="img-fluid d-block" alt="grid"></Image>
                                    </div>
                                    <div className="grid-img" onClick={() => setGrid(3)}>
                                        <Image src={gr3} className="img-fluid d-block" alt="grid"></Image>
                                    </div>
                                    <div className="grid-img" onClick={() => setGrid(6)}>
                                        <Image src={gr4} className="img-fluid d-block" alt="grid"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="OutStore-product-lists pb-5">
                            <div className="d-flex flex-wrap gap-15">
                                {dataFeature.map((item, index) => (
                                    <ProductCard
                                        grid={grid}
                                        imageOne={item.imageOne}
                                        imageTwo={item.imageTwo}
                                        title={item.title}
                                        desc={item.desc}
                                        valueStar={item.valueStar}
                                        price={item.price}
                                    ></ProductCard>
                                ))}
                            </div>
                        </div>
                        <div className="filter-sort-grid d-flex justify-content-between mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="pagination_show d-flex align-items-center gap-10">
                                    <p className="mb-0">Showing 10 of 20</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-10 grid-group">
                                <div className="pagination-round bg-dark text-white d-flex align-items-center justify-content-center">
                                    1
                                </div>
                                <div className="pagination-round  d-flex align-items-center justify-content-center">
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStore;
