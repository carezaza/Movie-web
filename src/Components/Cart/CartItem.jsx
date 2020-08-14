import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 5,
    boxShadow:'none',
    border: '1px solid #ccc'
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

export default function CartItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://s.isanook.com/mv/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvMTcvODYyNDkvYXZlbmdlcnNpbmZpbml0eXdhci5qcGc=.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <h4>Live From Space</h4>
          <Typography variant="subtitle2">Price - 150฿</Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <Typography>10</Typography>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
