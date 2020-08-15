import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StyledLink from "./StyledLink";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 235,
    height: 300,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    backgroundColor: theme.colors.design.three,
    "&:hover": {
      backgroundColor: "#d1b05f",
    },
  },
  cartIcon: {
    color: theme.colors.design.two,
    "&:hover": {
      color: theme.colors.design.one,
    },
  },
  title: {
    color: theme.colors.design.five,
    "&:hover": {
      color: theme.colors.design.one,
    },
  },
}));

export default function CardMovie({ movie }) {
  const classes = useStyles();

  const Title = () => {
    if (movie.title) {
      if (movie.title.length > 40) {
        return movie.title.slice(0, 40) + "...";
      } else {
        return movie.title;
      }
    }
    return "No Title";
  };

  return (
    <Card
      className={classes.root}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
      }}
    >
      <CardContent
        style={{
          padding: "0 15px",
          marginTop: "auto",
          backgroundColor: "rgba(255,255,255,.85)",
          height: "20%",
        }}
      >
        <StyledLink to={`/movie/${movie.id}`}>
          <Typography
            color="textPrimary"
            variant="subtitle1"
            component="h1"
            className={classes.title}
          >
            {Title()}
          </Typography>
        </StyledLink>
      </CardContent>
      <CardActions
        style={{ backgroundColor: "rgba(255,255,255,.85)" }}
        disableSpacing
      >
        <Typography color="textPrimary" variant="subtitle2" component="p">
          Price: <strong>{movie.price ? movie.price : "0"}฿</strong>
        </Typography>
        <IconButton
          aria-label="add to cart"
          className={classes.cartIcon}
          style={{ marginLeft: "auto" }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
