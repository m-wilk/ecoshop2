import HeaderTopSection from "../organism/header/HeaderTopSection";
import HeaderCenterSectionWtyczka from "../organism/header/HeaderCenterSectionWtyczka";
import HeaderBottomSectionWtyczka from "../organism/header/HeaderBottomSectionWtyczka";
import Newsletter from "../organism/newsletter/Newsletter";
import Footer from "../organism/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Product from "../pages/product/Product";

const Main = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSectionWtyczka />
      <HeaderBottomSectionWtyczka />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Main;
