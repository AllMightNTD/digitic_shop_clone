import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ time, source, title, des }) => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src={source} className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">{time}</p>
                <h5 className="title">{title}</h5>
                <p className="desc">{des}</p>
                <Link to="/blogs/:id" className="btn-buy">
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
