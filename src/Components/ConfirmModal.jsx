import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    height: 400,
    overflowY: "auto",
    margin: "auto",
    background: theme.palette.background.paper,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: theme.colors.status.success,
    margin: 20,
  },
  bank: {
    color: "black",
    padding: 20,
    borderBottom: "1px solid #ccc",
  },
}));

export default function ConfirmModal({ open, time }) {
  const classes = useStyles();

  const body = (
    <div className={classes.root}>
      <div>
        <h3 className={classes.title} align="center">
          Your order has been created.
        </h3>
      </div>
      <div className={classes.bank}>
        <h3>Bank Transfer</h3>
        <p>นาย นมัสวิน บุญตาระวะ</p>
        <p>
          ไทยพานิช <strong>123-456-789</strong>
        </p>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: 5,
          borderBottom: "1px solid #ccc",
          height: "35%",
        }}
      >
        {time > 3 ? (
          <p style={{ fontSize: 100 }}>{time}</p>
        ) : (
          <p style={{ fontSize: 16 }}>Redirecting to home... {time}</p>
        )}
      </div>
      <div style={{ display: "grid", placeItems: "center", margin: 10 }}>
        <Button color="secondary" variant="outlined">
          Wait or click here to back to home
        </Button>
      </div>
    </div>
  );

  if (!open) return null;
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,0.7)",
        padding: 5,
      }}
    >
      {body}
    </div>
  );
}
