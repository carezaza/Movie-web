import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  button: {
    margin: "10px 0",
    color: "#fff",
    backgroundColor: theme.colors.design.two,
    "&:hover": {
      backgroundColor: theme.colors.design.two,
    },
  },
}));

export default function CartInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Total</h3>
      <p>
        price - <strong>1200฿</strong>
      </p>
      <p>
        quantity - <strong>19</strong>
      </p>
      <Button className={classes.button}>Check out</Button>
    </div>
  );
}
