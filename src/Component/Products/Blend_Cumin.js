import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import cumin_1 from "./img/cumin_1.jpg";
import hero_cumin from "./img/hero_cumin.jpg";
import Spices_Details from "../Spices_Details.js";
const Blend_Cumin = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_cumin} heroName="blend spices" />
      <div className="ground_heading">
        <h3>
          <Title titleName="cumin spices" />
        </h3>
      </div>
      <Spices_Details
        image={cumin_1}
        content_1="vachi cumin spices"
        content_2="details"
        content_3="Cumin is a spice made from the dried seed of a plant known as Cuminum cyminum, which is a member of the parsley family. Cumin is one of the most popular spices and is commonly used in Latin American, Middle Eastern, North African, and Indian cuisines, among many others.Cumin is a spice made from the dried seed of a plant known as Cuminum cyminum, which is a member of the parsley family. Cumin is one of the most popular spices and is commonly used in Latin American, Middle Eastern, North African, and Indian cuisines, among many others. It is available both as whole seeds as well as in ground form.Since ancient times, cumin has been used extensively in India as well as by the Greeks and Romans. It made its way into Mexican and South American cuisine after European colonization, brought by the Spanish and Portuguese."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Blend_Cumin;
