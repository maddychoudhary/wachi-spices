import React, { useEffect } from "react";
import Title from "./Title.js";
import blog_video from "../images/blog_background.mp4";
const Blogcontent = () => {
  useEffect(() => {
    const update_blogCircle = () => {
      for (let a = 0; a < mainSlider.length; a++) {
        blogCircle.children[a].classList.remove("active");
      }
      blogCircle.children[blog_index].classList.add("active");
    };
    let mainSlider = document.querySelector(".blog_silider").children;
    let blogCircle = document.querySelector(".blog_circle");
    setInterval(blogSlide, 7700);
    let blog_index = 0;
    function blogSlide() {
      if (blog_index == mainSlider.length - 1) {
        blog_index = 0;
      } else {
        blog_index++;
      }
      for (let a = 0; a < mainSlider.length; a++) {
        mainSlider[a].classList.remove("active");
      }
      mainSlider[blog_index].classList.add("active");
      update_blogCircle();
    }

    (() => {
      for (let a = 0; a < mainSlider.length; a++) {
        let newElement = document.createElement("div");
        let newText = document.createTextNode("");
        newElement.appendChild(newText);
        blogCircle.appendChild(newElement);
        if (a == 0) {
          newElement.classList.add("active");
        }
      }
    })();
  });
  return (
    <React.Fragment>
      <section className="blog_section">
        <div className="blend_heading">
          <h3>
            <Title titleName="customers says" />
          </h3>
        </div>
        <div className="blog_container">
          <div className="blog_video">
            <video src={blog_video} type="video/mp4" autoPlay loop></video>
          </div>
          <div className="blog_text">
            <div className="blog_silider">
              <div className="blog_slide active">
                <p>
                  <q>
                    Keep up the great work – it truly is the Perfect Marwar
                    Spices! We use it in vegetables , roasted potatoes, and just
                    about anything else we make! Nothing else comes close!
                    Fantastic!!!
                  </q>
                </p>
                <h3>maddy choudhary</h3>
              </div>
              <div className="blog_slide ">
                <p>
                  <q>
                    We have been using your spice for somewhere around 3 years.
                    And couldn’t find your spice like yours anywhere! I searched
                    the internet, wrote you a letter and was desperate to find
                    you.
                  </q>
                </p>
                <h3>sonu chandeliya</h3>
              </div>
              <div className="blog_slide">
                <p>
                  <q>
                    I am so happy with all the products that I have obtained
                    from Marwar Spices. My last order was short the Red Chilly
                    powder. But I have been very happy with the length of time
                    to get the spices to me.
                  </q>
                </p>
                <h3>ayushi thakur</h3>
              </div>
            </div>
            <div className="blog_circle"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Blogcontent;
