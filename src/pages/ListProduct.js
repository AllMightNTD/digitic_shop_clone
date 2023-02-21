import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ListProduct = () => {
    const [dataProduct, setDataProduct] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/product')
            .then((res) => {
                console.log(res.data);
                setDataProduct(res.data.allProducts);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, []);
    console.log(dataProduct);
    return (
        <div style={{ flex: '1' }} className="py-3">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {dataProduct.map((data, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.price}</td>
                            <td>{data.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListProduct;
