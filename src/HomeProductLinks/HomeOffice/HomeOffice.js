import React from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";

function NewProducts() {
  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Self_Reliant_Store/WFH/IN_PC_WFH_Central_Store_1500.jpg"
        backcolor="#e1dad4 "
      />
      <Products
      id ="1111"
        productImg="https://images-na.ssl-images-amazon.com/images/I/417aHoqozHL._SL1371_.jpg"
        heading="JioFi JDR740 (Dongle) 150Mbps Wireless 4G Portable Router"
        price="1999"
        rating="&#9733;&#9733;&#9733;&#9733;"
      />

      <Products
      id ="1112"

        productImg="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
        heading="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor (Black)"
        price="8699"
        rating="&#9733;&#9733;&#9733;&#9733;&#9733;"
      />

      <Products
      id ="1113"

        productImg="https://images-na.ssl-images-amazon.com/images/I/81tcTNLD0QL._SL1500_.jpg"
        heading="4-Tier Metal Mesh File/Documents/Letters/A4 Size Files Rack with slidable compartments"
        price="695"
        rating="&#9733;&#9733;&#9733;&#9733;"
      />

      <Products
      id ="1114"

        productImg="https://images-na.ssl-images-amazon.com/images/I/61XQBMrIn6L._SL1200_.jpg"
        heading=" Plastic Storage Basket, Multicolor "
        price="439"
        rating="&#9733;&#9733;&#9733;"
      />
    </div>
  );
}

export default NewProducts;
