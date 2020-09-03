import React from "react";
import All_Gallery from "./All_Gallery.js";
import Ground_Gallery from "./Ground_Gallery.js";
import Blend_Gallery from "./Blend_Gallery.js";
const Empty_Gallery = ({ match }) => {
  switch (true) {
    case match.params.slug == "all":
      return <All_Gallery />;
      break;
    case match.params.slug == "ground-spices":
      return <Ground_Gallery />;
      break;
    case match.params.slug == "blend-spices":
      return <Blend_Gallery />;
      break;
    default:
  }
  return <React.Fragment></React.Fragment>;
};
export default Empty_Gallery;
