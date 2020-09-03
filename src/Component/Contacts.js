import React from "react";
import Hero from "./Hero.js";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import hero_8 from "../images/hero_8.jpg";
import Form_2 from "./Form_2.js";
const Contacts = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_8} heroName="contacts" />
      <Form_2 />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Contacts;
