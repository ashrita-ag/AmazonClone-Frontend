import { AddToCart, DeleteFromCart } from "../ActionType";

export const initialState = {
  name: null,
  email: null,
  isLoggedIn: null,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case AddToCart:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case DeleteFromCart:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      console.log(action);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      return { ...state, cart: state.cart };

      
    default:
      return state;
  }
};

export default reducer;
