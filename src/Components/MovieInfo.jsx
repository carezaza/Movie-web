import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CardInfo from "./CardInfo";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "grid",
    gridTemplateColumns: "auto",
    gridGap: 30,
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
    padding: 50,
    backgroundColor: "rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.2)",
  },
  info: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridGap: "20px 10px",
  },
  overview: {
    padding: 10,
    color: "#fff",
    border: `1px solid ${theme.colors.design.four}`,
    borderRadius: 5,
    wordBreak: "break-word",
  },
  iframe: {
    width: "100%",
    maxWidth: 600,
    height: 350,
    border: "none",
    borderRadius: 5,
  },
  title: {
    color: theme.colors.design.three,
  },
  textOverview: {
    margin: "10px 0",
    color: theme.colors.design.five,
  },
  poster: {
    width: "100%",
    maxWidth: 400,
    height: 400,
    borderRadius: 5,
    margin: "auto",
  },
  button: {
    marginTop: 20,
    backgroundColor: theme.colors.design.two,
    "&:hover": {
      backgroundColor: "#258d80",
    },
  },
  buying: {
    margin: "0 0 auto auto",
    padding: 20,
    background: "rgba(255,255,255,.3)",
    borderRadius: 5,
  },
}));

export default function MovieInfo({ movie }) {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <h1 className={classes.title}>{movie.title}</h1>

      <img
        alt={movie.title}
        className={classes.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />

      <div className={classes.info}>
        <iframe
          title="youTube"
          className={classes.iframe}
          src={`https://www.youtube.com/embed/${movie.video}`}
        ></iframe>
        <CardInfo detail={movie} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
        <div className={classes.overview}>
          <h3 className={classes.title}>Overview</h3>
          <p className={classes.textOverview}>
            &nbsp;&nbsp;&nbsp;&nbsp; {movie.overview}
          </p>
        </div>
        <div className={classes.buying}>
          <p align="center">
            Price - <strong>{movie.price}฿</strong>
          </p>
          <Button className={classes.button}>Add to card</Button>
        </div>
      </div>
    </div>
  );
}
