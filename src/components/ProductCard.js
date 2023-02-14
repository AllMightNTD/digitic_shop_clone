import ReactStars from 'react-rating-stars-component';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import Addcart from '../images/add-cart.svg';
import Image from './Image';

const ProductCard = ({ classname, grid_home, grid, imageOne, imageTwo, title, desc, valueStar, price }) => {
    let location = useLocation();

    return (
        <div
            className={`${
                location.pathname === '/store' ? `gr-${grid} ${classname}` : `col-${grid_home} ${classname}`
            }`}
        >
            <Link to="/store/:id" className="product-card position-relative">
                <div className="wish-list position-absolute">
                    <Image src={wish} alt="wishlist"></Image>
                </div>
                <div className="product-image">
                    <Image src={imageOne} className="img-fluid" alt="product image"></Image>
                    <Image src={imageTwo} className="img-fluid" alt="product image"></Image>
                </div>
                <div className="product-details mt-4">
                    <h6 className="brand">{title}</h6>
                    <h5 className="product-title">{desc}</h5>
                    <ReactStars count={5} edit={false} value={valueStar} size={24} activeColor="#ffd700" />
                    <p className="product-price">{price}</p>
                </div>

                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <Image src={prodcompare} alt="prodcompare"></Image>
                        </Link>
                        <Link>
                            <Image src={view} alt="view"></Image>
                        </Link>
                        <Link>
                            <Image src={Addcart} alt="add-cart"></Image>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
