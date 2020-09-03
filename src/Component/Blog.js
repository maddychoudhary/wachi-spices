import React from "react";
import hero_9 from "../images/hero_3.jpg";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import Hero from "./Hero.js";
import Blogcontent from "./Blogcontent.js";
const Blog = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_9} heroName="blog" />
      <Blogcontent />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Blog;
