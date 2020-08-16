import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StyledLink from "../Components/StyledLink";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: "center",
    backgroundSize: "cover",
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
    display: "flex",
    width: "100%",
    gridGap: 10,
    maxWidth: 900,
    margin: "auto",
  },
  info: {
    position: "absolute",
    top: 200,
    left: 100,
    maxWidth: 400,
    maxHeight: 400,
    padding: 5,
    wordBreak: "break-word",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "unset",
      left: "unset",
    },
  },

  button: {
    margin: "10px 5px",
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
  const dispatch = useDispatch();

  const overview = () => {
    if (!movie) return "...";
    if (movie.overview.length > 150) {
      return movie.overview.slice(0, 150) + "...";
    }
    return movie.overview;
  };

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
            <h2 className={classes.margin}>
              {movie ? movie.title : "Not found movie."}
            </h2>
            <p className={classes.margin}>{overview()}</p>
            <p className={classes.margin}>
              Price - <strong>{movie && movie.price}฿</strong>
            </p>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => dispatch({ type: "ADD_ITEM", payload: movie })}
            >
              Add to cart
            </Button>

            {handleSwitch && movie && (
              <StyledLink to={`/movie/${movie.id}`}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                >
                  See more
                </Button>
              </StyledLink>
            )}
          </div>
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
