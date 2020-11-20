import React from "react";
import HomeCarousel from "./HomeCarousel.js";
import "./Home.css";
import ProductGrid from "./ProductGrid.js";

function Home() {
  return (
    <div className="home">
      <HomeCarousel />
      <ProductGrid />
    </div>
  );
}

export default Home;
