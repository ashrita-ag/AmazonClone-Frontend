import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [cost, setCost] = useState(0);

  const [address, setAddress] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [finalCost, setFinalCost] = useState(0);
  const [deliverySpeed, setDeliverySpeed] = useState(0);
  const [gift, setGift] = useState(false);

  //Getting Refresh Token
  useEffect(() => {
    console.log("Getting Token");
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin || isLogged) {
      const refreshToken = () => {
        axios
          .get("/user/token", {
            withCredentials: true,
          })
          .then((m) => {
            const errorMsg = m.data.errorMsg;
            if (errorMsg) {
              alert(errorMsg);
              window.location.href = "/login";
            } else {
              setToken(m.data.accesstoken);
              setTimeout(() => {
                refreshToken();
              }, 24 * 60 * 60 * 1000); //1 day
            }
          });
      };
      setLoading(true);
      refreshToken();
      setLoading(false);
    }
    console.log("Got Token");
  }, [isLogged]);

  //Update Number of Items in Cart
  useEffect(() => {
    console.log("Setting Total Items in Cart");
    if (isLogged) {
      setTotalItems(cart?.reduce((amt, item) => amt + parseInt(item.count), 0));
    } else setTotalItems(0);
    console.log("Set Total Items in Cart");
  }, [cart, isLogged]);

  //Set total cost of cart items
  useEffect(() => {
    console.log("Setting Total Cost of Cart");
    if (isLogged) {
      setCost(
        cart?.reduce(
          (amt, item) => amt + parseInt(item.price) * parseInt(item.count),
          0
        )
      );
    } else setCost(0);
    console.log("Set Total Cost of Cart");
  }, [cart, isLogged]);

  //Getting User Info
  useEffect(() => {
    console.log("Getting User Info");

    if (token) {
      const currUser = () => {
        axios
          .get("/user/info", {
            headers: { Authorization: token },
            withCredentials: true,
          })
          .then((res) => {
            const errorMsg = res.data.errorMsg;
            if (errorMsg) alert(errorMsg);
            else {
              setIsLogged(true);
              setCart(res.data.cart);
              setName(res.data.Fname);
              setEmail(res.data.email);
            }
          })
          .catch((e) => {
            alert("Some error oocured.");
            console.log(e);
          });
      };
      setLoading(true);
      currUser();
      setLoading(false);
    } else {
      setIsLogged(false);
      setCart([]);
      setName("");
      setEmail("");
    }
    console.log("Got User Info");
  }, [token]);

  //Set Addresses
  useEffect(() => {
    console.log("Setting the addresses");
    if (token) {
      setLoading(true);

      axios
        .get("/address/show", { headers: { Authorization: token } })
        .then((e) => {
          const errorMsg = e.data.errorMsg;
          if (errorMsg) alert(errorMsg);
          else setAddress(e.data);
        })
        .catch((e) => {
          alert("Some error oocured.");
          console.log(e);
        });
      setLoading(false);
    } else {
      setAddress([]);
    }
    console.log("Set the addresses");
  }, [token]);

  //Set Delivery Details
  useEffect(() => {
    console.log("Setting Delivery Details");

    const paymentStarted = localStorage.getItem("Payment");
    if (paymentStarted && token) {
      setLoading(true);

      axios
        .get("/delivery/details", { headers: { Authorization: token } })
        .then((e) => {
          const errorMsg = e.data.errorMsg;
          if (errorMsg) {
            setDeliveryAddress({});
            setCost(0);
            setGift(false);
            setDeliverySpeed(0);
            setFinalCost(0);
          } else if (e.data) {
            setDeliveryAddress(e.data.address);
            setCost(e.data.cost);
            setGift(e.data.gift);
            setDeliverySpeed(e.data.speed);
            setFinalCost(e.data.finalcost);
          }
        })
        .catch((e) => {
          alert("Some error oocured.");
          console.log(e);
        });
      setLoading(false);
    } else {
      setDeliveryAddress({});
      setCost(0);
      setGift(false);
      setDeliverySpeed(0);
      setFinalCost(0);
    }
    console.log("Set Delivery Details");
  }, [token]);

  const initialState = {
    token: [token, setToken], //Access Token
    name: [name, setName],
    email: [email, setEmail],
    isLogged: [isLogged, setIsLogged],
    cart: [cart, setCart],
    totalItems: [totalItems, setTotalItems], //number of Items in cart
    address: [address, setAddress], //List of delivery addresses
    deliveryAddress: [deliveryAddress, setDeliveryAddress], //Selected delivery Address
    cost: [cost, setCost], //Total cost of Items
    deliverySpeed: [deliverySpeed, setDeliverySpeed], //Delivery Speed Opted
    gift: [gift, setGift], //Gift or not (from Backend)
    finalCost: [finalCost, setFinalCost], //Final Cost to be paid
    loading: [loading, setLoading],
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateValue = () => useContext(StateContext);
