import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { createBlogs } from '../../actions/userAction';
const CreateBlog = () => {
    const dispatch = useDispatch();
    const [values, setVlues] = useState({
        title: '',
        category: '',
        description: '',
    });
    const handleInput = (e) => {
        setVlues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    console.log(values);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBlogs(values.title, values.category, values.description));
    };
    return (
        <div style={{ flex: '1' }}>
            <div className="pay-left-data ps-3">
                <h2 className="mb-0 mt-4">Create new Blogs</h2>
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="form-floating d-flex gap-15 py-4 flex-wrap justify-content-between"
                >
                    <div className="w-100 form-floating">
                        <input
                            type="title"
                            name="title"
                            onChange={handleInput}
                            className="form-control"
                            id="floatingInputValue"
                            placeholder="Title"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Title Blog
                        </label>
                    </div>
                    <div className="w-100 form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInputValue"
                            onChange={handleInput}
                            name="category"
                            placeholder="Category"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Category
                        </label>
                    </div>
                    <div class="form-floating w-100">
                        <textarea
                            className=" form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            name="description"
                            onChange={handleInput}
                            style={{ height: '100px', width: '100%' }}
                        ></textarea>
                        <label for="floatingTextarea2" className="text-secondary">
                            Comments
                        </label>
                    </div>

                    <div className="w-100 py-3 d-flex justify-content-between align-items-center">
                        <Link to="/" className="text-dark">
                            <IoIosArrowBack className="mb-1 me-2" />
                            Return to Home
                        </Link>
                        <button type="submit" className="btn-buy bg-primary">
                            Create New Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
