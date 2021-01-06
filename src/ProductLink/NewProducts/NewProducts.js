import React, { useState, useEffect } from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import Loading from "../../Components/Loading";
import axios from "axios";

function NewProducts() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/product/cat/3")
      .then((e) => {
        var allNewProducts = [];

        console.log("allNewProducts");
        allNewProducts = e.data.map((i) => (
          <Products
            key={i._id}
            productImg={i.imageUrl}
            heading={i.title}
            price={i.price}
            rating={i.rating}
            id={i._id}
          />
        ));
        setproductList(allNewProducts);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_ORIGIN_1263493_1343243_IN_in_adapt_asin_refresh_1170648_in_en_3342970_1500x300_en_IN.jpg"
        backcolor="#15ba92"
      />
      {loading ? <Loading /> : productList}
    </div>
  );
}

export default NewProducts;
