import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import OurStore from '../../pages/store/OurStore';
import Cart from '../../pages/Cart/Cart';
import PaymentCart from '../../pages/Cart/PaymentCart';
import Blogs from '../../pages/Blogs/Blogs';
import BlogsDetail from '../../pages/Blogs/BlogsDetail';
import ProductsDetails from '../../pages/Product/ProductsDetails';
import CompareProduct from '../../pages/Product/CompareProduct';
import Wishlist from '../../pages/Product/Wishlist';
import { dashboardRoute, routesPublic } from '../../config/routes';
import { cartRoutes } from '../../config/routes';
import { privateRoutes } from '../../config/routes';
import Dashboard from '../../pages/Dashboard for Admin/Dashboard';
import CreateProduct from '../../pages/Product/CreateProduct';
import ListProduct from '../../pages/Product/ListProduct';
import PayInfo from '../../pages/Pay/PayInfo';
import CartPage from '../../pages/Cart/CartPage';
import Login from '../../pages/Auth/Login';
import ForgotPassword from '../../pages/Auth/ForgotPassword';
import SignUp from '../../pages/Auth/SignUp';
import ResetPassword from '../../pages/Auth/ResetPassword';
import UpdateInfo from '../../pages/Auth/UpdateInfo';
import PrivacyPolicy from '../../pages/Society/PrivacyPolicy';
import RefundPolicy from '../../pages/Society/RefundPolicy';
import TermOfSerVice from '../../pages/Society/TermOfSerVice';
import ShippingPolicy from '../../pages/Society/ShippingPolicy';
import ShippingPay from '../../pages/Pay/ShippingPay';
import CreateBlog from '../../pages/Blogs/CreateBlog';
import ListBlogs from '../../pages/Blogs/ListBlogs';
const publicRoutes = [
    { path: routesPublic.home, component: Home },
    { path: routesPublic.about, component: About },
    {
        path: routesPublic.contact,
        component: Contact,
    },
    { path: routesPublic.blogs, component: Blogs },
    { path: routesPublic.blogsdetail, component: BlogsDetail },
    { path: routesPublic.login, component: Login },
    { path: routesPublic.ourstore, component: OurStore },
    { path: routesPublic.productDetails, component: ProductsDetails },
    { path: routesPublic.compareProduct, component: CompareProduct },
    { path: routesPublic.wishlist, component: Wishlist },
    { path: routesPublic.fotgotPass, component: ForgotPassword },
    { path: routesPublic.signUp, component: SignUp },
    { path: routesPublic.resetPass, component: ResetPassword },
    { path: routesPublic.privacyPolicy, component: PrivacyPolicy },
    { path: routesPublic.refundPolicy, component: RefundPolicy },
    { path: routesPublic.cartPage, component: CartPage },
    { path: routesPublic.termOfService, component: TermOfSerVice },
    { path: routesPublic.updateUser, component: UpdateInfo },
    { path: routesPublic.shippingPolicy, component: ShippingPolicy, layout: null },
    { path: routesPublic.dashboard, component: Dashboard, layout: null },
];

const cartRoute = [
    {
        path: cartRoutes.cart,
        component: Cart,
    },
    {
        path: cartRoutes.shippingPay,
        component: ShippingPay,
    },
    {
        path: cartRoutes.paymentCart,
        component: PaymentCart,
    },
];

const privateRoute = [
    {
        path: privateRoutes.payInfo,
        component: PayInfo,
    },
];

const dashboardRouter = [
    {
        path: dashboardRoute.createProduct,
        component: CreateProduct,
    },
    {
        path: dashboardRoute.listProduct,
        component: ListProduct,
    },
    {
        path: dashboardRoute.createblog,
        component: CreateBlog,
    },
    {
        path: dashboardRoute.listblog,
        component: ListBlogs,
    },
];

export { publicRoutes, cartRoute, privateRoute, dashboardRouter };
