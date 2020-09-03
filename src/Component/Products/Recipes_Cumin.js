import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import recipes_4 from "./img/recipes_4.jpg";
import hero_recipes_cumin from "./img/hero_recipes_cumin.jpg";
import Spices_Details from "../Spices_Details.js";
const Recipes_Cumin = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_recipes_cumin} heroName="recipes" />
      <div className="ground_heading">
        <h3>
          <Title titleName="cumin recipes" />
        </h3>
      </div>
      <Spices_Details
        image={recipes_4}
        content_1="vachi cumin"
        content_2="recipes"
        content_3="Cumin Powder or ground cumin (also known as Jeera Powder) is made by powdering dry roasted cumin seeds in a grinder. This homemade powder might appear ordinary but it has the magical powers to completely change the taste of a drink or a dish. Here is how to make it at home.Known as Cuminum Cyminum, cumin is obtained from a flowering plant that is majorly grown in India, North Africa, and the Middle East. These cumin seeds are then dried and powdered just like chilli powder is made from dried red chillies and then used in various cuisines."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Recipes_Cumin;
