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
    setLoading(true);
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin || isLogged) {
      console.log("Getting Token");
      const refreshToken = async () => {
        const response = await axios.get("/user/token", {
          withCredentials: true,
        });
        setToken(response.data.accesstoken);
        setTimeout(() => {
          refreshToken();
        }, 24 * 60 * 60 * 1000); //1 day
      };
      refreshToken();
    }
    setLoading(false);
  }, [isLogged]);

  //Update Number of Items in Cart
  useEffect(() => {
    setLoading(true);
    console.log("Setting Total Items in Cart");
    if (isLogged) {
      setTotalItems(cart?.reduce((amt, item) => amt + parseInt(item.count), 0));
    } else setTotalItems(0);
    setLoading(false);
  }, [cart, isLogged]);

  //Set total cost of cart items
  useEffect(() => {
    setLoading(true);

    console.log("Setting Total Cost of Cart");
    if (isLogged) {
      setCost(
        cart?.reduce(
          (amt, item) => amt + parseInt(item.price) * parseInt(item.count),
          0
        )
      );
    } else setCost(0);
    setLoading(false);
  }, [cart, isLogged]);

  //Getting User Info
  useEffect(() => {
    setLoading(true);
    if (token) {
      console.log("Getting User Info");
      const currUser = async () => {
        try {
          const res = await axios.get("/user/info", {
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
    } else {
      setIsLogged(false);
      setCart([]);
      setName("");
      setEmail("");
    }
    setLoading(true);
  }, [token]);

  //Set Addresses
  useEffect(() => {
    setLoading(true);

    const paymentStarted = localStorage.getItem("Payment");
    if (paymentStarted && token) {
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
    setLoading(false);
  }, [token]);

  //Set Delivery Details
  useEffect(() => {
    setLoading(true);

    const paymentStarted = localStorage.getItem("Payment");
    if (paymentStarted && token) {
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
    setLoading(false);
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

  console.log({ loading });

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateValue = () => useContext(StateContext);
