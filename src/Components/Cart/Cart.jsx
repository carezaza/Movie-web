import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Badge, Drawer, IconButton, Button } from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartListItem from "./CartListItem";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CartInfo from "./CartInfo";
import { useSelector, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  TotalQuantitySelector,
  TotalPriceSelector,
} from "../../Redux/cart/selector";
import StyledLink from "../StyledLink";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#fff",
    width: "100%",
  },
}));

function Cart({ totalQuantity, totalPrice }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartReducer);

  return (
    <React.Fragment>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="cart"
        onClick={() => setOpen(true)}
        style={{ margin: "0 5px" }}
      >
        <Badge badgeContent={totalQuantity} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <IconButton
            color="inherit"
            onClick={() => setOpen(false)}
            style={{ marginRight: "auto" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch({ type: "CLEAR_CARTS" })}
            color="inherit"
            style={{ marginLeft: "auto" }}
            disabled={!carts.length}
          >
            <RemoveShoppingCartIcon />
          </IconButton>
        </div>

        <CartListItem items={carts} />
        <CartInfo
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          Action={
            <StyledLink to="/checkout">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                ตกลงสั่งซื้อ
              </Button>
            </StyledLink>
          }
        />
      </Drawer>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  totalQuantity: TotalQuantitySelector,
  totalPrice: TotalPriceSelector,
});

export default connect(mapStateToProps)(Cart);
