import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StyledLink from "../Components/StyledLink";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: "center",
    backgroundSize: "100% 600px",
    backgroundRepeat: "no-repeat",

    boxShadow: `inset 0 0 30px 30px ${theme.colors.design.one}`,
  },
  animation: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
  },
  container: {
    marginTop: "60px auto",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    height: 600,
  },
  infoContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    gridGap: 10,
    maxWidth: 900,
    margin: "auto",
  },
  info: {
    padding: 5,
    wordBreak: "break-word",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 5,
  },

  button: {
    backgroundColor: theme.colors.design.four,
    margin: "10px 5px",
    "&:hover": {
      backgroundColor: "#db9157",
    },
  },

  margin: {
    margin: 10,
  },
  iconButton: {
    borderRadius: 0,
  },
}));

export default function Preview({ movie, handleSwitch }) {
  const classes = useStyles();

  return (
    <div
      className={`${classes.root} ${classes.animation}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundImage:
          movie &&
          `url(http://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {handleSwitch && (
        <IconButton
          className={classes.iconButton}
          onClick={() => handleSwitch("prev")}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <div className={classes.info}>
            <h2 className={classes.margin}>{movie && movie.title}</h2>
            <p className={classes.margin}>{movie && movie.overview}</p>
            <p className={classes.margin}>
              Price - <strong>{movie && movie.price}฿</strong>
            </p>
            <Button className={classes.button}>Add to cart</Button>

            {handleSwitch && (
              <StyledLink to={`/movie/${movie.id}`}>
                <Button className={classes.button}>See more</Button>
              </StyledLink>
            )}
          </div>
          <div></div>
        </div>
      </div>
      {handleSwitch && (
        <IconButton
          className={classes.iconButton}
          onClick={() => handleSwitch("next")}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </div>
  );
}
