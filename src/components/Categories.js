import React from "react";
import { Outlet, Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <div>
      <div className="catagories-side-menu">
        <div id="sideMenuClose" onClick={props.categories}>
          <i className="ti-close"></i>
        </div>

        <div className="nav-side-menu">
          <div className="menu-list">
            <h6>Categories</h6>
            <ul id="menu-content" className="menu-content collapse out">
              <li
                data-toggle="collapse"
                data-target="#blush"
                className="collapsed active"
              >
                <a href="#">
                  Blush <span className="arrow"></span>
                </a>
                <ul className="sub-menu collapse" id="blush">
                  <li>
                    <Link
                      to={{
                        pathname: "/details",
                        search: `?product_category=powder&product_type=blush`, // inject code value into template
                      }}
                    >
                      Powder
                    </Link>
                  </li>
                  <li>
                    <a href="product_category=powder&product_type=cream">
                      Cream
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-toggle="collapse"
                data-target="#bronzer"
                className="collapsed"
              >
                <a href="#">
                  Bronzer <span className="arrow"></span>
                </a>
                <ul className="sub-menu collapse" id="bronzer">
                  <li>
                    <a href="product_category=powder&product_type=bronzer">
                      Powder
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-toggle="collapse"
                data-target="#eyebrow"
                className="collapsed"
              >
                <a href="#">
                  Eyebrow <span className="arrow"></span>
                </a>
                <ul className="sub-menu collapse" id="eyebrow">
                  <li>
                    <a href="product_category=pencil&product_type=eyebrow">
                      Pencil
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-toggle="collapse"
                data-target="#eyeliner"
                className="collapsed"
              >
                <a href="#">
                  Eyeliner <span className="arrow"></span>
                </a>
                <ul className="sub-menu collapse" id="eyeliner">
                  <li>
                    <a href="product_category=liquid&product_type=eyeliner">
                      Liquid
                    </a>
                  </li>
                  <li>
                    <a href="product_category=pencil&product_type=eyeliner">
                      Pencil
                    </a>
                  </li>
                  <li>
                    <a href="product_category=gel&product_type=eyeliner">Gel</a>
                  </li>
                  <li>
                    <a href="product_category=cream&product_type=eyeliner">
                      Cream
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-toggle="collapse"
                data-target="#eyeshadow"
                className="collapsed"
              >
                <a href="#">
                  Eyeshadow <span className="arrow"></span>
                </a>
                <ul className="sub-menu collapse" id="eyeshadow">
                  <li>
                    <a href="product_category=palette&product_type=eyeshadow">
                      Palette
                    </a>
                  </li>
                  <li>
                    <a href="product_category=pencil&product_type=eyeshadow">
                      Pencil
                    </a>
                  </li>
                  <li>
                    <a href="product_category=cream&product_type=eyeshadow">
                      Cream
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-toggle="collapse"
                data-target="#foundation"
                className="collapsed"
              >
                <a href="#">
                  Foundation <span className="arrow"></span>
                </a>
                <ul className="sub-menu collapse" id="foundation">
                  <li>
                    <a href="product_category=concealer&product_type=foundation">
                      Concealer
                    </a>
                  </li>
                  <li>
                    <a href="product_category=liquid&product_type=foundation">
                      Liquid
                    </a>
                  </li>
                  <li>
                    <a href="product_category=contour&product_type=foundation">
                      Contour
                    </a>
                  </li>
                  <li>
                    <a href="product_category=bb_cc&product_type=foundation">
                      Bb cc
                    </a>
                  </li>
                  <li>
                    <a href="product_category=cream&product_type=foundation">
                      Cream
                    </a>
                  </li>
                  <li>
                    <a href="product_category=mineral&product_type=foundation">
                      Mineral
                    </a>
                  </li>
                  <li>
                    <a href="product_category=powder&product_type=foundation">
                      Powder
                    </a>
                  </li>
                  <li>
                    <a href="product_category=highlighter&product_type=foundation">
                      Highlighter
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
