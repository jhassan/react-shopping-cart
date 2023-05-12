import {React, useState} from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import HeaderBoxes from '../components/HeaderBoxes'
import Footer from '../components/Footer'
import CartList from '../components/CartList'

const Cart = () => {
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

        <CartList />

        <Footer />
        </div>  
    </>
  );
};

export default Cart