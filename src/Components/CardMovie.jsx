import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import StyledLink from "./StyledLink";
import EditIcon from "@material-ui/icons/Edit";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

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
    "&:hover": {
      color: "#f55690",
    },
  },
}));

export default function CardMovie({ movie }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [price, setPrice] = React.useState(movie.price);
  const [edit, setEdit] = React.useState(false);

  const handleEdit = () => {
    if (edit) {
      dispatch({ type: "SET_PRICES", payload: { id: movie.id, price } });
    }
    setEdit(!edit);
  };

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

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: movie });
  };

  return (
    <React.Fragment>
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
              color="secondary"
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
          <div style={{ display: "flex", alignItems: "center" }}>
            {edit ? (
              <TextField
                type="number"
                id="price"
                name="price"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            ) : (
              <Typography color="textPrimary" variant="subtitle2" component="p">
                ราคา: <strong>{price > 0 ? price + "บาท" : "ฟรี"}</strong>
              </Typography>
            )}
            <IconButton style={{ marginLeft: "auto" }} onClick={handleEdit}>
              {edit ? (
                <DoneOutlineIcon color="secondary" />
              ) : (
                <EditIcon color="secondary" />
              )}
            </IconButton>
          </div>

          <IconButton
            aria-label="add to cart"
            className={classes.cartIcon}
            style={{ marginLeft: "auto" }}
            color="primary"
            onClick={handleAddToCart}
          >
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
