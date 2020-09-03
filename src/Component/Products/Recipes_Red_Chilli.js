import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import recipes_1 from "./img/recipes_1.webp";
import hero_recipes_redchilli from "./img/hero_recipes_redchilli.jpg";
import Spices_Details from "../Spices_Details.js";
const Recipes_Red_Chilli = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_recipes_redchilli} heroName="recipes" />
      <div className="ground_heading">
        <h3>
          <Title titleName="red chilli recipes" />
        </h3>
      </div>
      <Spices_Details
        image={recipes_1}
        content_1="vachi red chilli"
        content_2="recipes"
        content_3="Dried red pepper may be used whole or powdered. India is the largest producer of red chillies. As the name suggests it is red in color and can be consumed as it is or can be broken down and made into a powder. It is really spicy and the intense heat is concentrated in the seeds. Fresh red chillies are milder.Red chili's are usually grounded into a powder and used as a spice. Red chili's are dried or pickled in order to store them for a long period of time. It is a popular ingredient in most Indian dishes and curries."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Recipes_Red_Chilli;
