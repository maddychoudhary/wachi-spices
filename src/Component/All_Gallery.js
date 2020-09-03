import React, { useContext } from "react";
import Footer from "./Footer.js";
import Arrow from "./Arrow.js";
import { myContext } from "../Global/ContextApi.js";
const All_Gallery = () => {
  const { data_4 } = useContext(myContext);
  return (
    <React.Fragment>
      <div className="ground_section">
        <div className="ground_container">
          {data_4.map((item) => {
            return (
              <div className="ground_img_text" key={item.id}>
                <div className="ground_img">
                  <img src={item.image} alt="ground images" />
                </div>
                <div className="ground_text">
                  <h3>{item.desc}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Arrow />
      <Footer />
    </React.Fragment>
  );
};
export default All_Gallery;
