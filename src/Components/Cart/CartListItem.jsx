import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  CartItemContainer: {
    padding: 5,
    border: "1px solid #ccc",
    maxHeight: "80%",
    overflowY: "auto",
  },
}));

export default function CartListItem() {
  const classes = useStyles();

  return (
    <div className={classes.CartItemContainer}>
      <CartItem />   <CartItem />
    </div>
  );
}
