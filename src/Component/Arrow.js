import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Arrow = () => {
  return (
    <React.Fragment>
      <section className="arrow_section">
        <div className="upper_arrow">
          <AnchorLink href="#top">
            <i className="fas fa-arrow-up"></i>
          </AnchorLink>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Arrow;
