import ReactStars from 'react-rating-stars-component';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import tab from '../images/tab.jpg';
import tab2 from '../images/tab2.jpg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import Addcart from '../images/add-cart.svg';

const ProductCard = ({ grid_home, grid, imageOne, imageTwo, title, desc, valueStar, price }) => {
    let location = useLocation();

    return (
        <div className={`${location.pathname == '/store' ? `gr-${grid}` : `col-${grid_home}`}`}>
            <Link to="/store/:id" className="product-card position-relative">
                <div className="wish-list position-absolute">
                    <img src={wish} alt="wishlist"></img>
                </div>
                <div className="product-image">
                    <img src={imageOne} className="img-fluid" alt="product image"></img>
                    <img src={imageTwo} className="img-fluid" alt="product image"></img>
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
                            <img src={prodcompare} alt="prodcompare"></img>
                        </Link>
                        <Link>
                            <img src={view} alt="view"></img>
                        </Link>
                        <Link>
                            <img src={Addcart} alt="add-cart"></img>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
