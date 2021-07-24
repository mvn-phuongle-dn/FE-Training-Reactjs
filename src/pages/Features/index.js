import React from 'react';
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import AboutUs from './AboutUs';
import { Switch, Route } from "react-router-dom";

const Features = () => {
  return(
    <>
      <Switch>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route path="/about-us">
          <AboutUs/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
export default Features;
