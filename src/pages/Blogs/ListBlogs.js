import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ListBlogs = () => {
    const [dataBlog, setDataBlog] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/blog/getAll')
            .then((res) => {
                console.log(res.data);
                setDataBlog(res.data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, []);

    return (
        <div style={{ flex: '1' }} className="py-3">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBlog.length === 0 ? (
                        <p>Hết sản Phẩm</p>
                    ) : (
                        dataBlog.map((data, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.category}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListBlogs;
