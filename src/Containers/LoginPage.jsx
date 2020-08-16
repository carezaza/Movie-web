import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

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
        overflowY: "auto",
      }}
    >
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          gridGap: 20,
          padding: "40px 20px",
          border: "2px solid #ccc",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" component="h5">
          Login
        </Typography>
        <TextField
          type="text"
          label="Username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          size="small"
        />{" "}
        <TextField
          type="password"
          label="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
