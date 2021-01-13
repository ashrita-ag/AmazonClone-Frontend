import React, { useState, useEffect } from "react";
import BannerImage from "../BannerImage.js";
import Products from "../Products.js";
import Loading from "../../Components/Loading";
import axios from "axios";

function AddProducts() {
  const [productList, setproductList] = useState([]);
  const [loadingComponent, setLoadingComponent] = useState(false);

  useEffect(() => {
    setLoadingComponent(true);
    axios
      .get("/product/cat/1")
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) alert("Some error occured. Try again!");
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
          setLoadingComponent(false);
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Some error occured. Try again!");
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homeProductsContainer">
      <BannerImage
        image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/HOLIDAY/BrowsePages2/desktop/L0/FGG-hero-3.jpg"
        backcolor="#1c3f21"
      />

      {loadingComponent ? <Loading /> : productList}
    </div>
  );
}

export default AddProducts;
