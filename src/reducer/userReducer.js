const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isAuthenticated: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case 'REGISTER_FAIL':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: action.payload,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case 'LOGIN_FAIL':
        default:
            return state;
    }
};

export default userReducer;
