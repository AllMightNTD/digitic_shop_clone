import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';

// main banner
import mainbanner from '../../images/main-banner.jpg';
import mainbanner1 from '../../images/main-banner-1.jpg';
import catbanner1 from '../../images/catbanner-01.jpg';
import catbanner2 from '../../images/catbanner-02.jpg';
import catbanner3 from '../../images/catbanner-03.jpg';
import catbanner4 from '../../images/catbanner-04.jpg';

// service
import service from '../../images/service.png';
import service2 from '../../images/service-02.png';
import service3 from '../../images/service-03.png';
import service4 from '../../images/service-04.png';
import service5 from '../../images/service-05.png';

// Marquee
import brand1 from '../../images/brand-01.png';
import brand2 from '../../images/brand-02.png';
import brand3 from '../../images/brand-03.png';
import brand4 from '../../images/brand-04.png';
import brand5 from '../../images/brand-05.png';
import brand6 from '../../images/brand-06.png';
import brand7 from '../../images/brand-07.png';
import brand8 from '../../images/brand-08.png';

import Marquee from 'react-fast-marquee';
import BlogCard from '../../components/Child Component/BlogCard';
import ProductCard from '../../components/Child Component/ProductCard';
import SpecialProduct from '../../components/Child Component/SpecialProduct';
import smartbanner from '../../images/smart-banner.jpg';
import lapbanner from '../../images/lap_banner.jpg';
import phonebanner from '../../images/phone_banner.jpg';
import speak from '../../images/speak_banner.jpg';
import headphone from '../../images/headphone_categories.jpg';
import acc from '../../images/acc.jpg';
import camera from '../../images/camera.jpg';
import laptop from '../../images/laptop.jpg';

import homeapp from '../../images/homeapp.jpg';
import iphone from '../../images/iphone_13.jpg';
import play_station from '../../images/play_station.jpg';
import speak_categories from '../../images/speaker.jpg';
import TV from '../../images/tv.jpg';
import smartwatches from '../../images/smart-watches.jpg';

// Feature Image
import clock1 from '../../images/clock_1.jpg';
import clock2 from '../../images/clock_2.jpg';
import camera_checkOne from '../../images/camera_check1.jpg';
import camera_checkTwo from '../../images/camera_check2.jpg';
import headphone_Featured from '../../images/headphone-featured.jpg';
import headphone_Two from '../../images/headphone_2.jpg';
import headphone_OtherOne from '../../images/headphone_otherOne.jpg';
import headphone_OtherTwo from '../../images/headphone_otherTwo.jpg';
import phone_One from '../../images/phone_1.jpg';
import phone_Two from '../../images/phone_2.jpg';
import lap_One from '../../images/lap_1.jpg';
import lap_Two from '../../images/lap_2.jpg';

// Special Image
import Watch_Special from '../../images/Watch_Special.jpg';
import watch_otherTwo from '../../images/watch_OtherTwo.jpg';
import watch_otherThree from '../../images/watch_OtherOne.jpg';
import watch_otherOne from '../../images/watch_OtherOne.jpg';
import camera_otherOne from '../../images/Camera_OtherOne.jpg';
import camera_otherTwo from '../../images/Camera_OtherTwo.jpg';
import lap_other from '../../images/Laptop_OtherTwo.jpg';

// Popular Image
import Headphone_popular from '../../images/headphone_popular.jpg';
import Lap_popular from '../../images/lap_popular.jpg';

// Blog Imag
import blog_One from '../../images/blog-5.jpg';
import blog_Two from '../../images/blog-2.jpg';
import blog_Three from '../../images/blog-3.jpg';
import blog_Four from '../../images/blog-4.jpg';

// Icon
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { SmoothHorizontalScrolling } from '../../ultils';

import Container from '../../components/Child Component/Container';

