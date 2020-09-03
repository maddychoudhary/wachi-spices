import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import carom_1 from "./img/carom_1.webp";
import hero_carom from "./img/hero_carom.jpg";
import Spices_Details from "../Spices_Details.js";
const Blend_Carom = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_carom} heroName="blend spices" />
      <div className="ground_heading">
        <h3>
          <Title titleName="carom spices" />
        </h3>
      </div>
      <Spices_Details
        image={carom_1}
        content_1="vachi carom spices"
        content_2="details"
        content_3="Ajwain seeds or carom seeds belong to the cumin family, Apiaceae. This plant is predominantly found in the regions of India and Pakistan and used as a spice. Carom seeds are egg-shaped and khaki coloured. Though by appearance, it looks like thyme, carom seed is more aromatic, bitter and pungent.A few flakes of carom seeds are enough to dominate the flavour of the dish. Popularly known as ajwain in India, it holds its importance in the Ayurveda and Unani medicine.Carom seeds combined with mustard oil act as a good mosquito repellent.
        Drinking a glass of water soaked with carom seeds can help reducing weight!"
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Blend_Carom;
