import React, { useContext, createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => (
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
);

export const UseStateValue = () => useContext(StateContext);
