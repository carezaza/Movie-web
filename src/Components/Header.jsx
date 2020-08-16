import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import StyledLink from "./StyledLink";
import SearchInput from "./SearchInput";
import Cart from "./Cart/Cart";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: 60,
  },
  menuRight: {
    marginLeft: "auto",
  },
  buttonLogin: {
    margin: "0 10px",
    padding: "3px 10px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");

  const history = useHistory();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      history.push(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <AppBar position="fixed" className={classes.bar}>
      <Toolbar>
        <StyledLink to="/">
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
        </StyledLink>

        <SearchInput
          value={search}
          handleSearch={handleSearch}
          handleChange={setSearch}
        />
        <div className={classes.menuRight}>
          <Cart />
        </div>
        {/* <StyledLink to="/login">
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonLogin}
          >
            Login
          </Button>
        </StyledLink> */}
      </Toolbar>
    </AppBar>
  );
}
