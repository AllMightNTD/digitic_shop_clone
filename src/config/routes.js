export const routesPublic = {
    home: '/',
    about: '/about',
    contact: '/contact',
    blogs: '/blogs',
    blogsdetail: '/blogs/:id',
    login: '/login',
    ourstore: '/store',
    productDetails: '/store/:id',
    compareProduct: '/compare-product',
    wishlist: '/wish-list',
    fotgotPass: '/forgot-password',
    signUp: '/sign-up',
    resetPass: '/reset-password',
    privacyPolicy: '/privacy-policy',
    refundPolicy: '/refund-policy',
    cartPage: '/cart/*',
    termOfService: '/term-of-services',
    shippingPolicy: '/shipping-policy',
    updateUser: '/update-user',
    dashboard: '/dashboard/*',
};
export const cartRoutes = {
    cart: '/home',
    shippingPay: '/shipping',
    paymentCart: '/payment',
};

export const dashboardRoute = {
    createProduct: '/create-products',
    listProduct: '/list-products',
    createblog: '/create-blog',
    listblog: '/list-blog',
    updateblog: '/update-blog',
    deleteblog: '/delete-blog',
};

export const privateRoutes = {
    payInfo: '/info',
};
