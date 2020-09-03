import React from "react";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import Hero from "./Hero.js";
import hero_4 from "../images/hero_4.jpg";
import Interviewcontent from "./Interviewcontent.js";
const Interview = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_4} heroName="interview" />
      <Interviewcontent />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Interview;
