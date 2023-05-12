import { React, useState, useEffect } from "react";
import ProductModal from "../components/ProductModal";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
// import { fetchProducts } from '../store/productSlice';
// import { STATUSES } from '../store/productSlice';

const NewArival = () => {
  const [newArrivals, setNewArrivals] = useState([])
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const fetchNewArrivalData = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('data', data);
        setNewArrivals(data)
      })
  }

  // Show Product Modal Details
  const showProductModal = (product) => {
    // console.log('product data', product);
    setData(product);
    setShow(product !== null);
  }
  // add to cart
  const handleAdd = (product) => {
    const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
    const arrayproduct =  JSON.parse(oldproduct);  
    if(arrayproduct.length === 0){
      arrayproduct.push(product);
    } else {
      arrayproduct.push(product);
    }
    localStorage.setItem('products', JSON.stringify(arrayproduct));
  };

  useEffect(() => {
    fetchNewArrivalData()
  }, [])
  return (
    <div>
      <section className="new_arrivals_area section_padding_100_0 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading text-center">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="karl-projects-menu mb-100">
          <div className="text-center portfolio-menu">
            <button className="btn active" data-filter="*">
              ALL
            </button>
            <button className="btn" data-filter=".women">
              WOMAN
            </button>
            <button className="btn" data-filter=".man">
              MAN
            </button>
            <button className="btn" data-filter=".access">
              ACCESSORIES
            </button>
            <button className="btn" data-filter=".shoes">
              shoes
            </button>
            <button className="btn" data-filter=".kids">
              KIDS
            </button>
          </div>
        </div>

        <div className="container">
        {newArrivals.length > 0 && (
          <div className="row karl-new-arrivals">
            {newArrivals?.map(product => (

            <div
              className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig"
              data-wow-delay="0.2s"
              key={product.id}
            >
              <div className="product-img">
                <img src={product?.image_link} alt="" />
                <div className="product-quicview">
                  <a href="#" onClick={() => showProductModal(product) } data-toggle="modal" data-target="#quickview">
                    <i className="ti-plus"></i>
                  </a>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">${product?.price}</h4>
                <p>{product?.name}</p>
                <a onClick={() => handleAdd(product)} className="add-to-cart-btn add-to-cart red">
                  ADD TO CART
                </a>
              </div>
            </div>
            ))}
          </div>
          )}    
        </div>
        {show === true && data !== null && (
          <ProductModal data={data} closeModal={() => showProductModal()}/>
        )}
      </section>
    </div>
  );
};

export default NewArival;
