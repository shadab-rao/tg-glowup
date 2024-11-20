import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/mainComponent/Main";
import ProductDetail from "./components/ProductDetail";
import MyOrders from "./components/MyOrders";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product-details/:id" element={<ProductDetail />} />
          <Route path="/my-order" element={<MyOrders/>} />
          <Route path="/my-address" element={<MyAddress/>} />
          <Route path="/my-wishlist" element={<MyWishlist/>} />
          <Route path="/referral-program" element={<ReferalProgram/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/terms-conditions" element={<Terms/>} />
          <Route path="/help-support" element={<HelpnSupport/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/your-bag" element={<Bag/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/edit-address" element={<EditAddress/>} />
          <Route path="/my-profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/login/otp" element={<Otp/>} />
          <Route path="/login/otp/success" element={<SuccessVerified/>} />
          <Route path="/referral-code" element={<ReferalCode/>} />
          <Route path="/sub-category/:id" element={<Filter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
