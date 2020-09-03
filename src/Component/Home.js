import React, { useState } from "react";
import Slider from "./Slider.js";
import Arrow from "./Arrow.js";
import Title from "./Title.js";
import Footer from "./Footer.js";
import home1 from "../images/home_gallery_1.jpg";
import home2 from "../images/home_gallery_2.jpg";
import home3 from "../images/home_gallery_3.jpg";
import home4 from "../images/home_gallery_4.jpg";
import home5 from "../images/home_gallery_5.jpg";
import home7 from "../images/home_gallery_7.jpg";
import home_video from "../images/home_video.mp4";

const Home = () => {
  const [homeGallery] = useState([
    { image: home1, title: "vachi spices" },
    { image: home3, title: "vachi spices" },
    { image: home4, title: "vachi spices" },
    { image: home2, title: "vachi spices" },
    { image: home5, title: "vachi spices" },
  ]);
  return (
    <React.Fragment>
      <Slider />
      <Arrow />
      <section className="home_para">
        <div className="home_para_heading">
          <Title titleName="welcome to vachi spices" />
        </div>
        <div className="home_para_media_container">
          <div className="home_text">
            <p>
              Spices have a long and ancient history, especially in
              Rajasthan,India, where they are a part of life and heritage. In
              every home and in every province across the country, different
              spices and blends are used to create different and distinctive
              tastes in dishes. Several decades ago, housewives used to grind
              their spices manually at home and make their own blends for use in
              their cooking. To make this process easier for the housewife,
              'VIVEK RUNTHALA' (VACHI) visualised the concept of ready-to-use
              ground spices.
            </p>
            <p>
              Starting with manually ground spices, VACHI soon switched over to
              automatic machines to meet the fast growing demand for VACHI
              Spices. So much so today spices worth crores of rupees are
              manufactured and packed by modern machines. These machines now
              have a capacity of producing 30 tones of spices in powders packed
              in beautiful consumer pack of different sizes (100g to 1kg) in a
              day.
            </p>
          </div>
          <div className="home_media_heading">
            <Title titleName="sudh desi masale" />
          </div>
          <div className="home_img_video">
            <div className="home_images">
              {homeGallery.map((item) => {
                return (
                  <div className="home_img">
                    <img src={item.image} alt="home_gallery" />
                    <h3>{item.title}</h3>
                  </div>
                );
              })}
            </div>
            <div className="home_video">
              <video controls="controls" poster={home7}>
                <source src={home_video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="home_footer">
        <Footer />
      </section>
    </React.Fragment>
  );
};
export default Home;
