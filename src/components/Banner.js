import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

const Banner = () => {
  return (
    <div>
      <section className="top-discount-area d-md-flex align-items-center">
        <div className="single-discount-area">
          <h5>Free Shipping &amp; Returns</h5>
          <h6>
            <a href="#">BUY NOW</a>
          </h6>
        </div>
        <div className="single-discount-area">
          <h5>20% Discount for all dresses</h5>
          <h6>USE CODE: Colorlib</h6>
        </div>
        <div className="single-discount-area">
          <h5>20% Discount for students</h5>
          <h6>USE CODE: Colorlib</h6>
        </div>
      </section>

      <section className="welcome_area">
        <div className="welcome_slides">
          <Carousel autoPlay={true} showArrows={false} owThumbs={false}>
            <div
              className="single_slide height-800 bg-img background-overlay"
              style={{ backgroundImage: "url('./img/bg-img/bg-1.jpg')" }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    <div className="welcome_slide_text">
                      <h6
                        data-animation="bounceInDown"
                        data-delay="0"
                        data-duration="500ms"
                      >
                        * Only today we offer free shipping
                      </h6>
                      <h2
                        data-animation="fadeInUp"
                        data-delay="500ms"
                        data-duration="500ms"
                      >
                        Fashion Trends
                      </h2>
                      <a
                        href="#"
                        className="btn karl-btn"
                        data-animation="fadeInUp"
                        data-delay="1s"
                        data-duration="500ms"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="single_slide height-800 bg-img background-overlay"
              style={{ backgroundImage: "url('./img/bg-img/bg-4.jpg')" }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    <div className="welcome_slide_text">
                      <h6
                        data-animation="fadeInDown"
                        data-delay="0"
                        data-duration="500ms"
                      >
                        * Only today we offer free shipping
                      </h6>
                      <h2
                        data-animation="fadeInUp"
                        data-delay="500ms"
                        data-duration="500ms"
                      >
                        Summer Collection
                      </h2>
                      <a
                        href="#"
                        className="btn karl-btn"
                        data-animation="fadeInLeftBig"
                        data-delay="1s"
                        data-duration="500ms"
                      >
                        Check Collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="single_slide height-800 bg-img background-overlay"
              style={{ backgroundImage: "url('./img/bg-img/bg-2.jpg')" }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    <div className="welcome_slide_text">
                      <h6
                        data-animation="fadeInDown"
                        data-delay="0"
                        data-duration="500ms"
                      >
                        * Only today we offer free shipping
                      </h6>
                      <h2
                        data-animation="bounceInDown"
                        data-delay="500ms"
                        data-duration="500ms"
                      >
                        Women Fashion
                      </h2>
                      <a
                        href="#"
                        className="btn karl-btn"
                        data-animation="fadeInRightBig"
                        data-delay="1s"
                        data-duration="500ms"
                      >
                        Check Collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="top_catagory_area d-md-flex clearfix">
        <div
          className="single_catagory_area d-flex align-items-center bg-img"
          style={{ backgroundImage: "url('./img/bg-img/bg-2.jpg')" }}
        >
          <div className="catagory-content">
            <h6>On Accesories</h6>
            <h2>Sale 30%</h2>
            <a href="#" className="btn karl-btn">
              SHOP NOW
            </a>
          </div>
        </div>
        <div
          className="single_catagory_area d-flex align-items-center bg-img"
          style={{ backgroundImage: "url('./img/bg-img/bg-3.jpg')" }}
        >
          <div className="catagory-content">
            <h6>in Bags excepting the new collection</h6>
            <h2>Designer bags</h2>
            <a href="#" className="btn karl-btn">
              SHOP NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
