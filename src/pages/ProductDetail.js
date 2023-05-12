import { React, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Categories from "../components/Categories";
import Header from "../components/Header";
import HeaderBoxes from "../components/HeaderBoxes";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetail = (props) => {
  const [searchParams] = useSearchParams();
  const product_category = searchParams.get("product_category");
  const product_type = searchParams.get("product_type");
  console.log("product_category", product_category);
  console.log("product_type", product_type);

  let [showCategory, setshowCategory] = useState(false);
  const sideMenuBtn = () => {
    setshowCategory(true);
  };
  const sideMenuClose = () => {
    setshowCategory(false);
  };
  // showCategory = showCategory ? setshowCategory(props.isShowCategory) : showCategory
  console.log("showCategory", showCategory);
  return (
    <>
      <Categories categories={sideMenuClose} />
      <div id="wrapper" className={showCategory ? "karl-side-menu-open" : ""}>
        <Header categories={sideMenuBtn} />

        <HeaderBoxes />

        <SingleProduct />

        <RelatedProducts />

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
