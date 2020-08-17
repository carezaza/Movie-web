import { AddItemToCart, DecreaseItem } from "./utils";

const INITIAL_STATE = {
  carts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_ITEM":
      return {
        ...state,
        carts: AddItemToCart(payload, state.carts),
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case "DECREASE_ITEM":
      return {
        ...state,
        carts: DecreaseItem(payload, state.carts),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      };
    case "CLEAR_CARTS":
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
