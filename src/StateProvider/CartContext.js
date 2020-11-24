import React,{useContext,createContext,useReducer} from "react";

export const CartContext = createContext();

export const CartProvider = (props) =>
(
   <CartContext.Provider value={useReducer(props.reducer,props.initialState)}>
       {props.children}
   </CartContext.Provider>
);

export const UseCartValue = () => useContext(CartContext);