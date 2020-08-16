import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DeleteIcon from "@material-ui/icons/Delete";
import StyledLink from "../StyledLink";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 5,
    boxShadow: "none",
    border: "1px solid #ccc",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function CartItem({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddRemoveDelete = (action) => {
    switch (action) {
      case "increase":
        return dispatch({ type: "INCREASE_ITEM", payload: item.id });
      case "decrease":
        return dispatch({ type: "DECREASE_ITEM", payload: item.id });
      case "remove":
        return dispatch({ type: "REMOVE_ITEM", payload: item.id });
      default:
        break;
    }
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
        title={item.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <StyledLink to={`/movie/${item.id}`}>
            <h5>
              {item.title.length > 15
                ? item.title.slice(0, 15) + "..."
                : item.title}
            </h5>
          </StyledLink>

          <p style={{ fontSize: 14, fontWeight: 600 }}>Price - {item.price}฿</p>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={() => handleAddRemoveDelete("decrease")}>
            <ArrowLeftIcon />
          </IconButton>
          <Typography>{item.quantity}</Typography>
          <IconButton onClick={() => handleAddRemoveDelete("increase")}>
            <ArrowRightIcon />
          </IconButton>
          <IconButton onClick={() => handleAddRemoveDelete("remove")}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
