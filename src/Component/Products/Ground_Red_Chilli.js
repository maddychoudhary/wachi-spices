import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import red_chilli_1 from "./img/red_chilli_1.png";
import hero_red from "./img/hero_red.jpg";
import Spices_Details from "../Spices_Details.js";
const Ground_Red_Chilli = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_red} heroName="ground spices" />
      <div className="ground_heading">
        <h3>
          <Title titleName="red chilli" />
        </h3>
      </div>
      <Spices_Details
        image={red_chilli_1}
        content_1="vachi red chilli powder"
        content_2="details"
        content_3="Red chilli powder can set the taste buds on fire, and sometimes
        the tummy too! It is basically a spice blend consisting of one or
        two types of dried red chillies that are ground and pulverized
        into a fine powder. It is generally used to add spice to otherwise
        bland foods.Red chilli powder can set the taste buds on fire, and
        sometimes the tummy too! It is basically a spice blend consisting
        of one or two types of dried red chillies that are ground and
        pulverized into a fine powder. It is generally used to add spice
        to otherwise bland foods.Red chilli powder can set the taste buds
        on fire, and sometimes the tummy too! It is basically a spice
        blend consisting of one or two types of dried red chillies that
        are ground and pulverized into a fine powder. It is generally used
        to add spice to otherwise bland foods."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Ground_Red_Chilli;
