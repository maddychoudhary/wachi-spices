import React from "react";
import Title from "./Title.js";

const Hero = (props) => {
  return (
    <React.Fragment>
      <div className="hero_container">
        <div className="hero_img">
          <img src={props.imageName} alt="hero_img" />
        </div>
        <div className="hero_text">
          <h3>{props.heroName}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Hero;
