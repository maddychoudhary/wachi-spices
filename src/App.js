import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Component/Navigation.js";
import Home from "./Component/Home.js";
import About from "./Component/About.js";
import Products from "./Component/Products.js";
import Ground_Spices from "./Component/Ground_Spices.js";
import Blend_Spices from "./Component/Blend_Spices.js";
import Recipes from "./Component/Recipes.js";
import Ground_Red_Chilli from "./Component/Products/Ground_Red_Chilli.js";
import Ground_Turmric from "./Component/Products/Ground_Turmric.js";
import Ground_Coriander from "./Component/Products/Ground_Coriander.js";
import Blend_Cumin from "./Component/Products/Blend_Cumin.js";
import Blend_Carom from "./Component/Products/Blend_Carom.js";
import Blend_Mix from "./Component/Products/Blend_Mix.js";
import Recipes_Red_Chilli from "./Component/Products/Recipes_Red_Chilli.js";
import Recipes_Turmric from "./Component/Products/Recipes_Turmric.js";
import Recipes_Coriander from "./Component/Products/Recipes_Coriander.js";
import Recipes_Cumin from "./Component/Products/Recipes_Cumin.js";
import Gallery from "./Component/Gallery.js";
import Owner from "./Component/Owner.js";
import Interview from "./Component/Interview.js";
import Blog from "./Component/Blog.js";
import Contacts from "./Component/Contacts.js";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Products} />

          <Route path="/products/Ground_Spices" component={Ground_Spices} />
          <Route path="/products/blend_spices" component={Blend_Spices} />
          <Route path="/products/recipes" component={Recipes} />

          <Route
            path="/products/ground_red_chilli"
            component={Ground_Red_Chilli}
          />
          <Route path="/products/ground_turmric" component={Ground_Turmric} />
          <Route
            path="/products/ground_coriander"
            component={Ground_Coriander}
          />
          <Route path="/products/blend_cumin" component={Blend_Cumin} />
          <Route path="/products/blend_carom" component={Blend_Carom} />
          <Route path="/products/blend_mix" component={Blend_Mix} />
          <Route
            path="/products/recipes_Red_chilli"
            component={Recipes_Red_Chilli}
          />
          <Route path="/products/recipes_turmric" component={Recipes_Turmric} />
          <Route
            path="/products/recipes_coriander"
            component={Recipes_Coriander}
          />
          <Route path="/products/recipes_cumin" component={Recipes_Cumin} />

          <Route path="/gallery" component={Gallery} />
          <Route path="/owner" exact component={Owner} />

          <Route path="/owner/interview" component={Interview} />
          <Route path="/owner/blog" component={Blog} />

          <Route path="/contacts" component={Contacts} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
export default App;