const Home = () => {
    const servicedata = [
        {
            image: service,
            name: 'Fast Shipping',
            desc: 'From all orders over $100',
        },
        {
            image: service2,
            name: 'Gift Voucher',
            desc: 'Save up to 25%',
        },
        {
            image: service3,
            name: 'Support 24/7',
            desc: 'Shop with an expect',
        },
        {
            image: service4,
            name: 'Affordable Prices',
            desc: 'Get Factory direct price',
        },
        {
            image: service5,
            name: 'Secure Payments',
            desc: '100% Protected Payments',
        },
    ];
    const catbannerdata = [
        {
            image: catbanner1,
            type: 'BEST SALES',
            title: 'Iphone 13',
            desc: 'From 499$ or 500$',
        },
        {
            image: catbanner2,
            type: 'AirPod Pro 2020',
            title: 'AirsPod',
            desc: 'From 199$ or 200$',
        },
        {
            image: catbanner3,
            type: 'Smart Watch 2020',
            title: 'Smart Watch',
            desc: 'From 99$ or 200$',
        },
        {
            image: catbanner4,
            type: 'HEADPHONE NOVIA 3',
            title: 'Headphone',
            desc: 'From 10$ or 100$',
        },
    ];
    const dataMarquee = [
        {
            image: brand1,
        },
        {
            image: brand2,
        },
        {
            image: brand3,
        },
        {
            image: brand4,
        },
        {
            image: brand5,
        },
        {
            image: brand6,
        },
        {
            image: brand7,
        },
        {
            image: brand8,
        },
    ];
    const imageCard = [
        {
            time: '02 JULY 2022',
            source: blog_One,
            title: 'Sed Ut Perisaphic Unde Omnic  ',
            des: 'The watch with smart design brings a great user experience',
        },
        {
            time: '25 October 2022',
            source: blog_Two,
            title: 'AirPod 2 like new of year 2022 ',
            des: 'Great headphones for an enjoyable listening experience',
        },
        {
            time: '14 January 2022',
            source: blog_Three,
            title: 'Camera Fujifilm X-T3 pro',
            des: 'camera with super standard lens for unique photos ',
        },
        {
            time: '14 January 2022',
            source: blog_Four,
            title: 'Camera Fujifilm X-T3 pro',
            des: 'camera with super standard lens for unique photos ',
        },
    ];
    const categoriesItem = [
        {
            name: 'Accessories',
            count: '4 items',
            image: acc,
        },
        {
            name: 'Camera & Videos',
            count: '5 items',
            image: camera,
        },
        {
            name: 'Computer & Laptop',
            count: '3 items',
            image: laptop,
        },
        {
            name: 'Headphones',
            count: '4 items',
            image: headphone,
        },
        {
            name: 'Home Appliances',
            count: '6 items',
            image: homeapp,
        },
        {
            name: 'Mobile & Tablet',
            count: '5 items',
            image: iphone,
        },
        {
            name: 'Music & Gaming',
            count: '2 items',
            image: play_station,
        },
        {
            name: 'Portable Speakers',
            count: '8 items',
            image: speak_categories,
        },
        {
            name: 'Smart Television',
            count: '1 items',
            image: TV,
        },
        {
            name: 'Smart Watches',
            count: '9 items',
            image: smartwatches,
        },
    ];
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
        {
            imageOne: lap_One,
            imageTwo: lap_Two,
            title: 'Computer & Laptop',
            desc: 'Apple Macbook Air Laptop : M1 chip , 13.3-inch/33.74cm',
            valueStar: '5',
            price: '$540.00',
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
        {
            imageOne: lap_One,
            imageTwo: lap_Two,
            title: 'Computer & Laptop',
            desc: 'Apple Macbook Air Laptop : M1 chip , 13.3-inch/33.74cm',
            valueStar: '5',
            price: '$540.00',
        },
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
        {
            imageOne: lap_One,
            imageTwo: lap_Two,
            title: 'Computer & Laptop',
            desc: 'Apple Macbook Air Laptop : M1 chip , 13.3-inch/33.74cm',
            valueStar: '5',
            price: '$540.00',
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
    const dataSpecialProduct = [
        {
            imageCard: headphone_Two,
            imageOtherOne: headphone_OtherOne,
            imageOtherTwo: headphone_OtherTwo,
            title: 'Headphones',
            desc: 'Pioneer DJ HDJ-X5-S Professional DJ love',
            valueStars: 4,
            price: '$200.00',
            priceSale: '$250.00',
            countDaySale: 402,
            countProduct: 25,
        },
        {
            imageCard: Watch_Special,
            imageOtherOne: watch_otherTwo,
            imageOtherTwo: watch_otherThree,
            title: 'Accessories',
            desc: 'Smart Watch with Advanced Heath',
            valueStars: 3,
            price: '$220.00',
            priceSale: '$300.00',
            countDaySale: 200,
            countProduct: 30,
        },
        {
            imageCard: clock1,
            imageOtherOne: watch_otherTwo,
            imageOtherTwo: watch_otherOne,
            title: 'Accessories',
            desc: 'E Circle Men Smart Watch for Android and Iphone',
            valueStars: 2,
            price: '$120.00',
            priceSale: '$150.00',
            countDaySale: 100,
            countProduct: 35,
        },

        {
            imageCard: headphone_Featured,
            imageOtherOne: headphone_OtherOne,
            imageOtherTwo: headphone_OtherTwo,
            title: 'Headphones',
            desc: 'Bang & Oulufen Beolay H9i WirLess Over-Eastesd',
            valueStars: 4,
            price: '$210.00',
            priceSale: '$340.00',
            countDaySale: 110,
            countProduct: 35,
        },
        {
            imageCard: camera_checkOne,
            imageOtherOne: camera_otherOne,
            imageOtherTwo: camera_otherTwo,
            title: 'Camera',
            desc: 'Olympus Pen 9XL kit with 14-42 Ez lening count',
            valueStars: 3,
            price: '$232.00',
            priceSale: '$352.00',
            countDaySale: 140,
            countProduct: 30,
        },
        {
            imageCard: lap_One,
            imageOtherOne: lap_Two,
            imageOtherTwo: lap_other,
            title: 'Computer & Laptop',
            desc: 'Apple Macbook Air 2021 M1 chip 13.3 circle lightning',
            valueStars: 5,
            price: '$400.00',
            priceSale: '$560.00',
            countDaySale: 220,
            countProduct: 18,
        },
    ];

    const sliderRef = useRef();
    console.log(sliderRef);
    const productRef = useRef();
    console.log(productRef);

    const handleScrollRigth = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const leftScrollLeft = sliderRef.current.scrollLeft;
        console.log(leftScrollLeft);
        console.log(maxScrollLeft);
        if (leftScrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(sliderRef.current, 250, productRef.current.clientWidth, leftScrollLeft);
        }
    };
    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -productRef.current.clientWidth,
                sliderRef.current.scrollLeft,
            );
        }
    };

    return (
        <>
            <Container className="home-wrapper-one py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item rounded-3 active main-banner position-relative">
                                        <Image src={mainbanner} className="img-fluid d-block" alt="..." />
                                        <div className="main-banner-content position-absolute">
                                            <h4>SUPERCHARGED FOR PROPS</h4>
                                            <h5>Iphone 14</h5>
                                            <p>From 999$ or 1000$</p>
                                            <Link className="btn-buy">BUY NOW</Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item main-banner position-relative">
                                        <Image src={mainbanner1} className="img-fluid d-block" alt="..." />
                                        <div className="main-banner-content position-absolute">
                                            <h4> FOR PROPS</h4>
                                            <h5>Iphone 12</h5>
                                            <p>From 999$ or 1000$</p>
                                            <Link className="btn-buy">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev"
                                >
                                    <FiChevronLeft className="fs-4" />
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next"
                                >
                                    <FiChevronRight className="fs-4" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                            {catbannerdata.map((item, index) => (
                                <div key={index} className="small-banner position-relative">
                                    <Image src={item.image} alt={item.title} className="img-fluid rounded-3"></Image>
                                    <div className="small-banner-content position-absolute">
                                        <h4>{item.type}</h4>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="home-wrapper-two py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="service d-flex justify-content-around align-items-center">
                            {servicedata.map((item, index) => (
                                <div key={index} className="d-flex align-items-center gap-15">
                                    <Image src={item.image} alt="service"></Image>
                                    <div>
                                        <h6>{item.name}</h6>
                                        <p className="mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="home-wrapper-two py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                            {categoriesItem.map((item, index) => (
                                <div key={index} className="d-flex align-items-center">
                                    <div>
                                        <h6>{item.name}</h6>
                                        <p>{item.count}</p>
                                    </div>
                                    <Image src={item.image}></Image>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="feature-wrapper home-wrapper-two py-5">
                <div className="col-12 d-flex justify-content-between">
                    <h3 className="section-heading">Featured Collection</h3>
                    <div>
                        <button id="left_icon" className={`feature_button-carousel`}>
                            <FiChevronLeft onClick={handleScrollLeft} />
                        </button>
                        <button className="feature_button-carousel">
                            <FiChevronRight onClick={handleScrollRigth} />
                        </button>
                    </div>
                </div>
                <div className="section_featured" ref={sliderRef}>
                    {dataFeature.map((item, index) => (
                        <div key={index} className="col-2dot4" ref={productRef}>
                            <Link to="/store/:id" className="product-card position-relative">
                                <div className="wish-list position-absolute">
                                    {/* <img src={wish} alt="wishlist"></img> */}
                                </div>
                                <div className="product-image">
                                    <Image src={item.imageOne} className="img-fluid" alt="product image"></Image>
                                    <Image src={item.imageTwo} className="img-fluid" alt="product image"></Image>
                                </div>
                                <div className="product-details mt-4">
                                    <h6 className="brand">{item.title}</h6>
                                    <h5 className="product-title">{item.desc}</h5>
                                    {/* <ReactStars
                                            count={5}
                                            edit={false}
                                            value={valueStar}
                                            size={24}
                                            activeColor="#ffd700"
                                        /> */}
                                    <p className="product-price">{item.price}</p>
                                </div>

                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        {/* <Link>
                                                <img src={prodcompare} alt="prodcompare"></img>
                                            </Link>
                                            <Link>
                                                <img src={view} alt="view"></img>
                                            </Link>
                                            <Link>
                                                <img src={Addcart} alt="add-cart"></img>
                                            </Link> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
            <Container className="famous-wrapper home-wrapper-two">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <Image src={smartbanner} className="img-fluid" alt="famous"></Image>
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $339/mo for 24 mo*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <Image src={lapbanner} className="img-fluid" alt="famous"></Image>
                            <div className="famous-content position-absolute">
                                <h5 style={{ color: '#777777' }}>SUDIO DISPLAY</h5>
                                <h6 className="text-dark mb-0">Room-filling sound</h6>
                                <p className="text-dark fw-normal mb-0">27-inch 5K Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <Image src={phonebanner} className="img-fluid" alt="famous"></Image>
                            <div className="famous-content position-absolute">
                                <h5 style={{ color: '#777777' }}>SMARTPHONES</h5>
                                <h6 className="text-dark mb-0">Iphone 13 Pro</h6>
                                <p className="text-dark fw-normal mb-0">
                                    Now in Green.From $999.0 or $41.62/om for 24 mo.Footnote
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <Image src={speak} className="img-fluid" alt="famous"></Image>
                            <div className="famous-content position-absolute">
                                <h5 style={{ color: '#777777' }}>HOME SPEAKERS</h5>
                                <h6 className="text-dark mb-0">Room-Filling Sound</h6>
                                <p className="text-dark mb-0 fw-normal">FROM $699 or $ 116.68/mo .for 12 mo*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="special-product home-wrapper-two py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading mb-0">Special Latest Product </h3>
                    </div>
                    {dataSpecialProduct.map((item, index) => (
                        <SpecialProduct
                            key={index}
                            imageCard={item.imageCard}
                            imageOtherOne={item.imageOtherOne}
                            imageOtherTwo={item.imageOtherTwo}
                            title={item.title}
                            desc={item.desc}
                            valueStars={item.valueStars}
                            price={item.price}
                            priceSale={item.priceSale}
                            countDaySale={item.countDaySale}
                            countProduct={item.countProduct}
                        />
                    ))}
                </div>
            </Container>
            {/* Popular wrapper */}
            <Container className="popular-wrapper home-wrapper-two py-5">
                <div className="row align-items-start">
                    <div className="row-12">
                        <h3 className="section-heading">Our Popular Product</h3>
                    </div>
                    <div className="col-2">
                        <div className="card w-100 d-flex flex-column">
                            <div className="card-product  d-flex align-items-center">
                                <div className="card-image ">
                                    <Image src={Headphone_popular} className="img-fluid" alt="speaker"></Image>
                                </div>
                                <h5 className="title attention">Mobiles & Tablets</h5>
                            </div>
                            <div className="card-product  mt-3 d-flex align-items-center">
                                <div className="card-image">
                                    <Image src={Lap_popular} className="img-fluid" alt="speaker"></Image>
                                </div>
                                <h5 className="title">Headphones</h5>
                            </div>
                            <div className="card-product  mt-3 d-flex align-items-center">
                                <div className="card-image">
                                    <Image src={Headphone_popular} className="img-fluid" alt="speaker"></Image>
                                </div>
                                <h5 className="title">Computer & Laptop</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {dataFeature.map((item, index) => (
                                <ProductCard
                                    grid_home="2dot4"
                                    key={index}
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
                </div>
            </Container>
            <section className="marque-wrapper home-wrapper-two py-5">
                <div className="px-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    {dataMarquee.map((item, index) => (
                                        <div key={index} className="w-25 mx-4">
                                            <Image src={item.image} alt="brand-01"></Image>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Container className="blog-wrapper home-wrapper-two py-5">
                <div className="row">
                    <div className="row-12">
                        <h3 className="section-heading">Our Latest Blog</h3>
                    </div>
                    {imageCard.map((image, index) => (
                        <div className="col-3">
                            <BlogCard
                                key={index}
                                time={image.time}
                                source={image.source}
                                title={image.title}
                                des={image.des}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Home;
