import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import CardInfo from "./CardInfo";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "grid",
    gridTemplateColumns: "auto",
    gridGap: 30,
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
    padding: "50px 20px",
    border: "1px solid #ccc",
  },
  overview: {
    padding: 10,
    color: "#fff",
    border: `2px solid #ccc`,
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
  textOverview: {
    margin: "10px 0",
  },
  poster: {
    width: "100%",
    maxWidth: 400,
    height: 400,
    borderRadius: 5,
    margin: "auto",
    border: "2px solid black",
  },
  button: {
    marginTop: 20,
  },
  buying: {
    margin: "0 0 auto auto",
    padding: 20,
    borderRadius: 5,
  },
}));

const Info = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export default function MovieInfo({ movie }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.Container}>
      <Typography
        component="h4"
        variant="h4"
        color="textPrimary"
        className={classes.title}
      >
        {movie.title}
      </Typography>

      <img
        alt={movie.title}
        className={classes.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />

      <Info>
        <iframe
          title="youTube"
          className={classes.iframe}
          src={`https://www.youtube.com/embed/${movie.video}`}
          allowFullScreen={true}
        ></iframe>
        <CardInfo detail={movie} />
      </Info>
      <OverviewContainer>
        <div className={classes.overview}>
          <Typography
            color="textPrimary"
            variant="h5"
            component="h5"
            className={classes.title}
          >
            Overview
          </Typography>
          <Typography color="textPrimary" className={classes.textOverview}>
            &nbsp;&nbsp;&nbsp;&nbsp; {movie.overview}
          </Typography>
        </div>
        <div className={classes.buying}>
          <p align="center">
            Price - <strong>{movie.price}฿</strong>
          </p>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: movie })}
          >
            Add to cart
          </Button>
        </div>
      </OverviewContainer>
    </div>
  );
}
