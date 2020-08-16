import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { FetchMoviesFromType } from "../Redux/movies/actions";
import PreviewHome from "../Components/PreviewHome";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      await dispatch(FetchMoviesFromType("popular"));
      setLoading(false);
    };
    fetchMovies();

    return () => {
      dispatch({ type: "CLEAR_MOVIES" });
    };
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <PreviewHome isLoading={loading} />
    </div>
  );
}
