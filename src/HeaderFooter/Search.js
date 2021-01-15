import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseStateValue } from "../StateProvider/StateContext.js";
import Products from "../ProductLink/Products.js";
import Loading from "../Components/Loading";
import "./Search.css";

function Search() {
  const [foundProducts, setFoundProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText] = UseStateValue().searchText;

  useEffect(() => {
    console.log({ searchText });
    console.log(searchText.length);

    if (searchText.length > 1) {
      setLoading(true);
      setError(null);

      axios
        .post("/product/search", { searchItem: searchText })
        .then((m) => {
          const errorMsg = m.data.errorMsg;
          if (errorMsg) setError("Some error occured. Try again!");
          else {
            var found = [];
            found = m.data.map((i) => (
              <Products
                key={i._id}
                productImg={i.imageUrl}
                heading={i.title}
                price={i.price}
                rating={i.rating}
                id={i._id}
              />
            ));
            setFoundProducts(found);
          }
        })
        .catch((e) => {
          console.log(e);
          setError("Some error occured. Try again!");
        });
      setLoading(false);
    }
  }, [searchText]);

  return loading ? (
    <Loading />
  ) : error ? (
    <div>Uh OH! Some error occured.</div>
  ) : searchText.length === 0 ? (
    <h6>Nothing to Display</h6>
  ) : (
    <div className="searchMain">
      <h6 className="searchHeading">
        Showing results for search query = "{searchText}"
      </h6>
      {foundProducts.length === 0 ? (
        <h6>No Products found for this search query.</h6>
      ) : (
        <div className="searchProducts">{foundProducts}</div>
      )}
    </div>
  );
}

export default Search;
