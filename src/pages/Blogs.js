import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard.js';
import blog2 from '../images/blog-2.jpg';
import blog3 from '../images/blog-3.jpg';
import blog4 from '../images/blog-4.jpg';
import blog5 from '../images/blog-5.jpg';
import Container from '../components/Container';
const Blogs = () => {
    const imageCard = [
        {
            time: '02 JULY 2022',
            source: blog2,
            title: 'Sed Ut Perisaphic Unde Omnic  ',
            des: 'The watch with smart design brings a great user experience',
        },
        {
            time: '25 October 2022',
            source: blog3,
            title: 'AirPod 2 like new of year 2022 ',
            des: 'Great headphones for an enjoyable listening experience',
        },
        {
            time: '14 January 2022',
            source: blog4,
            title: 'Camera Fujifilm X-T3 pro',
            des: 'camera with super standard lens for unique photos ',
        },
        {
            time: '14 January 2022',
            source: blog5,
            title: 'Camera Fujifilm X-T3 pro',
            des: 'camera with super standard lens for unique photos ',
        },
    ];
    return (
        <>
            <Meta title={'Blogs'}></Meta>
            <BreadCrumb title="Blogs" />
            <Container className="blog-wrapper home-wrapper-two py-4">
                <div className="row align-items-start">
                    <div className="col-3">
                        <div className="filter-card mt-1">
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
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {imageCard.map((image, index) => (
                                <div className="col-4 mb-3">
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
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blogs;
