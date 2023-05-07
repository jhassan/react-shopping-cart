import { React, useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import ProductModal from "../components/ProductModal";
import Advertise from "../components/Advertise";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import NewArival from "../components/NewArival";

const Index = () => {
  const [showCategory, setshowCategory] = useState(false);
  const sideMenuBtn = () => {
    setshowCategory(true);
  };
  const sideMenuClose = () => {
    setshowCategory(false);
  };
  return (
    <>
      <Categories categories={sideMenuClose} />
      <div id="wrapper" className={showCategory ? "karl-side-menu-open" : ""}>
        <Header categories={sideMenuBtn} />

        <Banner />

        <ProductModal />

        <NewArival />

        <Advertise />

        <Testimonials />

        <Footer />
      </div>
    </>
  );
};

export default Index;
