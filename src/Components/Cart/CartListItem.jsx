import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  CartItemContainer: {
    padding: 5,
    border: "1px solid #ccc",
    height: "80%",
    overflowY: "auto",
    width: 290,
  },
}));

export default function CartListItem({ items }) {
  const classes = useStyles();

  return (
    <div className={classes.CartItemContainer}>
      {items.length < 1 ? (
        <p style={{ margin: "50px 0" }} align="center">
          Your cart is empty.
        </p>
      ) : (
        items.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}
