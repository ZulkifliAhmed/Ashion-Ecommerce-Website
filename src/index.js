import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Products from "./components/3-products/products";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Products />
  </React.StrictMode>
);
