import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import wish from '../images/wish.svg';
import Image from './Image';

const SpecialProduct = ({
    imageCard,
    imageOtherOne,
    imageOtherTwo,
    title,
    desc,
    valueStars,
    price,
    priceSale,
    countDaySale,
    countProduct,
}) => {
    return (
        <div className="col-4">
            <div className="special-product-card d-flex justify-content-between">
                <div className="position-relative image_card">
                    <div className="discount-floating  position-absolute">-30%</div>
                    <div className="wish-list position-absolute">
                        <Image src={wish} alt="wishlist"></Image>
                    </div>
                    <Image src={imageCard} className="img-fluid" alt="watch"></Image>
                    <div className="d-flex align-items-center gap-15 image_card-others">
                        <div className="images-different d-flex align-items-center justify-content-center">
                            <Image src={imageOtherOne} className="img-fluid" alt="watch"></Image>
                        </div>
                        <div className="images-different d-flex align-items-center justify-content-center">
                            <Image src={imageOtherTwo} className="img-fluid" alt="watch"></Image>
                        </div>
                    </div>
                </div>
                <div className="special-product-content mt-5 details_card ">
                    <h6 className="brand mb-4">{title}</h6>
                    <h5 className="mb-2 product-title">{desc}</h5>
                    <ReactStars count={5} edit={false} value={valueStars} size={20} activeColor="#ffd700" />
                    <p className="product-price mt-1">
                        <span className="red-p">{price}</span>&nbsp; <strike>{priceSale}</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                            <b>{countDaySale}</b>&nbsp;<span>days</span>
                        </p>
                        <div className="d-flex align-items-center">
                            <span className="badge">1</span>:<span className="badge">2</span>:
                            <span className="badge">3</span>
                        </div>
                    </div>
                    <div className="prod-count mt-2">
                        <p className="mb-0">Products : {countProduct}</p>
                        <div class="progress" style={{ height: '3px' }}>
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: '25%' }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <Link className="btn-buy mt-4">Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
