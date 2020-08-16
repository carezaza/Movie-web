import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import Preview from "../Components/Preview";
import Collection from "../Components/Collection";
import { useSelector } from "react-redux";
import withSpinner from "./withSpinner";
import StyledLink from "../Components/StyledLink";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 1100,
    margin: "auto",
    padding: 10,
  },
  title: {
    marginTop: 20,
  },
}));

function PreviewHome() {
  const classes = useStyles();
  const { movies } = useSelector((state) => state.moviesReducer);
  const [num, setNum] = useState(0);

  const handleSwitch = React.useCallback(
    (action) => {
      switch (action) {
        case "prev":
          if (num === 0) {
            return setNum(movies.length - 1);
          }
          return setNum((n) => n - 1);
        case "next": {
          if (num === movies.length - 1) {
            return setNum(0);
          }
          return setNum((n) => n + 1);
        }
        default:
          break;
      }
    },
    [movies.length, num]
  );

  useEffect(() => {
    const myVar = setInterval(() => {
      handleSwitch("next");
    }, 5000);
    return () => {
      clearInterval(myVar);
    };
  }, [handleSwitch]);

  return (
    <React.Fragment>
      <Preview movie={movies[num]} handleSwitch={handleSwitch} />
      <div className={classes.container}>
        <Typography
          color="secondary"
          variant="h5"
          component="h5"
          className={classes.title}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Popular
          <StyledLink to="/category/popular">
            <Button variant="outlined" color="secondary">
              See more
            </Button>
          </StyledLink>
        </Typography>
        <div
          style={{
            minHeight: 500,
            border: "1px solid #ccc",
            padding: 10,
            margin: 10,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Collection />
        </div>
      </div>
    </React.Fragment>
  );
}

export default withSpinner(PreviewHome);
