import React, { useState, useEffect } from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import Loading from "../../Components/Loading";
import axios from "axios";

function HomeOffice() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get("/product/cat/2")
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) setError("Some error occured. Try again!");
        else {
          var HomeOfficeProducts = [];
          HomeOfficeProducts = m.data.map((i) => (
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
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Self_Reliant_Store/WFH/IN_PC_WFH_Central_Store_1500.jpg"
        backcolor="#e1dad4 "
      />
      <div className="errorMsgProduct"> {error}</div>

      {loading ? <Loading /> : productList}
      {productList.length === 0 && <div>No products for this category</div>}
    </div>
  );
}

export default HomeOffice;
