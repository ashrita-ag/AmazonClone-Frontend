import {
  AddToCart,
  DeleteFromCart,
  LoginSuccess,
  RegisterSuccess,
  LogoutSuccess,
} from "../ActionType";

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
    // break;
    case DeleteFromCart:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      console.log(action);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      return { ...state, cart: state.cart };

    case LoginSuccess:
      return {};

    case LogoutSuccess:
      return {};

    case RegisterSuccess:
      return {};

    default:
      return state;
  }
};

export default reducer;
