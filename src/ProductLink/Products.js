import React from "react";
import "./Products.css";
// import { UseStateValue } from "../StateProvider/StateContext.js";
import StarRateIcon from '@material-ui/icons/StarRate';


function Products(props) {
  // const [, dispatch] = UseStateValue(); 
  //  //[cart,dispatch]

  const addToCart = () => {
    // dispatch({
    //   type: AddToCart,
    //   item: {
    //     id :props.id,
    //     heading: props.heading,
    //     img: props.productImg,
    //     price: props.price,
    //   },
    // });
  };

const rating = [];
for(let i=0;i<props.rating;i++) rating.push(<StarRateIcon key={i} />);  

  return (
    <div className="products">
      <div className="productImg">
        <img src={props.productImg} alt="productImage" />
      </div>

      <div className="productText">
        <div className="productDetails">
          <div className="productDetailsHeading">{props.heading}</div>
          <div className="productDetailsPrice">
            <sup className="productDetailsCurrency">&#8377;</sup>
            {props.price}.00
          </div>
          <div className="productDetailsRating"> {rating}
          </div>
        </div>

        <div className="productButton ">
          <button className="amazonButton" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
