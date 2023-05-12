import { React, useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import Advertise from "../components/Advertise";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import NewArival from "../components/NewArival";
import HeaderBoxes from "../components/HeaderBoxes";

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

        <HeaderBoxes />

        <Banner />

        <NewArival />

        <Advertise />

        <Testimonials />

        <Footer />
      </div>
    </>
  );
};

export default Index;
