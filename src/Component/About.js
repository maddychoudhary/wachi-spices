import React from "react";
import Hero from "./Hero.js";
import Arrow from "./Arrow.js";
import Footer from "./Footer.js";
import "../App.css";
import hero_1 from "../images/hero_1.jpg";
import about_0 from "../images/home_gallery_7.jpg";
import about_1 from "../images/vachi.png";
import about_2 from "../images/about_2.jpg";
import about_3 from "../images/about_3.jpg";
import about_4 from "../images/about_4.png";
import about_5 from "../images/about_5.jpg";
import about_6 from "../images/about_6.png";
import about_7 from "../images/about_7.png";
const About = () => {
  const aboutDetails = [
    {
      image_0: about_0,
      image_1: about_1,
      details:
        "VACHI Today has a range of 10 products available in over 30 different packages Designed to cater to the varied needs of consumers all over the country.",
    },
    {
      image: about_2,
      details:
        "VACHI Pvt. Ltd. has set up one state of the art plants for meeting the ever growing demand. The company procures raw material directly from the centers of produce to maintain uniform taste and quality. The raw material is first cleaned, dried and tested with the help of special machines. It is then carefully grounded into the finished product passing through various stages. ",
    },
    {
      image: about_3,
      details:
        "VACHI takes special care in selectingthe raw material for the groundsingle spices category. This providesthe consumer with spices made from the choicest raw material maintaining the highest processing standards.Starting with manually ground spices, VACHI soon switched over to automatic machines to meet the fast growing demand for VACHI Spices. ",
    },
    {
      image: about_4,
      details:
        "Blended spices are a class apart. Each blend has been specially formulated to impart the genuine taste to various Indian food preparations. Decades of research has gone into preparing these blends needed in specific and classical Indian dishes. Indian traditional cookery is free of preservatives and artificial flavour enhancers. VACHI does not use these synthetics.",
    },
    {
      image: about_5,
      details:
        "VACHI Pvt Ltd. has set up one state,Rajasthan of the art plants for meeting theever growing demand. The company procures raw material directly from the centres of produce to maintain uniform taste and quality. The raw material is first cleaned, dried and tested with the help of special machines. It is then carefully groundedinto the finished product passing through various stages. ",
    },
    {
      image: about_6,
      details:
        "The powdered spices are again tested atthe fully equipped quality control laboratories,to ensure the best quality standards. They arethen packed mechanically into packs of variousproportions without any human touch.Further, well equipped research and development laboratories work incessantly todevelop new spice blends of spices. Vivek Runthala Ji leads from the front, taking keen interest in creation of new products.",
    },
    {
      image: about_7,
      details:
        "Today VACHI spices and blends are popular not just in India but also around the country and the products are being exported to the haryana,Uttar Pardesh,Madhya Pardesh,maharastra and punjab,Gujarat,Bihar,Assam,Chhattisgarh,Arunachal Pradesh and Goa. Company have own offices in Gujrat and a state of art manufacturing unit at maharastra.",
    },
  ];

  return (
    <React.Fragment>
      <Hero imageName={hero_1} heroName="about us" />
      <div className="section_about_1">
        <div className="images_0_1">
          <img
            className="owner_0"
            src={aboutDetails[0].image_0}
            alt="about owner image"
          />
          <img
            className="owner_1"
            src={aboutDetails[0].image_1}
            alt="about owner image"
          />
        </div>
        <div className="about_text_0_1">
          <p>{aboutDetails[0].details}</p>
        </div>
      </div>
      <Arrow />
      <section className="about_section">
        <div className="about_container">
          <div className="section_about_2">
            <div className="images_2">
              <img src={aboutDetails[1].image} alt="about owner image" />
            </div>
            <div className="about_text_2">
              <p>{aboutDetails[1].details}</p>
            </div>
          </div>
          <div className="section_about_3">
            <div className="about_text_3">
              <p>{aboutDetails[2].details}</p>
            </div>
            <div className="images_3">
              <img src={aboutDetails[2].image} alt="about owner image" />
            </div>
          </div>
          <div className="section_about_4">
            <div className="images_4">
              <img src={aboutDetails[3].image} alt="about owner image" />
            </div>
            <div className="about_text_4">
              <p>{aboutDetails[3].details}</p>
            </div>
          </div>
          <div className="section_about_5">
            <div className="about_text_5">
              <p>{aboutDetails[4].details}</p>
            </div>
            <div className="images_5">
              <img src={aboutDetails[4].image} alt="about owner image" />
            </div>
          </div>
          <div className="section_about_6">
            <div className="images_6">
              <img src={aboutDetails[5].image} alt="about owner image" />
            </div>
            <div className="about_text_6">
              <p>{aboutDetails[5].details}</p>
            </div>
          </div>
          <div className="section_about_7">
            <div className="about_text_7">
              <p>{aboutDetails[6].details}</p>
            </div>
            <div className="images_7">
              <img src={aboutDetails[6].image} alt="about owner image" />
            </div>
          </div>
        </div>
      </section>
      <section className="home_footer">
        <Footer />
      </section>
    </React.Fragment>
  );
};
export default About;
