import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [cart, setCart] = useState([]);
  const [name, setName] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [cost, setCost] = useState(0);

  const [address, setAddress] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [finalCost, setFinalCost] = useState(0);
  const [deliverySpeed, setDeliverySpeed] = useState(0);
  const [gift, setGift] = useState(false);

  //Getting Refresh Token
  useEffect(() => {
    // console.log("Getting Token");
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin || isLogged) {
      const refreshToken = () => {
        axios
          .get("/api/user/token", {
            withCredentials: true,
          })
          .then((m) => {
            const errorMsg = m.data.errorMsg;
            if (errorMsg) {
              console.log(errorMsg); //The Error message is when user is not logged in.
            } else {
              setToken(m.data.accesstoken);
              setTimeout(() => {
                refreshToken();
              }, 24 * 60 * 60 * 1000); //1 day
            }
          })
          .catch((e) => console.log(e));
      };
      refreshToken();
    } else {
      setToken(null);
      setIsLogged(false); //check if infinite loop
    }
    // console.log("Got Token");
  }, [isLogged]);

  //Set total cost and items of cart items
  useEffect(() => {
    // console.log("Setting Total cost and items of Cart");
    if (isLogged) {
      setTotalItems(cart?.reduce((amt, item) => amt + parseInt(item.count), 0));
      setCost(
        cart?.reduce(
          (amt, item) => amt + parseInt(item.price) * parseInt(item.count),
          0
        )
      );
    } else {
      setTotalItems(0);
      setCost(0);
    }
    // console.log("Set Total cost and items of Cart");
  }, [cart, isLogged]);

  //Getting User Info
  useEffect(() => {
    // console.log("Getting User Info");
    if (token) {
      const currUser = () => {
        axios
          .get("/api/user/info", {
            headers: { Authorization: token },
            withCredentials: true,
          })
          .then((m) => {
            const errorMsg = m.data.errorMsg;
            if (errorMsg) {
              console.log(errorMsg);
              alert("Uh Oh! Some error Occured.");
            } else {
              setIsLogged(true);
              setCart(m.data.cart);
              setName(m.data.Fname);
            }
          })
          .catch((e) => {
            alert("Uh Oh! Some error Occured.");
            console.log(e);
          });
      };
      currUser();
    } else {
      setIsLogged(false);
      setCart([]);
      setName("");
    }
    // console.log("Got User Info");
  }, [token]);

  //Set Addresses
  useEffect(() => {
    // console.log("Setting the addresses");
    if (token) {
      axios
        .get("/api/address/show", { headers: { Authorization: token } })
        .then((m) => {
          const errorMsg = m.data.errorMsg;
          if (errorMsg) {
            console.log(errorMsg);
            alert("Uh Oh! Some error Occured.");
          } else setAddress(m.data);
        })
        .catch((e) => {
          alert("Uh Oh! Some error Occured.");

          console.log(e);
        });
    } else {
      setAddress([]);
    }
    // console.log("Set the addresses");
  }, [token]);

  //Set Delivery Details
  useEffect(() => {
    // console.log("Setting Delivery Details");
    const paymentStarted = localStorage.getItem("Payment");
    if (paymentStarted && token) {
      axios
        .get("/api/delivery/details", { headers: { Authorization: token } })
        .then((m) => {
          const errorMsg = m.data.errorMsg;
          if (errorMsg) console.log(errorMsg);
          else {
            setDeliveryAddress(m.data.address);
            setCost(m.data.cost);
            setGift(m.data.gift);
            setDeliverySpeed(m.data.speed);
            setFinalCost(m.data.finalcost);
          }
        })
        .catch((e) => {
          alert("Uh Oh! Some error Occured.");
          console.log(e);
        });
    } else {
      setDeliveryAddress({});
      setCost(0);
      setGift(false);
      setDeliverySpeed(0);
      setFinalCost(0);
    }
    // console.log("Set Delivery Details");
  }, [token]);

  const initialState = {
    token: [token, setToken], //Access Token
    name: [name, setName],
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
    searchText: [searchText, setSearchText],
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateValue = () => useContext(StateContext);
