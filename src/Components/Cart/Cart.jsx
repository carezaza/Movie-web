import React from "react";
import { Badge, Drawer, IconButton } from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartListItem from "./CartListItem";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CartInfo from "./CartInfo";

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="cart"
        onClick={() => setOpen(true)}
      >
        <Badge badgeContent={0} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton color="inherit" onClick={() => setOpen(false)} style={{marginRight:'auto'}}>
          <ArrowForwardIosIcon />
        </IconButton>
        <CartListItem />
        <CartInfo />
      </Drawer>
    </React.Fragment>
  );
}
