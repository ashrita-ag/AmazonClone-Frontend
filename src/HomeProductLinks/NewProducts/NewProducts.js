import React from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";

function NewProducts() {
  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_ORIGIN_1263493_1343243_IN_in_adapt_asin_refresh_1170648_in_en_3342970_1500x300_en_IN.jpg"
        backcolor="#15ba92"
      />
      <Products
        productImg="https://images-eu.ssl-images-amazon.com/images/I/41LyBR2PH+L._AC_US218_FMwebp_QL70_.jpg"
        heading="(Renewed) AmazonBasics RJ45 Cat-6 Ethernet Patch/LAN Cable -5Feet (1.5Meters)"
        price="227"
        rating="&#9733; &#9733; &#9733; &#9733; &#9733;"
      />

      <Products
        productImg="https://m.media-amazon.com/images/I/61fPCf6ELcL._AC_UY218_.jpg"
        heading="(Renewed) HyperX Cloud Stinger Core for PC with in-line Audio Control"
        price="2485"
        rating="&#9733; &#9733; &#9733; &#9733; "
      />

      <Products
        productImg="https://m.media-amazon.com/images/I/71gMx7NADKL._AC_UY218_.jpg"
        heading="(Renewed) Honor Sport Bluetooth Earphones (Red)"
        price="1330"
        rating="&#9733; &#9733; &#9733;"
      />

      <Products
        productImg="https://m.media-amazon.com/images/I/51YwPMOcJwL._AC_UY218_.jpg"
        heading="(Renewed) OPPO R15 Pro (Cosmic Purple, 6GB RAM, 128GB Storage)"
        price="22097"
        rating="&#9733; &#9733; &#9733; &#9733;"
      />
      {/* </div> */}
    </div>
  );
}

export default NewProducts;
