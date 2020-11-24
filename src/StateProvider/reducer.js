export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_to_Cart":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "Delete_from_Cart":
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
