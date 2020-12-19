import React, { useContext, createContext, useEffect, useState } from "react";
const axios = require("axios");

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [address, setAddress] = useState([]);

  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [cost, setCost] = useState(0);
  const [deliverySpeed, setDeliverySpeed] = useState(0);
  const [gift, setGift] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    console.log("Inside use Effect");
    if (firstLogin) {
      const refreshToken = async () => {
        const response = await axios.get("http://localhost:5000/user/token", {
          withCredentials: true,
        });
        console.log("firstLogin");

        setToken(response.data.accesstoken);

        setTimeout(() => {
          refreshToken();
        }, 24 * 60 * 60 * 1000); //1 day
      };
      refreshToken();
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      setTotalItems(cart?.reduce((amt, item) => amt + parseInt(item.count), 0));
    } else setTotalItems(0);
  }, [cart, isLogged]);

  useEffect(() => {
    if (token) {
      console.log("inside Token");
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

  useEffect(() => {
    axios
      .get("/address/show", { headers: { Authorization: token } })
      .then((e) => {
        // console.log("address");
        setAddress(e.data);
      })
      .catch((e) => console.log(e));
  }, [token]);

  useEffect(() => {
    axios
      .get("/delivery/details", { headers: { Authorization: token } })
      .then((e) => {
        if (e.data){
        setDeliveryAddress(e.data.address);
        setCost(e.data.cost);
        setGift(e.data.gift);
        setDeliverySpeed(e.data.speed);}
      })
      .catch((e) => console.log(e));
  }, [token]);

  const initialState = {
    token: [token, setToken],
    name: [name, setName],
    email: [email, setEmail],
    isLogged: [isLogged, setIsLogged],
    cart: [cart, setCart],
    totalItems: [totalItems, setTotalItems],
    address: [address, setAddress],
    deliveryAddress: [deliveryAddress, setDeliveryAddress],
    cost: [cost, setCost],
    deliverySpeed: [deliverySpeed, setDeliverySpeed],
    gift: [gift, setGift],
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateValue = () => useContext(StateContext);
