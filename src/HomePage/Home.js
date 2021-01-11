import React from "react";
import HomeCarousel from "./HomeCarousel.js";
import "./Home.css";
import HomeProductGrid from "./HomeProductGrid.js";

function Home() {
   localStorage.removeItem("Payment")

  return (
    <div className="home">
      <HomeCarousel />
      <HomeProductGrid />
    </div>
  );
}

export default Home;
