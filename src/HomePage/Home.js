import React from "react";
import HomeCarousel from "./HomeCarousel.js";
import "./Home.css";
import HomeProductGrid from "./HomeProductGrid.js";

function Home() {
  return (
    <div className="home">
      <HomeCarousel />
      <HomeProductGrid />
    </div>
  );
}

export default Home;
