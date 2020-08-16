import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Collection from "../../Components/Collection";
import Pagination from "../../Components/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 1100,
    margin: "auto",
    padding: 10,
  },
  title: {
    margin: "20px 0",
  },
}));

function WithPagination({ params, type, loading }) {
  const classes = useStyles();
  const { id, pageId } = params;

  const history = useHistory();

  // states from reducers
  const { totalPages } = useSelector((state) => state.moviesReducer);

  const handlePaginate = (action) => {
    switch (action) {
      case "next":
        return history.push(`/${type}/${id}/${parseInt(pageId) + 1}`);
      case "prev":
        return history.push(`/${type}/${id}/${parseInt(pageId) - 1}`);
      case "first":
        return history.push(`/${type}/${id}/1`);
      case "last":
        return history.push(`/${type}/${id}/${totalPages}`);
      default:
        return history.push(`/${type}/${id}/${action}`);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant="h5"
          component="h5"
          color="secondary"
        >{`${
          type.charAt(0).toUpperCase() + type.slice(1, type.length)
        }: ${id}`}</Typography>
        <Pagination
          currentPage={pageId}
          TotalPages={totalPages}
          paginate={handlePaginate}
        />
        <Collection isLoading={loading} />
        <Pagination
          currentPage={pageId}
          TotalPages={totalPages}
          paginate={handlePaginate}
        />
      </div>
    </div>
  );
}

export default WithPagination;
