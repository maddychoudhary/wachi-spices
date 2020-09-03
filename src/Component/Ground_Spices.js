import React, { useContext } from "react";
import Hero from "./Hero.js";
import Title from "./Title.js";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import hero_5 from "../images/hero_5.jpg";
import { myContext } from "../Global/ContextApi.js";
import { Link } from "react-router-dom";
const Ground_Spices = () => {
  const { data_1, data_2, data_3 } = useContext(myContext);
  return (
    <React.Fragment>
      <Hero imageName={hero_5} heroName="ground spices" />
      <div className="ground_section">
        <div className="ground_heading">
          <h3>
            <Title titleName="ground spices" />
          </h3>
        </div>
        <div className="ground_container">
          {data_1.map((item) => {
            return (
              <div className="ground_img_text">
                <div className="ground_img">
                  <img src={item.image} alt="ground images" />
                </div>
                <div className="ground_text">
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
export default Ground_Spices;
