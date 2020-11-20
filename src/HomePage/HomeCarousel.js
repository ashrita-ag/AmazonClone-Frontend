import React from "react";
import "./HomeCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function HomeCarousel() {
  return (
    <div className="homeCarousel">
      <Carousel
        interval={5000}
        indicators={false}
        nextIcon={
          <span className="homeCarouselNextIcon">
            <ArrowForwardIosIcon fontSize="large" />
          </span>
        }
        prevIcon={
          <span className="homeCarouselBackIcon">
            <ArrowBackIosIcon fontSize="large" />
          </span>
        }
      >
        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase4/3day/Phase4_Unrec_PC_Hero_1x._CB416859894_.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/OHL_Discovery/Jupiter/11nov/PC_hero_1500x600-UNREC._CB416865976_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/Phase4/Rv1_callouts2/M21/D18527732_Jupiter2020_Phase4_SamsungM21_DesktopHero_1500x600._CB416867348_.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Consumables/Jupiter20/Phase4/UrgencyNov11/DesktopHero_salesendin3days_starting99_1500x600._CB416847090_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
