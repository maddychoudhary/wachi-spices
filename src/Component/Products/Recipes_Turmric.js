import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import recipes_2 from "./img/recipes_2.jpg";
import hero_recipes_turmeric from "./img/hero_recipes_turmeric.png";
import Spices_Details from "../Spices_Details.js";
const Recipes_Turmric = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_recipes_turmeric} heroName="recipes" />
      <div className="ground_heading">
        <h3>
          <Title titleName="turmeric recipes" />
        </h3>
      </div>
      <Spices_Details
        image={recipes_2}
        content_1="vachi turmeric powder"
        content_2="recipes"
        content_3=" India is a country of herbs and spices that are home grown and have more than one uses. With changing Indian seasons, our kitchen pantries also change the stock, but there are a few spices that remain in our kitchens all year long. One such spice is turmeric (haldi), a desi spice that is a treasure trove of various medicinal benefits, and thus, has been termed as our very own desi superfood.It is one such ingredient that has a permanent place inside every Indian kitchen. With a bright yellow-orange colour and a strong fragrance, turmeric has a unique earthy taste. Its primary compound is curcumin that is responsible for that wonderful yellow-orange tinge in curries."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Recipes_Turmric;
