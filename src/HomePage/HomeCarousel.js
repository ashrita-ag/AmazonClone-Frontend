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
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Oct/GW/DesktopHero_1500x600._CB402740210_.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/November/GW/1500x600_Shutterbug_fest_Nov._CB415529971_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/Mobile_multimodal---Hindi_3000x1200-1X._CB417289332_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeCarouselImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/BTF/Nov/GW_PC_BUNK-1500-x-600._CB415678352_.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
