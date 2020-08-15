import React, { useEffect, useState } from "react";
import WithPagination from "./Compatible/WithPagination";
import { FetchMoviesFromType } from "../Redux/movies/actions";
import { useDispatch } from "react-redux";

function CategoryPage({ match }) {
  const { id, pageId } = match.params;

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      await dispatch(FetchMoviesFromType(id));
      setLoading(false);
    };

    fetchMovies();

    return () => {
      dispatch({ type: "CLEAR_MOVIES" });
    };
  }, [id, dispatch, pageId]);

  return (
    <WithPagination params={match.params} loading={loading} type="category" />
  );
}

export default CategoryPage;
