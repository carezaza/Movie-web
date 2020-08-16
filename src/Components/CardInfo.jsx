import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    maxHeight: 350,
    overflowY: "auto",
  },
  list: {
    borderBottom: "1px solid #ccc",
  },
}));

export default function CardInfo({ detail }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className={classes.list}>
        <ListItemText primary="Vote average" secondary={detail.vote_average} />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText
          primary="Genres"
          secondary={detail.genres.map((g) => g.name).join(",")}
        />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText primary="Status" secondary={detail.status} />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText
          primary="Original language"
          secondary={detail.original_language}
        />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText
          primary="Production companies"
          secondary={detail.production_companies.map((p) => p.name).join(" & ")}
        />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText
          primary="Production countries"
          secondary={detail.production_countries.map((p) => p.name).join(" & ")}
        />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText
          primary="Spoken languages"
          secondary={detail.spoken_languages.map((s) => s.name).join(",")}
        />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText primary="Release date" secondary={detail.release_date} />
      </ListItem>
      <ListItem className={classes.list}>
        <ListItemText primary="Budget" secondary={detail.budget} />
      </ListItem>
    </List>
  );
}
