import React from "react";
import { productsAdd } from "../../data.js";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";

const AdditionalProducts = productsAdd.map((i) => (
  <Products
    key={i.id}
    productImg={i.productImg}
    heading={i.heading}
    price={i.price}
    rating={i.rating}
  />
));

function AddProducts() {
  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/HOLIDAY/BrowsePages2/desktop/L0/FGG-hero-3.jpg"
        backcolor="#1c3f21"
      />
      {AdditionalProducts}
    </div>
  );
}

export default AddProducts;
