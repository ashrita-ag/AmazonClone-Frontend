import React, { useState, useEffect } from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import Loading from "../../Components/Loading";
import axios from "axios";

function AddProducts() {
  const [productList, setproductList] = useState([]);
  const [loadingComponent, setLoadingComponent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoadingComponent(true);
    setError("");
    axios
      .get("/product/cat/1")
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) setError("Some error occured. Refresh to try again!");
        else {
          var AdditionalProducts = [];
          AdditionalProducts = m.data.map((i) => (
            <Products
              key={i._id}
              productImg={i.imageUrl}
              heading={i.title}
              price={i.price}
              rating={i.rating}
              id={i._id}
            />
          ));
          setproductList(AdditionalProducts);
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Some error occured. Refresh to try again!");
      });
    setLoadingComponent(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/HOLIDAY/BrowsePages2/desktop/L0/FGG-hero-3.jpg"
        backcolor="#1c3f21"
      />
      <div className="errorMsgProduct"> {error}</div>

      {loadingComponent ? <Loading /> : productList}
      {productList.length === 0 && <div>No products for this category</div>}
    </div>
  );
}

export default AddProducts;
