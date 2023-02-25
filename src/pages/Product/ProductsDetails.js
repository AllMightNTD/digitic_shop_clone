import React from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../../components/Child Component/BreadCrumb';
import Meta from '../../components//Child Component/Meta';
import ProductCard from '../../components/Child Component/ProductCard';
import { GoGitCompare } from 'react-icons/go';
import { GiSelfLove } from 'react-icons/gi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RxDimensions } from 'react-icons/rx';
import { IoIosColorWand } from 'react-icons/io';
import { GiLoveMystery } from 'react-icons/gi';
import { BsShare } from 'react-icons/bs';
import headphone_Featured from '../../images/headphone-featured.jpg';
import headphone_Two from '../../images/headphone_2.jpg';

// Feature data
import clock1 from '../../images/clock_1.jpg';
import clock2 from '../../images/clock_2.jpg';
import camera_checkOne from '../../images/camera_check1.jpg';
import camera_checkTwo from '../../images/camera_check2.jpg';
import phone_One from '../../images/phone_1.jpg';
import phone_Two from '../../images/phone_2.jpg';
import lap_One from '../../images/lap_1.jpg';
import lap_Two from '../../images/lap_2.jpg';
import Image from '../../components/Image';
const ProductsDetails = () => {
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
        <div>
            <Meta title={'Product Name'}></Meta>
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-two">
                <div className="container-xxl bg-white main-product-container">
                    <div className="row align-items-start">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <Image src={headphone_Featured} className="img-fluid"></Image>
                                </div>
                            </div>
                            <div className="others-product-image gap-15 d-flex flex-wrap">
                                <div>
                                    <Image src={headphone_Two} className="img-fluid"></Image>
                                </div>
                                <div>
                                    <Image src={headphone_Two} className="img-fluid"></Image>
                                </div>
                                <div>
                                    <Image src={headphone_Two} className="img-fluid"></Image>
                                </div>
                                <div>
                                    <Image src={headphone_Two} className="img-fluid"></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-products-details">
                                <div className="mb-3">
                                    <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Studens</h3>
                                </div>
                                <div className="border-text py-3 mt-4">
                                    <p className="mb-2 price">$100.0</p>
                                    <div className="d-flex gap-10 align-items-center mb-2">
                                        <ReactStars count={5} edit={false} value="4" size={24} activeColor="#ffd700" />
                                        <p className="mb-0">Based on 2 reviews</p>
                                    </div>

                                    {/* Có điều kiện check */}
                                    <div>
                                        <a href="/store/:id" className="mb-2 reviews-link">
                                            Write a Review
                                        </a>
                                    </div>
                                </div>
                                <div className="border-text py-2">
                                    <div className="type_and-products gap-10 d-flex my-3">
                                        <h5 className="mb-0 product-heading">Type :</h5>
                                        <p className="mb-0 product-data">Headsets</p>
                                    </div>
                                    <div className="type_and-products d-flex gap-10 my-3">
                                        <h5 className="mb-0 product-heading">Brand :</h5>
                                        <p className="mb-0 product-data">Havells</p>
                                    </div>
                                    <div className="type_and-products d-flex gap-10 my-3">
                                        <h5 className="product-heading">Categories :</h5>
                                        <p className="mb-0 product-data">
                                            airpods , camera's , Computers , headphones , mini speaker , our store
                                        </p>
                                    </div>
                                    <div className="type_and-products d-flex gap-10 my-3">
                                        <h5 className="product-heading mb-0">Tags :</h5>
                                        <p className="mb-0 product-data">headphones , laptop , mobile , speaker</p>
                                    </div>
                                    <div className="type_and-products d-flex gap-10 my-3">
                                        <h5 className="product-heading mb-0">Availably :</h5>
                                        <p className="mb-0 product-data">In Stock</p>
                                    </div>
                                    <div className="type_and-products d-flex gap-10 mt-2 mb-3">
                                        <h5 className="product-heading mb-0">Size :</h5>
                                        <div className="d-flex align-items-center gap-15">
                                            <div className="badge border border-1 bg-white text-dark border-second">
                                                S
                                            </div>
                                            <div className="badge border border-1 bg-white text-dark border-second">
                                                X
                                            </div>
                                            <div className="badge border border-1 bg-white text-dark border-second">
                                                XL
                                            </div>
                                            <div className="badge border border-1 bg-white text-dark border-second">
                                                XXL
                                            </div>
                                        </div>
                                    </div>
                                    <div className="type_and-products gap-10 mt-2 mb-3">
                                        <h5 className="product-heading mb-2">Color :</h5>
                                        <div className="d-flex flex-wrap ps-0">
                                            <ul className="d-flex flex-wrap colors gap-10">
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="type_and-products align-items-center d-flex gap-15 my-3">
                                        <h5 className="product-heading mb-0">Quantily :</h5>
                                        <input
                                            type="number"
                                            style={{ width: '70px' }}
                                            className="form-control"
                                            min={1}
                                            max={30}
                                        />
                                        <div className="gap-15 d-flex align-items-center">
                                            <button className="btn-buy ms-3">Add to Cart</button>
                                            <button className="btn-buy ">Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="align-items-center d-flex gap-15">
                                        <div className="gap-15">
                                            <GoGitCompare />
                                            <a href="/" className="ms-1">
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <GiSelfLove />
                                            <a href="/" className="ms-1">
                                                Add to WishList
                                            </a>
                                        </div>
                                    </div>
                                    {/* Accordion */}
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button
                                                    className="gap-10 accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    <MdOutlineLocalShipping />
                                                    Shipping & Returns
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body">
                                                    Free shipping and returns available on all orders We ship all US
                                                    domestic orders with <b>5-10 business day</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button
                                                    className="gap-10 accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    <RxDimensions />
                                                    Materials
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body">
                                                    Running Shoes cushions your stride with soft foam to keep you runing
                                                    in comfort. Lightweight knit materials wraps your foot in breahtable
                                                    support
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button
                                                    class="gap-10 accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    <IoIosColorWand />
                                                    Dimensions
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingFour">
                                                <button
                                                    class="gap-10 accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseFour"
                                                >
                                                    <GiLoveMystery />
                                                    Care Instructions
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFour"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingFour"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 share">
                                        <BsShare />
                                        <p className="mb-0 product-data">Share</p>
                                    </div>
                                    <div className="home-wrapper-two product-payment mt-2">
                                        <h5 className="text-center">Payment methods</h5>
                                        <div className="payment-method d-flex justify-content-center align-items-center gap-15">
                                            <a href="/store/:id">ViSa</a>
                                            <a href="/store/:id">ViettinBank</a>
                                            <a href="/store/:id">AgriBank</a>
                                            <a href="/store/:id">BIDV</a>
                                            <a href="/store/:id">MB Bank</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-3 home-wrapper-two">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="mb-3">Description</h4>
                            <div className="bg-white description-inner-wrapper  p-4">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-4 home-wrapper-two">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-3">Reviews</h3>
                            <div className="reviews-inner-wrapper">
                                <div className="reviews-head d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="mb-3">Customer Reviews</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                edit={false}
                                                value="4"
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Based on 2 reviews</p>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Có điều kiện check  */}
                                        <div>
                                            <a href="/store/:id">Write a Review</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-form py-4">
                                    <h4 className="mb-4">Write a Review</h4>
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
                                            <ReactStars
                                                count={5}
                                                edit={true}
                                                value="4"
                                                size={24}
                                                activeColor="#777777"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                className="w-100 form-control"
                                                name=""
                                                id=""
                                                placeholder="Reviews...."
                                                color="30"
                                                rows="10"
                                            ></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn-buy border-0">Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews-comments mt-4">
                                    <div className="reviews">
                                        <div className="d-flex align-items-center gap-10">
                                            <h6 className="mb-0">John Deep</h6>
                                            <ReactStars
                                                count={5}
                                                edit={true}
                                                value="4"
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries, but also
                                            the leap into electronic typesetting, remaining essentially unchanged. It
                                            was popularised in the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-wrapper home-wrapper-two">
                <div className="container-xxl py-5">
                    <div className="row">
                        <div className="row-12">
                            <h3 className="section-heading">Popular Latest Blog</h3>
                        </div>
                        {dataFeature.map((item, index) => (
                            <ProductCard
                                grid_home="2dot4"
                                imageOne={item.imageOne}
                                imageTwo={item.imageTwo}
                                title={item.title}
                                desc={item.desc}
                                valueStar={item.valueStar}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsDetails;
