import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import slider_1 from "../images/slider_1.jpg";
import slider_2 from "../images/slider_2.jpg";
import slider_3 from "../images/slider_3.jpg";
import slider_4 from "../images/slider_4.jpg";
import slider_5 from "../images/slider_5.jpg";
const Slider = () => {
  useEffect(() => {
    //slider-start;
    let slider = document.querySelector(".sliders").children;
    let leftArrow = document.querySelector(".left_arrow");
    let rightArrow = document.querySelector(".right_arrow");
    let circleSlide = document.querySelector(".circle_slide");
    let slid = setInterval(slider_anim, 6900);
    let slide_index = 0;
    function slider_anim() {
      if (slide_index == slider.length - 1) {
        slide_index = 0;
      } else {
        slide_index++;
      }
      for (let a = 0; a < slider.length; a++) {
        slider[a].classList.remove("active");
      }
      slider[slide_index].classList.add("active");
      circleUpdateSlide();
    }
    function left_arrow() {
      if (slide_index == 0) {
        slide_index = slider.length - 1;
      } else {
        slide_index--;
      }
      for (let a = 0; a < slider.length; a++) {
        slider[a].classList.remove("active");
      }
      slider[slide_index].classList.add("active");
      circleUpdateSlide();
    }
    function right_arrow() {
      if (slide_index == slider.length - 1) {
        slide_index = 0;
      } else {
        slide_index++;
      }
      for (let a = 0; a < slider.length; a++) {
        slider[a].classList.remove("active");
      }
      slider[slide_index].classList.add("active");
      circleUpdateSlide();
    }
    leftArrow.addEventListener("click", left_arrow);
    rightArrow.addEventListener("click", right_arrow);

    function circle_update() {
      for (let a = 0; a < slider.length; a++) {
        let newElement = document.createElement("div");
        let newText = document.createTextNode("");
        newElement.appendChild(newText);
        circleSlide.appendChild(newElement);
        if (a == 0) {
          newElement.classList.add("active");
        }
      }
    }
    circle_update();
    function circleUpdateSlide() {
      for (let a = 0; a < slider.length; a++) {
        circleSlide.children[a].classList.remove("active");
      }
      circleSlide.children[slide_index].classList.add("active");
    }
  });
  return (
    <React.Fragment>
      <section className="slider_section">
        <div className="slider_container">
          <div className="sliders">
            <div className="slide active">
              <div className="slide_img ">
                <img className="bright" src={slider_2} alt="slider_1" />
              </div>
              <div className="slide_text">
                <h3>
                  real spices <br />
                  in india
                </h3>
              </div>
            </div>
            <div className="slide ">
              <div className="slide_img">
                <img className="bright " src={slider_3} alt="slider_2" />
              </div>
              <div className="slide_text">
                <h3>
                  Variety's the very spice of life, <br />
                  That gives it all its flavor.
                </h3>
              </div>
            </div>
            <div className="slide ">
              <div className="slide_img">
                <img className="bright " src={slider_1} alt="slider_3" />
              </div>
              <div className="slide_text">
                <h3>
                  Spice a dish with love and <br />
                  it pleases every palate.
                </h3>
              </div>
            </div>
            <div className="slide">
              <div className="slide_img">
                <img className="bright " src={slider_4} alt="slider_4" />
              </div>
              <div className="slide_text">
                <h3>
                  He who controls the spice <br />
                  controls the universe.
                </h3>
              </div>
            </div>
            <div className="slide">
              <div className="slide_img">
                <img className="bright " src={slider_5} alt="slider_5" />
              </div>
              <div className="slide_text">
                <h3>
                  Words are like spices. <br />
                  Too many is worse than too few.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_arrow">
          <div className="left_arrow">
            <i class="fas fa-arrow-left"></i>
          </div>
          <div className="right_arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="circle_slide"></div>
      </section>
    </React.Fragment>
  );
};
export default Slider;
