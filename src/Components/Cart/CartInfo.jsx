import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px",
    marginTop: "auto",
    background: theme.palette.background.paper,
    textAlign: "right",
  },
}));

function CartInfo({ totalQuantity, totalPrice, Action }) {
  const classes = useStyles();

  const GetDiscount = () => {
    if (totalQuantity > 3 && totalQuantity <= 5) {
      return Math.floor((totalPrice * 10) / 100);
    }
    if (totalQuantity > 5) {
      return Math.floor((totalPrice * 20) / 100);
    }
    return 0;
  };
  return (
    <div className={classes.root}>
      <h3>ทั้งหมด</h3>
      <p>
        ราคา: <strong>{totalPrice - GetDiscount()} บาท</strong>
        <small
          style={{
            textDecoration: "line-through",
            margin: "0 5px",
            fontWeight: 600,
            color: "grey",
          }}
        >
          {totalPrice} บาท
        </small>
      </p>
      <p>
        ส่วนลด: <strong>{GetDiscount()} บาท</strong>
      </p>
      <p>
        จำนวน: <strong>{totalQuantity}</strong>
      </p>

      {Action}
    </div>
  );
}

export default CartInfo;
