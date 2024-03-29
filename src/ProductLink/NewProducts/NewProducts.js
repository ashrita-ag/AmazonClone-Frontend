import React, { useState, useEffect } from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import Loading from "../../Components/Loading";
import axios from "axios";

function NewProducts() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get("/api/product/cat/3")
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) setError("Some error occured. Try again!");
        else {
          var allNewProducts = [];
          allNewProducts = m.data.map((i) => (
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
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Some error occured. Try again!");
      });
    setLoading(false);
  }, []);

  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_ORIGIN_1263493_1343243_IN_in_adapt_asin_refresh_1170648_in_en_3342970_1500x300_en_IN.jpg"
        backcolor="#15ba92"
      />
      <div className="errorMsgProduct"> {error}</div>

      {loading ? <Loading /> : productList}
      {productList.length === 0 && <div>No products for this category</div>}
    </div>
  );
}

export default NewProducts;
