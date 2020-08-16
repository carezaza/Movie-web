import { createSelector } from "reselect";

const cartsSelector = (state) => state.cartReducer.carts;

export const TotalQuantitySelector = createSelector(cartsSelector, (items) => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
});

export const TotalPriceSelector = createSelector(cartsSelector, (items) => {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
});
