export const checkTokenExpiration = () => {
    const accessToken = localStorage.getItem('accessToken');
    const tokenExpiration = new Date(JWT.decode(accessToken).exp * 1000);
    const now = new Date();

    if (tokenExpiration < now) {
        // access token đã hết hạn
        // yêu cầu một accesstoken mới từ sever
        const refreshToken = localStorage.getItem('refreshToken');
        axios
            .post('/refresh-token', { refreshToken })
            .then((response) => {
                // Lưu accesstoken mới vào Local Storage
                localStorage.setItem('accessToken', response.data.accessToken);
            })
            .catch((error) => {
                throw new Error(error.message);
            });
    }
};

// call the checkTokenExpiration function periodically (e.g. every 5 minutes)
setInterval(checkTokenExpiration, 5 * 60 * 1000);
