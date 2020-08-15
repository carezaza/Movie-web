import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMovie from "./CardMovie";
import { useSelector } from "react-redux";
import withSpinner from "./withSpinner";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 0",
  },
  movieContainer: {
    display: "grid",
    padding: "30px 10px",
    gridTemplateColumns: "repeat(4,auto)",
    gridGap: 20,
    width: "100%",
    border: "none",
    outline: "none",
    margin: "auto",
  },
  notFound: {
    color: theme.colors.design.three,
  },
}));
function Collection() {
  const classes = useStyles();
  const { movies } = useSelector((state) => state.moviesReducer);

  return (
    <div className={classes.movieContainer}>
      {!movies && !movies.length ? (
        <h2 className={classes.notFound}>Not found the movies.</h2>
      ) : (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      )}
    </div>
  );
}

export default withSpinner(Collection);
