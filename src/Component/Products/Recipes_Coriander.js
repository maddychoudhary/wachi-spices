import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import recipes_3 from "./img/recipes_3.jpg";
import hero_recipes_coriander from "./img/hero_recipes_coriander.jpg";
import Spices_Details from "../Spices_Details.js";
const Recipes_Coriander = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_recipes_coriander} heroName="recipes" />
      <div className="ground_heading">
        <h3>
          <Title titleName="coriander recipes" />
        </h3>
      </div>
      <Spices_Details
        image={recipes_3}
        content_1="vachi coriander powder"
        content_2="recipes"
        content_3="Home made spice powders Have a longer shelf life and also remain fresh. There is no additive or preservative added and they really bring out the flavors & aroma in the food.When I was a kid, my mom would tell me that readymade coriander powder is adulterated with horse-dung. And this was so many years ago… Just imagine now what it would be. As a result my mother would make all the Indian spice powders at home from scratch."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Recipes_Coriander;
