import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import turmric_1 from "./img/turmric_1.jpeg";
import hero_turmric from "./img/hero_turmric.jpg";
import Spices_Details from "../Spices_Details.js";
const Ground_Turmric = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_turmric} heroName="ground spices" />
      <div className="ground_heading">
        <h3>
          <Title titleName="turmric powder" />
        </h3>
      </div>
      <Spices_Details
        image={turmric_1}
        content_1="vachi turmeric powder"
        content_2="details"
        content_3="Turmeric and especially its most active compound curcumin have many scientifically-proven health benefits, such as the potential to prevent heart disease, Alzheimer's and cancer. It's a potent anti-inflammatory and antioxidant and may also help improve symptoms of depression and arthritis.Turmeric contains curcumin, a substance with powerful anti-inflammatory and antioxidant properties. Most studies used turmeric extracts that are standardized to include large amounts of curcumin.Chronic inflammation contributes to many common Western diseases. Curcumin can suppress many molecules known to play major roles in inflammation.Curcumin has powerful antioxidant effects. It neutralizes free radicals on its own but also stimulates your body's own antioxidant enzymes.Curcumin boosts levels of the brain hormone BDNF, which increases the growth of new neurons and fights various degenerative processes in your brain."
      />
      <Footer />
      <Arrow />
    </React.Fragment>
  );
};
export default Ground_Turmric;
