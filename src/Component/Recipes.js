import React, { useContext } from "react";
import Hero from "./Hero.js";
import Title from "./Title.js";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import { myContext } from "../Global/ContextApi.js";
import hero_11 from "../images/hero_11.jpg";
import { Link } from "react-router-dom";
const Recipes = () => {
  const { data_1, data_2, data_3 } = useContext(myContext);
  return (
    <React.Fragment>
      <Hero imageName={hero_11} heroName="recipes" />

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
export default Recipes;
