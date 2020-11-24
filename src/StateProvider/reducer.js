export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Add_to_Cart':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "Delete_from_Cart" : 
    return {
      state
    }
    default:
      return state;
  }
};

export default reducer;
