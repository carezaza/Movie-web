import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import StyledLink from "./StyledLink";
import SearchInput from "./SearchInput";

import Cart from "./Cart/Cart";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: theme.colors.design.one,
  },
  menuRight: {
    marginLeft: "auto",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <StyledLink to="/">
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
        </StyledLink>
        <SearchInput />
        <div className={classes.menuRight}>
          <Cart />
        </div>
      </Toolbar>
    </AppBar>
  );
}
