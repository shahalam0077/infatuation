import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './screen/Cart/component/cart';
import Checkout from './screen/Checkout/component/checkout';
import Footer from './screen/Footer/component/footer';
import Header from './screen/Header/component/header';
import Home from './screen/Home/component/homePage';
import ProductDetail from './screen/Product/component/productDetail';
import ProductList from './screen/Product/component/productList';
import About from './screen/About/component/about';
import ContactUs from './screen/Contact/component/contactUs';
import MyAccount from './screen/MyAccount/component/myAccount';
import Store from './screen/Store/component/store';
import './css/styles.css';
import LoginPage from './screen/Login/component/otpLogin';
import MyProfile from './screen/MyAccount/component/myAccount';
import MyOrder from './screen/Order/component/MyOrder';
import AboutUs from './screen/About/component/about';
import ProductPage from './screen/SingleProduct/component/singleProduct';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList showTitle={false} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart toggleDrawer={toggleDrawer} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/store" element={<Store />} />
          <Route path="/otp-login" element={<LoginPage />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/product-page" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
