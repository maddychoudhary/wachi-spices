import React, { useContext } from "react";
import Title from "./Title.js";
import Hero from "./Hero.js";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import hero_2 from "../images/hero_2.jpg";
import { myContext } from "../Global/ContextApi.js";
import { Link } from "react-router-dom";
const Products = () => {
  const { data_1, data_2, data_3 } = useContext(myContext);

  return (
    <React.Fragment>
      <Hero imageName={hero_2} heroName="products" />
      <div className="ground_section">
        <div className="ground_heading">
          <h3>
            <Title titleName="ground spices" />
          </h3>
        </div>
        <div className="ground_container">
          {data_1.map((item) => {
            return (
              <div className="ground_img_text" key={item.id}>
                <div className="ground_img">
                  <img src={item.image} alt="ground images" />
                </div>
                <div className="ground_text">
                  <h3>{item.desc}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Arrow />
      <div className="blend_section">
        <div className="blend_heading">
          <h3>
            <Title titleName="blend spices" />
          </h3>
        </div>
        <div className="blend_container">
          {data_2.map((item) => {
            return (
              <div className="blend_img_text">
                <div className="blend_img">
                  <img src={item.image} alt="blend images" />
                </div>
                <div className="blend_text">
                  <h3>{item.desc}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recipes_section">
        <div className="recipes_heading">
          <h3>
            <Title titleName="recipes " />
          </h3>
        </div>
        <div className="recipes_container">
          {data_3.map((item) => {
            return (
              <div className="recipes_img_text">
                <div className="recipes_img">
                  <img src={item.image} alt="recipes images" />
                </div>
                <div className="recipes_text">
                  <h3>{item.desc}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Products;
