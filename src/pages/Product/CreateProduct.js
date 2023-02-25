import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../actions/userAction';
const CreateProduct = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        price: '',
        color: '',
        category: '',
        brand: '',
        quantity: '',
    });
    const dispatch = useDispatch();
    console.log(values);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createProduct(
                values.title,
                values.description,
                values.price,
                values.color,
                values.category,
                values.brand,
                values.quantity,
            ),
        );
    };
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div style={{ flex: '1' }}>
            <div className="pay-left-data ps-3">
                <h2 className="mb-0 mt-4">Create new Products</h2>
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="form-floating d-flex gap-15 py-4 flex-wrap justify-content-between"
                >
                    <div className="flex-grow-1 form-floating">
                        <input
                            type="title"
                            name="title"
                            onChange={handleInput}
                            className="form-control"
                            id="floatingInputValue"
                            placeholder="Title"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Title Product
                        </label>
                    </div>
                    <div className="flex-grow-1 form-floating">
                        <input
                            type="text"
                            name="description"
                            onChange={handleInput}
                            className="form-control"
                            id="floatingInputValue"
                            placeholder="Last name"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Description
                        </label>
                    </div>
                    <div className="w-100 form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInputValue"
                            onChange={handleInput}
                            name="price"
                            placeholder="price"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Price
                        </label>
                    </div>
                    <div className="w-100 form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInputValue"
                            onChange={handleInput}
                            name="color"
                            placeholder="Color"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Color
                        </label>
                    </div>
                    <div className="flex-grow-1 form-floating">
                        <input
                            type="text"
                            name="category"
                            className="form-control"
                            id="floatingInputValue"
                            placeholder="City"
                            onChange={handleInput}
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Category
                        </label>
                    </div>
                    <div className="flex-grow-1 form-floating">
                        <input
                            type="text"
                            name="brand"
                            className="form-control"
                            placeholder="Brand"
                            id="floatingInputValue"
                            onChange={handleInput}
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Brand
                        </label>
                    </div>
                    <div className="form-floating flex-grow-1">
                        <input
                            type="text"
                            name="quantity"
                            className="form-control"
                            onChange={handleInput}
                            id="floatingInputValue"
                            placeholder="Quantity"
                        />
                        <label for="floatingInputValue" className="text-secondary">
                            Quantity
                        </label>
                    </div>
                    <div className="w-100 py-3 d-flex justify-content-between align-items-center">
                        <Link to="/" className="text-dark">
                            <IoIosArrowBack className="mb-1 me-2" />
                            Return to Home
                        </Link>
                        <button type="submit" className="btn-buy bg-primary">
                            Create New Products
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
