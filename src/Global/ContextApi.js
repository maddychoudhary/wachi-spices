import React, { useState } from "react";
import ground_1 from "../images/ground_1.jpg";
import ground_2 from "../images/ground_2.jpg";
import ground_3 from "../images/ground_3.jpg";
import ground_4 from "../images/ground_4.jpg";

import blend_1 from "../images/blend_1.jpg";
import blend_2 from "../images/blend_2.jpg";
import blend_3 from "../images/blend_3.jpg";
import blend_4 from "../images/blend_4.jpg";

import recipes_1 from "../images/recipes_1.jpg";
import recipes_2 from "../images/recipes_2.jpg";
import recipes_3 from "../images/recipes_3.webp";
import recipes_4 from "../images/recipes_4.jpg";

import gallery_1 from "../images/gallery_1.png";
import gallery_2 from "../images/gallery_2.jpg";
import gallery_3 from "../images/gallery_3.jpg";
import gallery_4 from "../images/gallery_4.jpg";
import gallery_5 from "../images/gallery_5.jpg";
import gallery_6 from "../images/gallery_6.jpg";
import gallery_7 from "../images/gallery_7.jpg";
import gallery_8 from "../images/gallery_8.jpg";
export const myContext = React.createContext();

const ContextApi = (props) => {
  const [groundSpices] = useState([
    {
      id: 1,
      image: ground_1,
      desc: "red chilli",
      links_page: "Ground_Red_Chilli",
    },
    {
      id: 2,
      image: ground_2,
      desc: "turmric powder ",
      links_page: "Ground_Turmric",
    },
    {
      id: 3,
      image: ground_3,
      desc: "coriander powder",
      links_page: "Ground_Coriander",
    },
    { id: 4, image: ground_4, desc: "chilli", links_page: "Ground_Red_Chilli" },
  ]);
  const [blendSpices] = useState([
    { id: 1, image: blend_1, desc: "cumin powder", links_page: "Blend_Cumin" },
    { id: 2, image: blend_2, desc: "carom powder ", links_page: "Blend_Carom" },
    { id: 3, image: blend_3, desc: "mix spices", links_page: "Blend_Mix" },
    { id: 4, image: blend_4, desc: "mix spices", links_page: "Blend_Mix" },
  ]);
  const [recipes] = useState([
    {
      id: 1,
      image: recipes_1,
      desc: "recipe chilli powder",
      links_page: "Recipes_Red_Chilli",
    },
    {
      id: 2,
      image: recipes_2,
      desc: "recipe turmric powder ",
      links_page: "Recipes_Turmric",
    },
    {
      id: 3,
      image: recipes_3,
      desc: "recipe coriander powder",
      links_page: "Recipes_Coriander",
    },
    {
      id: 4,
      image: recipes_4,
      desc: "recipe cumin powder",
      links_page: "Recipes_Cumin",
    },
  ]);
  const [allGallery, setAllGallery] = useState([
    { id: 1, image: gallery_5, desc: "blend spices" },
    { id: 2, image: gallery_1, desc: "ground spices" },
    { id: 3, image: gallery_8, desc: "blend spices" },
    { id: 4, image: gallery_2, desc: "ground spices" },
    { id: 5, image: gallery_7, desc: "blend spices" },
    { id: 6, image: gallery_4, desc: "ground spices" },
    { id: 7, image: gallery_6, desc: "blend spices" },
    { id: 8, image: gallery_3, desc: "ground spices" },
  ]);
  const [groundGallery, setGroundGallery] = useState([
    { id: 1, image: gallery_1, desc: "ground spices" },
    { id: 2, image: gallery_2, desc: "ground spices" },
    { id: 3, image: gallery_3, desc: "ground spices" },
    { id: 4, image: gallery_4, desc: "ground spices" },
  ]);
  const [blendGallery, setBlendGallery] = useState([
    { id: 1, image: gallery_5, desc: "blend spices" },
    { id: 2, image: gallery_6, desc: "blend spices" },
    { id: 3, image: gallery_7, desc: "blend spices" },
    { id: 4, image: gallery_8, desc: "blend spices" },
  ]);
  return (
    <React.Fragment>
      <myContext.Provider
        value={{
          data_1: [...groundSpices],
          data_2: [...blendSpices],
          data_3: [...recipes],
          data_4: [...allGallery],
          data_5: [...groundGallery],
          data_6: [...blendGallery],
        }}
      >
        {props.children}
      </myContext.Provider>
    </React.Fragment>
  );
};
export default ContextApi;
