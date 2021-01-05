import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  // const [giftItem, setGiftItem] = useState(false);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [address, setAddress] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [cost, setCost] = useState(0);
  const [finalCost, setFinalCost] = useState(0);
  const [deliverySpeed, setDeliverySpeed] = useState(0);
  const [gift, setGift] = useState(false);

  //Getting Refresh Token
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    console.log("Getting Token");
    if (firstLogin) {
      const refreshToken = async () => {
        const response = await axios.get("http://localhost:5000/user/token", {
          withCredentials: true,
        });
        setToken(response.data.accesstoken);
        setTimeout(() => {
          refreshToken();
        }, 24 * 60 * 60 * 1000); //1 day
      };
      refreshToken();
    }
  }, []);

  //Update Number of Items in Cart
  useEffect(() => {
    console.log("Setting Total Items in Cart");
    if (isLogged) {
      setTotalItems(cart?.reduce((amt, item) => amt + parseInt(item.count), 0));
    } else setTotalItems(0);
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
  }, [cart, isLogged]);

  //Getting User Info
  useEffect(() => {
    if (token) {
      console.log("Getting User Info");
      const currUser = async () => {
        try {
          const res = await axios.get("http://localhost:5000/user/info", {
            headers: { Authorization: token },
            withCredentials: true,
          });
          setIsLogged(true);
          setCart(res.data.cart);
          setName(res.data.Fname);
          setEmail(res.data.email);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      currUser();
    }
  }, [token]);

  //Set Addresses
  useEffect(() => {
    const paymentStarted = localStorage.getItem("Payment");
    if (paymentStarted) {
      console.log("Setting the addresses");
      axios
        .get("/address/show", { headers: { Authorization: token } })
        .then((e) => {
          setAddress(e.data);
        })
        .catch((e) => console.log(e));
    } else {
      setAddress([]);
    }
  }, [token]);

  //Set Delivery Details
  useEffect(() => {
    const paymentStarted = localStorage.getItem("Payment");
    if (paymentStarted) {
      console.log("Setting Delivery Details");
      axios
        .get("/delivery/details", { headers: { Authorization: token } })
        .then((e) => {
          if (e.data) {
            setDeliveryAddress(e.data.address);
            setCost(e.data.cost);
            setGift(e.data.gift);
            setDeliverySpeed(e.data.speed);
            setFinalCost(e.data.finalcost);
          }
        })
        .catch((e) => console.log(e));
    } else {
      setDeliveryAddress({});
      setCost(0);
      setGift(false);
      setDeliverySpeed(0);
      setFinalCost(0);
    }
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
    // giftItem: [giftItem, setGiftItem], //Stores gift item from frontend checkout page
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateValue = () => useContext(StateContext);
