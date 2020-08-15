import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    color: theme.colors.design.four,
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
        <h3 style={{ color: "white" }}>{`${type}: ${id}`}</h3>
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
