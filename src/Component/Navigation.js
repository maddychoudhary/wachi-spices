import React, { useRef } from "react";
import { Link } from "react-router-dom";
import pic_logo from "../images/vachi.png";
const Navigation = () => {
  const homeNavRef = useRef();
  const aboutNavRef = useRef();
  const productsNavRef = useRef();
  const galleryNavRef = useRef();
  const ownerNavRef = useRef();
  const contactsNavRef = useRef();
  const timeRef = useRef();
  const barRef = useRef();
  const rightNavRef = useRef();

  const homeNav = () => {
    homeNavRef.current.style.borderBottom = "3px solid red";
    aboutNavRef.current.style.borderBottom = "none";
    productsNavRef.current.style.borderBottom = "none";
    galleryNavRef.current.style.borderBottom = "none";
    ownerNavRef.current.style.borderBottom = "none";
    contactsNavRef.current.style.borderBottom = "none";
  };
  const aboutNav = () => {
    homeNavRef.current.style.borderBottom = "none";
    aboutNavRef.current.style.borderBottom = "3px solid red";
    productsNavRef.current.style.borderBottom = "none";
    galleryNavRef.current.style.borderBottom = "none";
    ownerNavRef.current.style.borderBottom = "none";
    contactsNavRef.current.style.borderBottom = "none";
  };
  const productsNav = () => {
    homeNavRef.current.style.borderBottom = "none";
    aboutNavRef.current.style.borderBottom = "none";
    productsNavRef.current.style.borderBottom = "3px solid red";
    galleryNavRef.current.style.borderBottom = "none";
    ownerNavRef.current.style.borderBottom = "none";
    contactsNavRef.current.style.borderBottom = "none";
  };
  const galleryNav = () => {
    homeNavRef.current.style.borderBottom = "none";
    aboutNavRef.current.style.borderBottom = "none";
    productsNavRef.current.style.borderBottom = "none";
    galleryNavRef.current.style.borderBottom = "3px solid red";
    ownerNavRef.current.style.borderBottom = "none";
    contactsNavRef.current.style.borderBottom = "none";
  };
  const ownerNav = () => {
    homeNavRef.current.style.borderBottom = "none";
    aboutNavRef.current.style.borderBottom = "none";
    productsNavRef.current.style.borderBottom = "none";
    galleryNavRef.current.style.borderBottom = "none";
    ownerNavRef.current.style.borderBottom = "3px solid red";
    contactsNavRef.current.style.borderBottom = "none";
  };
  const contactsNav = () => {
    homeNavRef.current.style.borderBottom = "none";
    aboutNavRef.current.style.borderBottom = "none";
    productsNavRef.current.style.borderBottom = "none";
    galleryNavRef.current.style.borderBottom = "none";
    ownerNavRef.current.style.borderBottom = "none";
    contactsNavRef.current.style.borderBottom = "3px solid red";
  };
  const barHandleClick = () => {
    barRef.current.style.display = "none";
    timeRef.current.style.display = "block";
    rightNavRef.current.style.display = "block";
  };
  const timeHandleClick = () => {
    barRef.current.style.display = "block";
    timeRef.current.style.display = "none";
    rightNavRef.current.style.display = "none";
  };
  return (
    <React.Fragment>
      <div id="top"></div>
      <section className="nav_container">
        <div className="left_nav">
          <div className="logo_img">
            <Link to="/">
              <img src={pic_logo} alt="logo image" />
            </Link>
          </div>
          <div className="mobile_icon">
            <div className="bar_icon" ref={barRef} onClick={barHandleClick}>
              <i className="fas fa-bars"></i>
            </div>
            <div className="times_icon" ref={timeRef} onClick={timeHandleClick}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div className="right_nav" ref={rightNavRef}>
          <div className="right_nav_main_container">
            <div className="right_nav_container">
              <div className="home_nav">
                <Link
                  to="/"
                  className="active"
                  ref={homeNavRef}
                  onClick={homeNav}
                >
                  home
                </Link>
              </div>
              <div className="about_nav ">
                <Link to="About" onClick={aboutNav} ref={aboutNavRef}>
                  about
                </Link>
              </div>
              <div className="products_nav">
                <Link to="/Products" onClick={productsNav} ref={productsNavRef}>
                  products
                </Link>
                <div className="products_dropdown">
                  <div className="drop_ground">
                    <Link to="/products/Ground_Spices">ground spices</Link>
                  </div>
                  <div className="drop_blend">
                    <Link to="/products/Blend_Spices">blend spices</Link>
                  </div>
                  <div className="drop_recipe">
                    <Link to="/products/Recipes">recipes</Link>
                  </div>
                </div>
              </div>
              <div className="gallery_nav">
                <Link to="/Gallery" onClick={galleryNav} ref={galleryNavRef}>
                  gallery
                </Link>
              </div>
              <div className="owner_nav">
                <Link to="/Owner" onClick={ownerNav} ref={ownerNavRef}>
                  owner
                </Link>
                <div className="owner_dropdown">
                  <div className="drop_interview">
                    <Link to="/owner/Interview">interview</Link>
                  </div>
                  <div className="drop_blogs">
                    <Link to="/owner/Blog">blogs</Link>
                  </div>
                </div>
              </div>
              <div className="contacts_nav">
                <Link to="/Contacts" onClick={contactsNav} ref={contactsNavRef}>
                  contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="right_nav_search">
            <input type="search" placeholder="search" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Navigation;
