import React from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";

function NewProducts() {
  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/HOLIDAY/BrowsePages2/desktop/L0/FGG-hero-3.jpg"
        backcolor="#1c3f21"
      />
      <Products
        id = "1234"
        productImg="https://images-na.ssl-images-amazon.com/images/I/51WeSMjooDL._UL1024_.jpg"
        heading="Women's Skinny Fit Jeans"
        price="1200"
        rating="&#9733;&#9733;&#9733;"
      />

      <Products
      id = "1235"
        productImg="https://images-na.ssl-images-amazon.com/images/I/919uzBZtVIL._UL1500_.jpg"
        heading="Chronograph Analog Watch - for Men"
        price="1389"
        rating="&#9733;&#9733;&#9733;&#9733; "
      />

      <Products
      id = "1236"
        productImg="https://images-na.ssl-images-amazon.com/images/I/81usHYQFH6L._UL1500_.jpg"
        heading=" Men's Vulcansied Canvas Sneakers"
        price="879"
        rating="&#9733;&#9733;&#9733;&#9733;"
      />

      <Products
      id = "1237"
        productImg="https://images-na.ssl-images-amazon.com/images/I/51Hrp3SYtkL._UL1000_.jpg"
        heading="Set of 4 Multilayer Bracelet for Women (Golden)"
        price="385"
        rating="&#9733;&#9733;&#9733;&#9733;"
      />
      {/* </div> */}
    </div>
  );
}

export default NewProducts;
