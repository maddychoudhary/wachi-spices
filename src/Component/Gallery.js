import React from "react";
import Hero from "./Hero.js";
import Title from "./Title.js";
import Empty_Gallery from "./Empty_Gallery.js";
import { Switch, Route, Link } from "react-router-dom";
import hero_6 from "../images/hero_6.jpg";

const Gallery = ({ match, location, history }) => {
  return (
    <React.Fragment>
      <Hero imageName={hero_6} heroName="gallery" />
      <div className="blend_heading">
        <h3>
          <Title titleName="spices" />
        </h3>
      </div>
      <div className="gallery_menu">
        <Link to={`${match.path}/all`}>all</Link>
        <Link to={`${match.path}/ground-spices`}>ground spices</Link>
        <Link to={`${match.path}/blend-spices`}>blend spices</Link>
      </div>
      <Switch>
        <Route path={`${match.path}/:slug`} component={Empty_Gallery} />
        {/*<Route path={`${match.path}/all`} component={All_Gallery} />
        <Route
          path={`${match.path}/ground-spices`}
          component={Ground_Gallery}
        />
  <Route path={`${match.path}/blend-spices`} component={Blend_Gallery} /> yha pr dynemic ni h*/}
      </Switch>
    </React.Fragment>
  );
};
export default Gallery;
