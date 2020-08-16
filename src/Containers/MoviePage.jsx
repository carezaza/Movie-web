import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetMovie } from "../Redux/movies/actions";
import MovieShow from "../Components/MovieShow";

export default function MoviePage({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);

  const { movie } = useSelector((state) => state.moviesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      await dispatch(SetMovie(id));
      setLoading(false);
    };
    fetchMovie();
    return () => {
      dispatch({ type: "CLEAR_MOVIE" });
    };
  }, [id, dispatch, setLoading]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MovieShow movie={movie} isLoading={loading} />
    </div>
  );
}
