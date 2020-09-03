import React, { useEffect } from "react";
import Hero from "./Hero.js";
import hero_3 from "../images/hero_3.jpg";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import Interviewcontent from "./Interviewcontent.js";
import Blogcontent from "./Blogcontent.js";
const Owner = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_3} heroName="owner" />
      <Interviewcontent />
      <Arrow />
      <Blogcontent />
      <Footer />
    </React.Fragment>
  );
};
export default Owner;
