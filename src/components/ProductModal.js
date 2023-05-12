import React from "react";

const ProductModal = ({ data, closeModal }) => {
  console.log("data", data);
  return (
    <div>
      <div
        className="modal fade"
        id="quickview"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="quickview"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close btn"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="modal-body">
              <div className="quickview_body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-5">
                      <div className="quickview_pro_img">
                        <img src={data?.image_link} alt="" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="quickview_pro_des">
                        <h4 className="title">{data?.name}</h4>
                        <div className="top_seller_product_rating mb-15">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <h5 className="price">
                          ${data?.price}
                        </h5>
                        <p>
                          {data?.description}
                        </p>
                        <a href="#">View Full Product Details</a>
                      </div>
                      <form className="cart" method="post">
                        <div className="quantity">
                          <span className="qty-minus">
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </span>

                          <input
                            readOnly
                            type="number"
                            className="qty-text"
                            id="qty"
                            step="1"
                            min="1"
                            max="12"
                            name="quantity"
                            value=""
                          />

                          <span className="qty-plus">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </span>
                        </div>
                        <button
                          type="submit"
                          name="addtocart"
                          value=""
                          className="cart-submit"
                        >
                          Add to cart
                        </button>
                        <div className="modal_pro_wishlist">
                          <a href="wishlist.html" target="_blank">
                            <i className="ti-heart"></i>
                          </a>
                        </div>
                        <div className="modal_pro_compare">
                          <a href="compare.html" target="_blank">
                            <i className="ti-stats-up"></i>
                          </a>
                        </div>
                      </form>

                      <div className="share_wf mt-30">
                        <p>Share With Friend</p>
                        <div className="_icon">
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
