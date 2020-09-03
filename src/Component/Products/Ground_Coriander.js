import React from "react";
import Title from "../Title.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";
import Arrow from "../Arrow.js";
import coriander_1 from "./img/coriander_1.png";
import hero_coriander from "./img/hero_coriander.png";
import Spices_Details from "../Spices_Details.js";
const Ground_Coriander = () => {
  return (
    <React.Fragment>
      <Hero imageName={hero_coriander} heroName="ground spices" />
      <div className="ground_heading">
        <h3>
          <Title titleName="coriander powder" />
        </h3>
      </div>
      <Spices_Details
        image={coriander_1}
        content_1="vachi coriander powder"
        content_2="details"
        content_3="People use the seed for medicine. Coriander is used for digestion problems including upset stomach, loss of appetite, hernia, nausea, diarrhea, bowel spasms, and intestinal gas. It is also used to treat measles, hemorrhoids, toothaches, worms, and joint pain, as well as infections caused by bacteria and fungus.Some breast-feeding women use coriander to increase milk flow. In foods, coriander is used as a culinary spice and to prevent food poisoning.Early research suggests that drinking a specific tea containing fennel, senna, licorice, orange peel, cassia cinnamon, coriander, and ginger (Smooth Move by Traditional Medicinals) for one month can reduce constipation in older people.Early evidence suggests that, when used along with usual treatment, taking 30 drops of a product containing lemon balm, spearmint, and coriander three times daily after meals for 8 weeks reduces stomach pain and discomfort in people with IBS.
        In manufacturing, coriander is used as a flavoring agent in medicines and tobacco and as a fragrance in cosmetics and soaps."
      />
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default Ground_Coriander;
