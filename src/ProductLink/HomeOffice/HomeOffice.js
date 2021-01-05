import React, { useState, useEffect } from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import axios from "axios";

function HomeOffice() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/product/cat/2")
      .then((e) => {
        var HomeOfficeProducts = [];

        console.log("HomeOfficeProducts");
        HomeOfficeProducts = e.data.map((i) => (
          <Products
            key={i._id}
            productImg={i.imageUrl}
            heading={i.title}
            price={i.price}
            rating={i.rating}
            id={i._id}
          />
        ));
        setproductList(HomeOfficeProducts);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Self_Reliant_Store/WFH/IN_PC_WFH_Central_Store_1500.jpg"
        backcolor="#e1dad4 "
      />
      {loading ? <h1>Loading</h1> : productList}
      {/* {HomeOfficeProducts} */}
    </div>
  );
}

export default HomeOffice;
