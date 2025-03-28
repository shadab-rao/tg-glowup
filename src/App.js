import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/mainComponent/Main";
import ProductDetail from "./components/ProductDetail";
import MyWishlist from "./components/wishList/MyWishlist.jsx";
import ReferalProgram from "./components/ReferalProgram";
import Settings from "./components/Settings";
import AboutUs from "./components/AboutUs/AboutUs";
import Terms from "./components/termsAndConditions/Terms";
import HelpnSupport from "./components/HelpSupport/HelpnSupport";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Bag from "./components/Bag";
import CheckOut from "./components/Checkout/CheckOut";
import EditAddress from "./components/Address/EditAddress";
import MyAddress from "./components/Address/MyAddress";
import Profile from "./components/Profile/Profile";
import Login from "./components/auth/Login";
import Otp from "./components/auth/Otp";
import SuccessVerified from "./components/auth/SuccessVerified";
import ReferalCode from "./components/auth/ReferalCode";
import Filter from "./components/filter/Filter.jsx"
import RaiseQuery from "./components/HelpSupport/RaiseQuery.jsx";
import MyOrders from "./components/Order/MyOrders.jsx";
import OrderDetails from "./components/Order/OrderDetails.jsx";
import OrderCancelReason from "./components/Order/OrderCancelReason.jsx";
import AddAdress from "./components/Address/AddAdress.jsx";
import Brand from "./components/Brands/Brand.jsx"
import OfferProduct from "./components/Offer/OfferProduct.jsx";
import WriteReview from "./rating/WriteReview.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product-details/:id" element={<ProductDetail />} />
          <Route path="/my-order" element={<MyOrders/>} />
          <Route path="/my-order/reason-for-cancel" element={<OrderCancelReason/>} />
          <Route path="/my-order/details/:id" element={<OrderDetails/>} />
          <Route path="/my-address" element={<MyAddress/>} />
          <Route path="/my-wishlist" element={<MyWishlist/>} />
          <Route path="/referral-program" element={<ReferalProgram/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/terms-conditions" element={<Terms/>} />
          <Route path="/help-support" element={<RaiseQuery/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/your-bag" element={<Bag/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/edit-address/:id" element={<EditAddress/>} />
          <Route path="/add-address" element={<AddAdress/>} />
          <Route path="/my-profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/login/otp" element={<Otp/>} />
          <Route path="/login/otp/success" element={<SuccessVerified/>} />
          <Route path="/referral-code" element={<ReferalCode/>} />
          <Route path="/sub-category/:id" element={<Filter/>} />
          <Route path="/brands/:id" element={<Brand/>} />
          <Route path="/offers" element={<OfferProduct/>} />
          <Route path="/review/:id" element={<WriteReview/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
