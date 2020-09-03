import React from "react";
const Spices_Details = (props) => {
  return (
    <>
      <section className="spices_details">
        <div className="details_container">
          <div className="details_img">
            <img src={props.image} alt="spices_details" />
          </div>
          <div className="details_text">
            <h3>vachi spices</h3>
            <p className="details_para_first">{props.content_1}</p>
            <p className="details_para_second">
              <span>{props.content_2}:</span>
              <br />
              {props.content_3}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Spices_Details;
