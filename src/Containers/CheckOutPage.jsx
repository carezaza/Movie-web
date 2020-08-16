import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OrderTable from "../Components/OrderTable";
import { useSelector, connect, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core/";
import StyledLink from "../Components/StyledLink";
import CartInfo from "../Components/Cart/CartInfo";
import { createStructuredSelector } from "reselect";
import {
  TotalQuantitySelector,
  TotalPriceSelector,
} from "../Redux/cart/selector";
import ConfirmModal from "../Components/ConfirmModal";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
  },
  container: {
    width: "100%",
    maxWidth: 1100,
    margin: "auto",
    padding: 10,
  },
}));

function CheckOutPage({ totalQuantity, totalPrice }) {
  const classes = useStyles();
  const [isConfirm, setConfirm] = useState(false);
  const [time, setTIme] = useState(63);
  const { carts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch({ type: "CLEAR_CARTS" });
    setConfirm(true);
  };

  useEffect(() => {
    let myVar = null;
    if (isConfirm) {
      myVar = setInterval(() => {
        setTIme((t) => t - 1);
      }, 1000);
    }
    return () => {
      clearInterval(myVar);
    };
  }, [isConfirm]);

  if (time < 0) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h5" component="h5" color="secondary">
          สั่งซื้อ
        </Typography>
        {carts.length < 1 ? (
          <div style={{ margin: "20px 0", textAlign: "center" }}>
            <h3 style={{ color: "black" }}>Your cart is empty.</h3>
            <div style={{ margin: "20px" }}>
              <StyledLink to="/">
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ margin: 10 }}
                >
                  กลับหน้าแรก
                </Button>
              </StyledLink>
            </div>
          </div>
        ) : (
          <div>
            <OrderTable carts={carts} />
            <CartInfo
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
              Action={
                <div
                  style={{
                    margin: "20px 0",
                  }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleConfirm}
                  >
                    ยืนยันการสั่งซื้อ
                  </Button>
                </div>
              }
            />
          </div>
        )}
      </div>
      <ConfirmModal open={isConfirm} time={time} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  totalQuantity: TotalQuantitySelector,
  totalPrice: TotalPriceSelector,
});

export default connect(mapStateToProps)(CheckOutPage);
