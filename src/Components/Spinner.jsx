import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
        background: "#E5E5E5",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
}
