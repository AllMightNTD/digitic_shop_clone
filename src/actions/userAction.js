import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const registerUser = (firstname, lastname, email, mobile, password) => (dispatch) => {
    axios
        .post('http://localhost:5000/api/user/register', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobile: mobile,
            password: password,
        })
        .then((res) => {
            if (res.data.status === 'success') {
                localStorage.setItem('user', JSON.stringify(res.data));
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: res.data,
                });
                window.location.href = '/login';
            }
            if (res.data.status === false) {
                toast.error(res.data.msg, {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/login';
                    },
                });
            }
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
        });
};

export const loginUser = (email, password) => (dispatch) => {
    axios
        .post('http://localhost:5000/api/user/login', {
            email,
            password,
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.status === 'success') {
                localStorage.setItem('user', JSON.stringify(res.data));
                localStorage.setItem('token', res.data.token);
                dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
                // window.location.href = '/';
                toast.success('Login successful', {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/';
                    },
                });
            } else {
                // alert();
                toast.error(res.data.msg, {
                    autoClose: 1000,
                });
            }
        })
        .catch((err) => {
            dispatch({ type: 'LOGIN_FAIL', payload: err.response.data });
        });
};

export const updateUser = (firstname, lastname, email, password) => (dispatch) => {
    const token = localStorage.getItem('token');
    console.log(token);
    axios
        .put(
            'http://localhost:5000/api/user/update',
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        .then((res) => {
            if (res.data.status === 'success') {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                dispatch({
                    type: 'UPDATE_SUCCESS',
                    payload: res.data,
                });
                toast.success('Update Successfully', {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/';
                    },
                });
            }
            if (res.data.status === false) {
                toast.error(res.data.msg, {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/login';
                    },
                });
            }
        });
};

export const forgotPass = (email) => (dispatch) => {
    axios
        .post('http://localhost:5000/api/user/forgotpass', {
            email: email,
        })
        .then((res) => {
            if (res.data.status === 'success') {
                toast.success(res.data.msg, {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/reset-password';
                    },
                });
            }
            if (res.data.status === false) {
                toast.error(res.data.error);
            }
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
        });
};

export const resetPassword = (email, verificationcode, newPassword) => (dispatch) => {
    axios
        .post('http://localhost:5000/api/user/resetpass', {
            email: email,
            verificationcode: verificationcode,
            newPassword: newPassword,
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.status === 'success') {
                toast.success(res.data.msg, {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/login';
                    },
                });
            }
            if (res.data.status === false) {
                console.log(res.data.msg);
                toast.error(res.data.msg, { autoClose: 1000 });
            }
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
        });
};

export const createProduct = (title, description, price, color, category, brand, quantity) => (dispatch) => {
    const token = localStorage.getItem('token');
    console.log(token);
    axios
        .post(
            'http://localhost:5000/api/product',
            {
                title: title,
                description: description,
                price: price,
                color: color,
                category: category,
                brand: brand,
                quantity: quantity,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        .then((res) => {
            console.log(res.data);
            if (res.data.status === 'success') {
                toast.success(res.data.msg, {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/dashboard/list-products';
                    },
                });
            }
            if (res.data.status === false) {
                console.log(res.data.msg);
                toast.error(res.data.msg, { autoClose: 1000 });
            }
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
        });
};

export const createBlogs = (title, description, category) => (dispatch) => {
    const token = localStorage.getItem('token');
    axios
        .post(
            'http://localhost:5000/api/blog',
            {
                title: title,
                description: description,
                category: category,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        .then((res) => {
            console.log(res.data);
            if (res.data.status === 'success') {
                toast.success(res.data.msg, {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/dashboard/list-blogs';
                    },
                });
            }
            if (res.data.status === false) {
                console.log(res.data.msg);
                toast.error(res.data.msg, { autoClose: 1000 });
            }
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
        });
};
