import React from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import {productsNew} from "../../data.js";

const allNewProducts = productsNew.map((i) => (
  <Products
    key={i.id}
    productImg={i.productImg}
    heading={i.heading}
    price={i.price}
    rating={i.rating}
  />
));

function NewProducts() {
  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_ORIGIN_1263493_1343243_IN_in_adapt_asin_refresh_1170648_in_en_3342970_1500x300_en_IN.jpg"
        backcolor="#15ba92"
      />

      {allNewProducts}
    </div>
  );
}

export default NewProducts;
