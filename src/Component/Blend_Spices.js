import React, { useContext } from "react";
import Hero from "./Hero.js";
import Title from "./Title.js";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import { myContext } from "../Global/ContextApi.js";
import hero_10 from "../images/hero_10.jpg";
import { Link } from "react-router-dom";
const Blend_Spices = () => {
  const { data_1, data_2, data_3 } = useContext(myContext);
  return (
    <React.Fragment>
      <Hero imageName={hero_10} heroName="blend spices" />
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
                  <Link to={item.links_page}>read more</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Blend_Spices;
