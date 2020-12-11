import React from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import {productsHome} from "../../data"

const HomeOfficeProducts = productsHome.map((i) => (
  <Products
    key={i.id}
    productImg={i.productImg}
    heading={i.heading}
    price={i.price}
    rating={i.rating}
  />
));

function HomeOffice() {
  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Self_Reliant_Store/WFH/IN_PC_WFH_Central_Store_1500.jpg"
        backcolor="#e1dad4 "
      />
     {HomeOfficeProducts}
    </div>
  );
}

export default HomeOffice;
