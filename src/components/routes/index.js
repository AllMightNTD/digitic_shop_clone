import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import OurStore from '../../pages/OurStore';
import Cart from '../../pages/Cart';
import PayInfo from '../../pages/PayInfo';
import CartPage from '../../pages/CartPage';
import ShippingPay from '../../pages/ShippingPay';
import PaymentCart from '../../pages/PaymentCart';
import Login from '../../pages/Login';
import Blogs from '../../pages/Blogs';
import BlogsDetail from '../../pages/BlogsDetail';
import ProductsDetails from '../../pages/ProductsDetails';
import CompareProduct from '../../pages/CompareProduct';
import Wishlist from '../../pages/Wishlist';
import ForgotPassword from '../../pages/ForgotPassword';
import SignUp from '../../pages/SignUp';
import ResetPassword from '../../pages/ResetPassword';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import RefundPolicy from '../../pages/RefundPolicy';
import TermOfSerVice from '../../pages/TermOfSerVice';
import ShippingPolicy from '../../pages/ShippingPolicy';
import { dashboardRoute, routesPublic } from '../../config/routes';
import { cartRoutes } from '../../config/routes';
import { privateRoutes } from '../../config/routes';
import UpdateInfo from '../../pages/UpdateInfo';
import Dashboard from '../../pages/Dashboard';
import CreateProduct from '../../pages/CreateProduct';
import ListProduct from '../../pages/ListProduct';

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
];

export { publicRoutes, cartRoute, privateRoute, dashboardRouter };
