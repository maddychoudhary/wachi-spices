import React from "react";
import Title from "./Title.js";
import home_video from "../images/home_video.mp4";
import home7 from "../images/home_gallery_7.jpg";
const Interviewcontent = () => {
  return (
    <React.Fragment>
      <section className="interview_section">
        <div className="blend_heading">
          <h3>
            <Title titleName="owner interview" />
          </h3>
        </div>
        <div className="inter_container">
          <video
            src={home_video}
            type="video/mp4"
            controls
            poster={home7}
          ></video>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Interviewcontent;
