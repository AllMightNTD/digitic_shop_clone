import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { BsArrowLeft, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub } from 'react-icons/bs';
import Container from '../components/Container';
const BlogsDetail = () => {
    return (
        <>
            <Meta title={'Dynamic Blog Name'}></Meta>
            <BreadCrumb title="Dynamic Blog Name" />
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
                        <div className="single-blog-card">
                            <div className="title">
                                <h3>A beautiful Sunday Renassance</h3>
                            </div>
                            <img
                                className="img-fluid w-100 my-4"
                                src="https://dzungsrt.com/wp-content/uploads/2022/05/covid-19-405x284.jpg"
                            ></img>
                            <p>
                                You 're only as good as your last collection , which is an enormous pressure. I think
                                there is something about luxury it's not something people need , but it's what they want
                                . It really pulls at their heart . I have a fantastic realationship with money .
                                Scelerisque socioqsu ullamcorper urna nisl mollis vestibulum pretium commodo inceptors
                            </p>
                            <div className="d-flex justify-content-between align-items-center back-social">
                                <Link to="/blogs" className="gap-10 d-flex align-items-center">
                                    <BsArrowLeft />
                                    <span>Back to blog</span>
                                </Link>
                                <div className="social-icons gap-30 d-flex align-items-center">
                                    <BsInstagram />
                                    <BsYoutube />
                                    <BsFacebook />
                                </div>
                            </div>
                            <div className="single-blog-card--comment home-wrapper-two mt-4 mb-5">
                                <div className="single-inner-wrapper">
                                    <h5 className="contact-title mb-4">Leave A Comments</h5>
                                    <form className="action d-flex flex-column gap-30">
                                        <div className="d-flex gap-15 align-items-center w-100">
                                            <div className="w-100">
                                                <input className="form-control" type="text" placeholder="Name*"></input>
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email*"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea
                                                className="w-100 form-control"
                                                name=""
                                                id=""
                                                placeholder="Comments."
                                                color="30"
                                                rows="4"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn-buy border-0">
                                                Post Comments
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BlogsDetail;
