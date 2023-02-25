import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const ListProduct = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [sortType, setSortType] = useState('');
    // function handleFilterByPrice(sortType) {}
    useEffect(() => {
        // Gửi yêu cầu API để lấy danh sách sản phẩm theo khoảng giá `filterPrice`
        axios
            .get('http://localhost:5000/api/product', {
                params: {
                    // Truyền params để thực hiện việc sắp xếp theo yêu cầu
                    sort: sortType,
                    limit: 6,
                    page: page,
                },
            })
            .then((response) => {
                setDataProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [sortType, page]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/product', {
                params: {
                    limit: 6,
                    page: page,
                },
            })
            .then((res) => {
                console.log(res.data);
                setDataProduct(res.data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, []);

    console.log(dataProduct.length);
    return (
        <div style={{ flex: '1' }} className="py-3">
            <div className="d-flex home-wrapper-two px-3 py-3 gap-15 filter_wrapper align-items-center justify-content-between">
                <div className="filter_product d-flex align-items-center gap-10">
                    <p className="mb-0">Sắp xếp theo</p>
                    <button onClick={() => setSortType('category')}>Category</button>
                    <button onClick={() => setSortType('brand')}>Brand</button>
                </div>
                <div className="d-flex align-items-center gap-15 filter_by-price">
                    <select
                        style={{ boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.1)' }}
                        onChange={(e) => setSortType(e.target.value)}
                        className="px-2 py-2 border-0 rounded-3"
                    >
                        <option value="">Sort by Price</option>
                        <option value="price">Giá thấp đến cao</option>
                        <option value="-price">Giá cao đến thấp</option>
                    </select>
                    <div>
                        <button
                            disabled={page == 1 ? true : false}
                            style={{ backgroundColor: page == 1 ? '#ededed' : 'white', color: 'black' }}
                            onClick={() => setPage(page - 1)}
                        >
                            <AiOutlineLeft />
                        </button>
                        <button onClick={() => setPage(page + 1)}>
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Category</th>
                        <th scope="col">Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {dataProduct.length === 0 ? (
                        <p>Hết sản Phẩm</p>
                    ) : (
                        dataProduct.map((data, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                                <td>{data.quantity}</td>
                                <td>{data.category}</td>
                                <td>{data.brand}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListProduct;
