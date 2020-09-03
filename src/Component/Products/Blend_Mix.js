import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import mix_1 from "./img/mix_1.jpg";
import hero_mix from "./img/hero_mix.jpg";
import Spices_Details from "../Spices_Details.js";
const Blend_Mix = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_mix} heroName="blend spices" />
      <div className="ground_heading">
        <h3>
          <Title titleName="mix spices" />
        </h3>
      </div>
      <Spices_Details
        image={mix_1}
        content_1="vachi mix blend"
        content_2="details"
        content_3="Like you, I know that a few spices and herbs will lift a dish from ordinary to spectacular but what I didn’t know was how to blend my own spices. In spice shops around the world we see traditional blends and I always wonder how they knew how much of each type of spice to add to get the blend to impart just the right flavour.Spices make our food taste good but they are also used for health reasons. According to Vicki, nigella seeds are the remedy for everything but death. Its healing properties are stronger than turmeric and work as a pain killer,"
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Blend_Mix;
